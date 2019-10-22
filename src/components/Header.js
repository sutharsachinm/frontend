import React, { Component } from 'react';
import { connect } from 'react-redux';
import Auth from '../Auth/Auth.js';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import history from '../history'
  const auth = new Auth();
// import 'react-responsive-modal/lib/react-responsive-modal.css';
const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

 

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            registerType:0,
            emailAddress2:""
        };
    }
    
    login() {
      const {login} = auth;
      login();
    }

    validateEmail(email){
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
      {
        return true;
      }
      return false;
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value });
  checkEmail(id,plan){
    
    let email =document.getElementById(id).value;
   
    if (this.validateEmail(email))
     {
       
      
       fetch("/", {
         method: "POST",
         headers: { "Content-Type": "application/x-www-form-urlencoded" },
         body: encode({ "form-name": "contact-form-3", ...this.state })
       })
         .then((res) =>{
          
           this.props.changeRole(email);
           this.props.changeRegisterType(1);
           this.props.ChangePlan(plan);
            // history.go();
            window.location.href='/product-tours/'+email+'/1'

         })
         .catch(error =>{

          
          
           setTimeout(()=>{
             toast.error("Something went wrong !! Please try again", {
               position: toast.POSITION.TOP_RIGHT
             });
             window.location.href="/";
            },3000)
           
         });
 

     
     }
     else {
       
         toast.error("You have entered an invalid email address!", {
           position: toast.POSITION.TOP_RIGHT
         });
     }
 
   
 }

    componentWillMount(){
  

      if(this.getHeader()===false)
      {
        // window.location.href="/404";
      }
      else
      {
         this.setState({step:this.getHeader()})
      }

      window.addEventListener('scroll', function(e) {
        let last_known_scroll_position = window.scrollY;
     
        let el = document.getElementById('myHeader');
        el.classList.remove('border-bottom');
        if(last_known_scroll_position>80)
        {
          el.classList.add('fixed-top');
          // el.classList.add('border-bottom');
        }
        else{
          el.classList.remove('fixed-top');
       
        }
      
       
      });

    }

    getHeader = () => {

      
      
      if(window.location.pathname.indexOf('signup')!=-1)
      {
        return 1;
      }
    
      if(window.location.pathname.indexOf('plan')!=-1)
      {
        return 2;
      }
    
      if(window.location.pathname.indexOf('confirm')!=-1)
      {
        return 3;
      }
     
      return false;
    
    };


    handleRoute(val){
      this.props.changeRegisterType(val);
    }

      
   

   


    render() {

      const {registerType} = this.props;
      const {emailAddress2} = this.state;

        return (
            
          <div id="myHeader"  className="navbar navbar-expand-lg navbar-light bg-white header-space"> 
            <ToastContainer />
            
             
            {registerType=="0" && (
                <section className="container">

              <a className="navbar-brand" href="/">
                <img src="/production/static/img/logo.png" className="navbar-brand-img" alt="..." />
                <span className="navbar-title">
                    Pro 
                </span>
              </a>
               
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            
              <div className="collapse navbar-collapse" id="navbarCollapse">
      
             
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                  <i className="fe fe-x"></i>
                </button>
 
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link "  href="/features" > Why Profit Pro </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link "  href="/pricing" >
                      Pricing
                    </a>
                 </li>
                  <li className="nav-item ">
                    <a className="nav-link "   href="/testimonials">
                      Testimonials
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link"  href="https://support.profitpro.io/hc/en-us" >
                    Support
                    </a>
                  </li>

                  <li className="nav-item  d-lg-none">
                    <a className="nav-link" onClick={this.login.bind(this)}  href="javascript:void(0)" >
                    Sign In
                    </a>
                  </li>
                </ul>
      
               
               
                <div className="text-center d-lg sign-style ">
               
                    {/* <input type="text" className="emailText shadow lift " id="applyName" placeholder="Your email address"/> */}
                    <div className="input-group feature-header-sign hidden-sm hidden-md hidden-xs">
                    
                      <input type="email" id="emailAddress2"  name="emailAddress2" value={emailAddress2} onChange={this.handleChange.bind(this)}  className="form-control text-size pl-2 border-right-0" placeholder="Email Address"  />
                      <a href="javascript:void(0);" onClick={this.checkEmail.bind(this,'emailAddress2',0)} className="btn btn-size btn-primary-soft">
                        Get started
                      </a>
                    </div>
                
                </div>
                <ul className="navbar-nav ml-auto d-lg login-style  ">
                  <li className="nav-item hidden-sm hidden-md hidden-xs">
                    <a className="nav-link" href="javascript:void(0);" onClick={this.login.bind(this)}>
                    Sign In
                    </a>
                  </li>
                </ul>
      
              </div>
                 
                 </section>
              
            )}


           {registerType>0 && (
                  
                  <div className="container">
                  <a className="navbar-brand" href="/">
                    <img src="/production/static/img/logo.png" className="navbar-brand-img" alt="..." />
                    <span className="navbar-title">
                        Pro 
                    </span>
                  </a>
                   
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                
                  <div className="collapse navbar-collapse" id="navbarCollapse">
          
                 
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                      <i className="fe fe-x"></i>
                    </button>
          
                    <ul className="navbar-nav navbar-nav1 ml-auto">
                      <li className="nav-item">
                        <a className={"nav-link "+ (registerType ==1 ? 'isActive' :'' ) } id="signu-1"  
                        href='javascript:void(0);' onClick={this.handleRoute.bind(this,1)}  > 1. Create account </a>
                      </li>
                      <li className="nav-item ">
                        <a className={"nav-link "+ (registerType ==2 ? 'isActive' :'' ) } onClick={this.handleRoute.bind(this,2)}  id="plan-1"    href='javascript:void(0);' >
                        2. Confirm plan
                        </a>
                     </li>
                      <li className="nav-item ">
                        <a  className={"nav-link "+ (registerType ==3 ? 'isActive' :'' ) } id="confirm-1"    href='javascript:void(0);'>
                          3. Start trial
                        </a>
                      </li>
                      
          
                      
                    </ul>
          
                   
                   
                    
                    <ul className="navbar-nav  ml-auto d-lg  size-of-font  ">
                      <li className="nav-item hidden-sm hidden-md hidden-xs">
                        <a className="nav-link login" href="javascript:void(0);" onClick={this.login.bind(this)}>
                        Already using Profit Pro? Sign in
                        </a>
                      </li>
                    </ul>
          
                  </div>
            
                </div>
            )}

            </div>
        

        );
    }
}

const mapStateToProps = (state) => {
    return {
      initial: state.main.initial,
      registerType: state.main.registerType,
      role: state.main.role,
      planId: state.main.planId,
    };
};

const mapDispatchToProps = dispatch => {
  return {
    changeInitial: initial => {
      dispatch({
        type: "ChangeInitial",
        payload: initial
      });
    },
    ChangePlan: planId => {
      dispatch({
        type: "ChangePlan",
        payload: planId
      });
    },
    changeRole: role => {
      dispatch({
        type: "ChangeRole",
        payload: role
      });
    },
    changeRegisterType: registerType => {
      dispatch({
        type: "changeRegisterType",
        payload: registerType
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);


