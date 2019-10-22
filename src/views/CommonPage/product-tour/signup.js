import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import history from '../../../history'
import auth0 from 'auth0-js';

var webAuth = new auth0.WebAuth({
    domain: 'profitpro.auth0.com',
    clientID: 'CWuOoIu59fC3AzJmk1VwZfaA8JgTB0ve'
  });
 
 

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }
class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name:"SignUp",
            signCompSize:"",
            signFullName:"",
            signCompany:"",
            signEmail:this.props.role,
            signPhone:"",
            signPswd:"",
            signRole:"",
            signheard:"",
            signCompLoc:"",
            planId:"",
            plan:[
                {
                "key":"ESSENTIAL",
                "annual":37,
                "monthly":49,
                "data":[
                      { "title":"Daily Trending Products"},
                      { "title":"One-Click Import To Store"},
                      { "title":"Access to 7 Day Challenge"},
                      { "title":"Premium Video Ad"},
                      { "title":"Trending Market Analysis (AliX Graph)"},
                      { "title":"Detailed FB Audience Suggestions"},
                      { "title":"Spy On The Competition"},
                      { "title":"Optimized Product Pages"},
                  ]
                },
                {
                  "key":"68% OF BUSINESSES CHOOSE PRO",
                   "annual":49,
                  "monthly":69,
                  "data":[
                          { "title":"Spy On Competition "},
                          { "title":"Untapped Products "},
                          { "title":"Private Success Coach"},
                          { "title":"Control what kind of products you"},
                  ]
                },
                {
                  "key":"PREMIUM",
                  "annual":"",
                  "monthly":"",
                  "data":[
                          { "title":"Custom Product Marketing"},
                          { "title":"In House Fulfillment"},
                          { "title":"Custom Product Content"},
                  ]
                }
                  
              ]

        };
    }
    
    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    componentDidMount(){
        console.log(this.props);
        // if(this.props.registerType!==1 && this.props.planId=="")
        // {
        //    window.location.href="/";
        // }
        

        $("#myFooter").remove();
       console.log('dsadada',this.props.planId);
       
             
            this.setState({planId:this.props.planId})
        
    }

    validateEmail(email){
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        {
          return true;
        }
        return false;
      }

    handleClick(e){

        let signFullName = document.getElementById('signFullName').value;
        let signCompany = document.getElementById('signCompany').value;
        let signEmail = document.getElementById('signEmail').value;
        let signPhone = document.getElementById('signPhone').value;
        let signPswd = document.getElementById('signPswd').value;
        let signCompSize = document.getElementById('signCompSize').value;
        let error =0;
      
 

        if(signFullName=="")
        {
            document.getElementById("p_cardName").innerHTML="Please enter a Name";
            error++;
        }
        else
        {
            document.getElementById("p_cardName").innerHTML="";
        }

        if(signPswd=="")
        {
            
             document.getElementById("p_cardPass").innerHTML="Please enter a Password";
             error++;
        }
        else
        {
            document.getElementById("p_cardPass").innerHTML="";
        }
         
        if(this.validateEmail(signEmail))
        {
            document.getElementById("p_cardEmail").innerHTML="";
           
        }
        else
        {
          document.getElementById("p_cardEmail").innerHTML="Please enter a valid email address";
          error++;
        }
         
        if(error>0)
        {
             toast.error("Please fill all required fields", {
                position: toast.POSITION.TOP_RIGHT
              });
                   
        }
        else{

            let data ={
                signFullName:signFullName,
                signCompany:signCompany,
                signEmail:signEmail,
                signPhone:signPhone,
                signPswd:signPswd,
                signCompSize:signCompSize,
            }
      
           

              this.signUpAuth(data).then((res)=>{

                    return    $.ajax({
                        type: "POST",
                        url: "/",
                        headers: { "Content-Type": "application/x-www-form-urlencoded" },
                        data: encode({ "form-name": "signup-form", ...this.state })
                    });
            
                    // return true;
             }).then((res)=>{

                // toast.success("Thank you for contacting us. We will get back to you soon", {
                //     position: toast.POSITION.TOP_RIGHT
                //   });


                   setTimeout(()=>{
                        this.props.changeInitial(data);
                        this.props.changeRegisterType(2);
                       
                        history.replace('/product-tours/plan?email='+this.props.role);

                    },3000)
    

              }).catch((err)=>{
                        toast.error(err.description, {
                          position: toast.POSITION.TOP_RIGHT
                        });
                      

                        // setTimeout(()=>{
                        //     window.location.href="/";
    
                        // },3000)
              });
              
              e.preventDefault();
           
        }

    }

    signUpAuth(data){
    return   new Promise(async (resolve, reject) => {

        webAuth.signup({
            connection: 'Username-Password-Authentication',
            email:data.signEmail,
            password:data.signPswd,
            user_metadata: { name: data.signFullName, company: data.signCompany,companySize:data.signCompSize,phone:data.signPhone }
        },  (err) =>{
            if (err) {
                console.log(err)
                reject(err);
            }
            else{
               
                resolve(true);
            }
             
        });

       })

    }

     
    renderPrice(plan){

        return plan.map((el)=>{

          return (
            
                       
            <div className="box">
                <div className="o__gutter-x1">
                <span><svg className=" o__by-text" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M9.974 6.886V4.378c0-.18.063-.3.166-.358.042 0 .083 0 .104-.02.082 0 .187.04.29.12l4.238 3.422A.59.59 0 0 1 15 8c0 .16-.083.32-.228.458l-4.237 3.404c-.312.26-.56.14-.56-.238V9.116h-5.34v-2.23h5.34zM1 8.418v-.836c0-.378.333-.696.748-.696h1.39v2.23H1.75c-.407.002-.74-.308-.748-.698z"></path></svg> </span>
                <span>{el.title}</span>
                </div>
              </div>
           )

        })
    }
    componentWillReceiveProps(nextProps){

        if(nextProps.planId!=""){
            this.setState({planId:nextProps.planId})
        }

    }

    render() {
       

            const {planId,signCompLoc,plan,signFullName,signCompSize,signheard,signRole,signPswd,signPhone,signEmail,signCompany } = this.state;
            
            return (
            
            
                    <section className="section">
                          <ToastContainer />
                        <div className="container d-flex flex-column ">
                            <div className="row  justify-content-center no-gutters min-vh-100">
                            
                            <div className="hgt100  col-8 col-md-6 col-lg-5  order-md-2 mt-auto mt-md-0 pt-8 pb-4 mg-11 ">
                                <div className="trials-container">

                                    <div>
                                        <div className="trial-text" > Your free trial</div>
                                        <div className="sp_15"></div>
                                        {planId!=="" && 
                                        <div className="teams__trial">
                                            <div className="product-box product-box-text">
                                                <div className="sp__1"></div>
                                                <div className="product-box-title-text">
                                                    <div>{plan[planId].key}</div>
                                                </div>
                                                <div className="sp__2"></div>
                                                <div className="product-box-products">
                                                    <div className="sp__2"></div>
                                                    <div>Plan includes:</div>
                                                    <div className="sp__1"></div>
                                                    {this.renderPrice(plan[planId].data)}
                                               
                                                
                                                    
                                                </div>
                                                
                                                <div className="sp__1"></div>
                                                <div className="sp__1"></div>

                                            </div>
                                            <div className="sp__2"></div>

                                        </div>
                                        }
                                        <div id="ember791" className="ember-view">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="  tour-left col-12 col-md-5 col-lg-7 order-md-1 mb-auto mb-md-0 pb-8 mg-11">
                                
                            
                                <h1 className="mb-0 font-weight-bold text-center"> Sign Up </h1>

                                <p className="mb-6 text-center text-muted"> Simplify your workflow in minutes. </p>
                                
                               
                                <div className="sp__1"></div>
                                <div className="sp__1"></div>                        
                                <form method="post" className="mb-6">

                                <div className="form-group">
                                    <label htmlFor="email"> Full Name <span className="required">*</span> </label>
                                    <input type="text" value={signFullName} onChange={this.handleChange}  required className="form-control" name="signFullName" id="signFullName" placeholder="Full Name" />
                                    <p className="err" id="p_cardName" ></p>
                                </div>

                              
                                
                                <div className="form-group">
                                    <label htmlFor="email"> Email Address <span className="required">*</span> </label>
                                    <input type="email"  value={signEmail} onChange={this.handleChange} defaultValue={this.props.role} required className="form-control"  name="signEmail" id="signEmail" placeholder="name@address.com" />
                                    <p className="err" id="p_cardEmail" ></p>
                                </div>

                                
                                <div className="form-group mb-5">
                                    <label htmlFor="password"> Password <span className="required">*</span> </label>
                                    <input type="password"  value={signPswd} onChange={this.handleChange}   className="form-control" name="signPswd" id="signPswd" placeholder="Enter your password"/>
                                    <p className="err" id="p_cardPass" ></p>
                                </div>

                              

                                <div className="form-group mb-5">
                                    <label htmlFor="password"> Phone Number  </label>
                                    <div className="divFlex">
                                        <input type="number" value={signPhone} onChange={this.handleChange}   className="form-control" name="signPhone" id="signPhone" placeholder="Enter your Phone Number"/>
                                    </div>
                                </div>

                                

                                <div className="form-group">
                                    <label htmlFor="email"> Company Name   </label>
                                    <input type="text"   value={signCompany} onChange={this.handleChange}  className="form-control"  name="signCompany"  id="signCompany" placeholder="Your company name" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email"> Company Size   </label>
                                    <select      value={signCompSize} onChange={this.handleChange} className="form-control" id="signCompSize" name="signCompSize" placeholder="Company Size" >
                                           <option value="Unknown"> Select company size </option>
                                           <option value="1-4"> 1 - 4 employees </option>
                                           <option value="5-9"> 5 - 9 employees </option>
                                           <option value="10-49"> 10 - 49 employees </option>
                                           <option value="50-199"> 50 - 199 employees </option>
                                           <option value="200-499"> 200 - 499 employees </option>
                                           <option value="500-999"> 500 - 999 employees </option>
                                           <option value="1,000+"> 1,000+ employees </option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="company-location"> Company location</label>
                                    <select value={signCompLoc} onChange={this.handleChange}  name="signCompLoc" className="form-control" id="signCompLoc" placeholder="Company Name" >
                                           <option value="Unknown"> Select a country </option>
                                           <option value="India"> India </option>
                                           <option value="United States"> United States </option>
                                           <option value="United Kingdom"> United Kingdom </option>
                                           <option value="Aland"> Aland </option>
                                           <option value="Anguilla"> Anguilla </option>
                                           <option value="Belize"> Belize </option>
                                           
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="Role">  You role </label>
                                    <select    value={signRole} onChange={this.handleChange} className="form-control" id="signRole" name="signRole" placeholder="Your Role" >
                                           <option value="manager"> Manager </option>
                                           <option value="developer"> Developer </option>
                                           <option value="business_exective"> Business Executive </option>
                                           <option value="employee">Employee </option>
                                           <option value="other"> Other </option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="Company">  How did you hear about us?   </label>
                                    <select   value={signheard} onChange={this.handleChange} className="form-control" id="signheard" name="signheard" placeholder="How did you hear about us" >
                                           <option value="Google"> Google Search </option>
                                           <option value="Yahoo"> Yahoo Search </option>
                                           <option value="local_newspaper"> Local Newspaper </option>
                                           <option value="Friend">Friend/Familiy </option>
                                           <option value="poster">Poster </option>
                                           <option value="direct">Learn Direct </option>
                                           <option value="Leaflet"> Leaflet </option>
                                           <option value="other_internet"> Other Internet Search </option>
                                    </select>
                                </div>

                                
                                    <button onClick={this.handleClick.bind(this)} className="btn btn-block btn-primary" type="button"> Sign Up </button>

                                </form>

                            
                                {/* <p className="mb-0 font-size-sm text-center text-muted">Already using account <a href="signup-illustration.html">Sign up</a>. </p> */}

                            </div>
                            </div>  
                        </div>  
                </section>
          
      

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

const mapDispatchToProps = (dispatch) => {
    return {

        changeInitial: (initial) => {
            dispatch(
                {
                    type: "ChangeInitial",
                    payload: initial
                }
            );
        },
        changeRole: (role) => {
            dispatch(
                {
                    type: "ChangeRole",
                    payload: role
                }
            );
        },
        ChangePlan: (planId) => {
            dispatch(
                {
                    type: "ChangePlan",
                    payload: planId
                }
            );
        },
         changeRegisterType: (registerType) => {
            dispatch(
                {
                    type: "changeRegisterType",
                    payload: registerType
                }
            );
        }



    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);


