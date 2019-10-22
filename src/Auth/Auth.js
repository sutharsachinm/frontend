
import Auth0Lock from 'auth0-lock';
import auth0 from 'auth0-js';

import { AUTH_CONFIG } from './auth0-variables';
import history from '../history';
// import DataURL from '../Data/data.js';

const jQuery = require("jquery");
// var Base64 = require('base-64');


var _ = require('lodash');
var extraP ='';
const logo ="https://profitpro.io/production/static/img/logo.png";

 var gen_options = {
   autoParseHash: true,
   theme: {
    logo: logo,
    primaryColor: "#448aff"
  },
   auth: {
      redirectUrl: AUTH_CONFIG.callbackUrl,
      redirect: true,
      responseType: "token",
      sso:false,
      rememberLastLogin:false,
      params: {
        email_verified:true,
        scope: 'openid profile email user_metadata app_metadata"' // Learn about scopes: https://auth0.com/docs/scopes
     }
  },
  redirectUrl: AUTH_CONFIG.callbackUrl,
};


 
 

var lock = new Auth0Lock(AUTH_CONFIG.clientId, AUTH_CONFIG.domain,gen_options);

export default class Auth {
	 
     userProfile;
     type;

     constructor() {

      console.log(AUTH_CONFIG.callbackUrl)
     

       this.login = this.login.bind(this);
       this.logout = this.logout.bind(this);
       this.handleAuthentication = this.handleAuthentication.bind(this);
       this.isAuthenticated = this.isAuthenticated.bind(this);
       this.getAccessToken = this.getAccessToken.bind(this);
       this.getProfile = this.getProfile.bind(this);
       this.getUserById = this.getUserById.bind(this);
       this.signup = this.signup.bind(this);
       this.checkSession = this.checkSession.bind(this);


     }

     signup(type)
     {

        var prf ="individual";
        

        var options = {
        	 theme: {
        	  logo: logo,
        	  primaryColor: "#448aff"
        	},
         languageDictionary: {
            emailInputPlaceholder: "something@youremail.com",
            title: "Sign Up"
          },
         
         auth: {
             redirect: true,
             redirectUrl:AUTH_CONFIG.callbackUrl,
             sso: true,
         },
        
         popupOptions: { width: 800, height: 800, left: 200, top: 300 },
         allowShowPassword:true,
         loginAfterSignUp: false,
         responseType: 'token',
         allowLogin:false,
       };

       var lock_signup = new Auth0Lock(AUTH_CONFIG.clientId, AUTH_CONFIG.domain,options);
       lock_signup.show();

     }

     login() {

     	   var options = {
     	 	  	  languageDictionary: {
     	   	     emailInputPlaceholder: "something@youremail.com",
     	   	     title: "Sign In"
     	   	   },
     	   	  redirectUrl: AUTH_CONFIG.callbackUrl+extraP,
     	   	  popupOptions: { width: 800, height: 800, left: 200, top: 300 },
     	   	  allowShowPassword:true,
     	   	  allowLogin:true,
     	   	  allowSignUp:false,
     	   	  autoclose: true,
     	   
     	   	};
     	

        	lock.show(options);
     	
     
     }



     

     handleAuthentication(props) {

	      lock.on('authorization_error', function(error) {
	 		  			history.replace('/');
	     		  	  	 var options = {
	     		  		  	  languageDictionary: {
	     		  	  	     emailInputPlaceholder: "something@youremail.com",
	     		  	  	     title: "Login"
	     		  	  	   },
	     		  	  	   auth: {
	     		  	  	      redirectUrl: AUTH_CONFIG.callbackUrl+extraP,
	     		  	  	      redirect: true,
	     		  	  	      responseMode: "form_post",
	     		  	  	      responseType: "token",
	     		  	  	      params: {
	     		  	  	              scope: 'openid profile email user_metadata app_metadata"',
	     		  	  	      }
	     		  	  	  },
	     		  	  	  redirectUrl:AUTH_CONFIG.callbackUrl+extraP,
	     		  	  	  popupOptions: { width: 800, height: 800, left: 200, top: 300 },
	     		  	  	  allowShowPassword:true,
	     		  	  	  allowLogin:true,
	     		  	  	  allowSignUp:false,
	     		  	  	  autoclose: true,
		     		  	  	  flashMessage: {
		     		  	  	    type: 'error',
		     		  	  	    text: error.errorDescription
		     		  	  	  }
	     		  	  	};

	     		  	  	lock.show(options);
	     	});


         lock.on("authenticated", function(authResult) {
 
		       	if (authResult.accessToken) {
				         lock.getUserInfo(authResult.accessToken, function(err, profile) {

  			                if(err) 
                        {
				                  console.log(err);
                          alert(`Error: ${err.error}. Check the console for further details.`);
                          history.replace('/');
				                }
				               

				                 let expiresAt = JSON.stringify(
				                	   authResult.expiresIn * 1000 + new Date().getTime()
				                 );
				                 const scopes = authResult.scope || this.requestedScopes || '';
				                 localStorage.setItem("profile", JSON.stringify(profile));
				                 localStorage.setItem('access_token', authResult.accessToken);
				                 localStorage.setItem('id_token', authResult.idToken);
				                 localStorage.setItem('expires_at', expiresAt);
				                 localStorage.setItem('scopes', JSON.stringify(scopes));
                        //  history.goBack();
                        // history.push('')
                        window.location.href="https://app.profitpro.io/";
  				                 // history.replace('/');

				          });
			     }  
        });

     }

     getAccessToken() {
       const accessToken = localStorage.getItem('access_token');
       if (!accessToken) {
         throw new Error('No access token found');
       }
       return accessToken;
     }

     checkSession()
     {
     		let accessToken = this.getAccessToken();
     		lock.checkSession(accessToken, function (error, authResult) {
     		  if (error || !authResult) {
     		    this.login();
     		  } else {
     		   	return true;
     		  }
     		});
     }


     getProfile(cb) {
      
  	      let accessToken = this.getAccessToken();

          if(accessToken)
          {
              lock.getUserInfo(accessToken, function(error, profile) {
                if (!error) {
                   
                }

                cb(error, profile);
              });
          }
     }

     getUserById(userID,cb) {
          //  let action = DataURL.main.apiUrl + 'getUserById/'+window.creativeFound.acronym+'/'+window.creativeFound.creativeName+'/'+userID;
          //  jQuery.ajax({
          //   url: action,
          //   type: 'GET',
          //   success: (resp) => {
          //      cb(resp,null);
          //   },
          //   error:(err) =>{
          //     cb(null,err);
          //   }
          //  });
     }

     logout() {
       // Clear access token and ID token from local storage
       localStorage.removeItem('access_token');
       localStorage.removeItem('id_token');
       localStorage.removeItem('expires_at');
       this.userProfile = null;
        
       window.location.reload();
     }

     isAuthenticated() {
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
 		    return new Date().getTime() < expiresAt;
     }

     userHasScopes(scopes) {
  		   const grantedScopes = JSON.parse(localStorage.getItem('scopes')).split(' ');
 		    return scopes.every(scope => grantedScopes.includes(scope));
     }




}