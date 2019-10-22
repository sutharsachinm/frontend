import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import history from '../../../history'
 


class Confirm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name:"SignUp",
            planId:"",
            freeTrail:null,
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

    componentDidMount(){
        console.log(this.props);
        if(this.props.registerType==0)
        {
           window.location.href="/";
        }
        console.log("props freeTrail",this.props.props.fields);
        this.setState({planId:this.props.planId,freeTrail:this.props.props.fields})
        
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

    handleClick(){

        // let credit = document.getElementById('card-number').value;
        let company = document.getElementById('card-number').value;
        let error =0;
      

        // if(credit=="")
        // {
        //     error++;
        // }

        if(company=="")
        {
            document.getElementById("p_cardNumber").innerHTML="Please enter a valid credit card number";
            error++;
        }
        else{

        }

        if(error>0)
        {
            toast.error("Please fill all required fields", {
                position: toast.POSITION.TOP_RIGHT
              });
                   
        }
        else
        {
            // toast.success("Thank you for sign up", {
            //     position: toast.POSITION.TOP_RIGHT
            //   });
            // history.replace('/');
            this.props.auth.login();
          
            // setTimeout(()=>{
            //     window.location.href="https://app.profitpro.io/";
            // },3000)

        }

    }

     
     

    render() {

        
        const {planId,plan,freeTrail} = this.state;
        return (
            
            
                    <section className="section">
                          <ToastContainer />
                        <div className="container d-flex flex-column ">
                            <div className="row  justify-content-center no-gutters min-vh-100">
                            
                            <div className="hgt100 tour-right col-8 col-md-6 col-lg-5  order-md-2 mt-auto mt-md-0 pt-8 pb-4 mg-11 ">
                                <div className="trials-container">

                                <div>
                                        <div className="trial-text" > {freeTrail!=null & freeTrail.st_header_title}</div>
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
                                                    <div>{freeTrail!=null & freeTrail.st_plan_desc_1}:</div>
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
                            
                            <div className="u__overflow tour-left col-12 col-md-5 col-lg-7 order-md-1 mb-auto mb-md-0 pb-8 mg-11">
                                
                            
                                <h1 className="mb-0 font-weight-bold text-center">{freeTrail!=null & freeTrail.free_trial}  </h1>

                                
                                <div className="sp__1"></div>
                                <div className="sp__1"></div>                        
                                <form className="mb-6">

                                <div className="form-group">
                                    <label for="card-number"> {freeTrail!=null & freeTrail.credit_card} </label>
                                    <input type="number" name="card-number" className="form-control" id="card-number" placeholder="Card Number" />
                                    <p className="err" id="p_cardNumber" ></p>
                                </div>
                                
                                    <button className="btn btn-block btn-primary" onClick={this.handleClick.bind(this)} type="button"> S{freeTrail!=null & freeTrail.trial_day} </button>

                                </form>

                            
                                <p className="mb-0 font-size-sm text-center text-muted">By clicking "Start your free 14 day trial" you agree to Intercom's <a href="/terms-of-service">Terms of Service </a> and <a href="/privacy"> Privacy Policy </a>. Your credit card will be charged monthly and your fees may vary based on how we bill. Or <a href="https://app.profitpro.io/">view Profit Pro workspace without a trial</a> </p>

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
        ChangePlan: (planId) => {
            dispatch(
                {
                    type: "ChangePlan",
                    payload: planId
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


export default connect(mapStateToProps, mapDispatchToProps)(Confirm);


