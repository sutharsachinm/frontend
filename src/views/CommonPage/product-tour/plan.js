import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import history from '../../../history';

 


class Plan extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name:"SignUp",
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

    componentDidMount(){
      
        if(this.props.registerType!==2)
        {
            window.location.href="/";
        }
        console.log(this.props);
        this.setState({planId:this.props.planId})
    }

    handleNext(){

           
        if(this.props.initial=="Main"){

             toast.error("Please submit sign up form before confirm plan", {
                position: toast.POSITION.TOP_RIGHT
              });

            this.props.changeRegisterType(1);
        }
        else
        {
            this.props.changeRegisterType(3);
            history.replace('/product-tours/confirm?email='+this.props.role);

        }

      
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

        const {planId,plan} = this.state;
        console.log(plan)
        console.log('sadad',planId)

        return (
            
            
                     <section className="section">
                           <ToastContainer />
                        <div className="container d-flex flex-column ">
                            <div className="row  justify-content-center no-gutters min-vh-100">
                            
                              
                                <div className=" tour-left col-12 col-md-5 col-lg-7 order-md-1 mb-auto mb-md-0 pb-8 mg-11">
                                    <div className="">
                                  
                                        <h1 className="mb-0 font-weight-bold text-center"> Here's your trial plan </h1>
                                        <div className="sp__3"></div>
                                        <div className="centers-horizontally">
                                        {planId!=="" && 
                                            <div className="plan__card plan__text">
                                                <div className="plan-card-title">
                                                {plan[planId].key}
                                                </div>
                                                <div className="sp__2"></div>
                                                <div>Plan includes:</div>
                                                <div className="sp__3"></div>
                                                <div className="plan-title-text">Top Features: </div>
                                                <div className="sp__15"></div>
                                                <div className="layout-box o-flexes has-columns">
                                                    {this.renderPrice(plan[planId].data)}
                                                 </div>
                                            </div>
                                               
                                           

}
                                        </div> 
                                    </div>
                                    <div className="continue-footer layout-box o-centers-all">
                                        <div className="continue-container layout-box o-centers-all">
                                            <button   onClick={this.handleNext.bind(this)} className="btn o-primary ember-view teams-button button-addons" role="button" type="button">  
                                                <span className="button-span">
                                                  Continue 
                                                </span>
                                                <svg className="button-arrow" width="13" height="11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.136 5.21l.669-.1h2.307l-1.474-.924-1.008-.632-.03-.018-.031-.015-.617-.275-.033-.035-.403-.421-.067-.07-.09-.04-.67-.3-.76-.497-.692-.517-.032-.023-.036-.019a.096.096 0 0 1-.04-.035.176.176 0 0 1-.023-.072.377.377 0 0 1 .052-.233c.014-.022.06-.065.147-.083.08-.017.133.001.15.011l.696.52.006.004.007.005.605.42.038.028.043.019.616.276.033.034.02.02.02.018.505.421.07.059.086.03.424.147a.594.594 0 0 0 .248.163l1.948 1.22.03.019.031.014.67.3.766.5c.104.074.14.123.153.15.014.024.03.069.03.171a.622.622 0 0 1-.045.055c-.03.034-.066.072-.119.127l.362.346-.362-.346a1.228 1.228 0 0 0-.106.128l-.005.005-.022.029h-.052l-.122.076-.504.316-.005.003-1.303.837-.686.41-1.398.73-.028.015-.026.018-.59.411-.691.412-.015.01-.014.01-.59.41-.678.404a.422.422 0 0 1-.098.04c-.008.002-.013.003-.062.003-.09 0-.123-.015-.14-.025a.483.483 0 0 1-.144-.165.237.237 0 0 1-.012-.173.255.255 0 0 1 .115-.162l.688-.308.043-.02.038-.026.605-.421.214-.15v-.022l.563-.336.705-.42.005-.004 1.714-1.053 1.507-.926h-2.31l-.037.006-.669.1H6.263l-1.596-.105-.027-.001h-.028l-2.307.106H2.25l-.774-.102-.033-.004H.705c-.015 0-.058-.007-.113-.075A.445.445 0 0 1 .5 5.346c0-.087.029-.135.058-.164.031-.029.102-.073.248-.073h.774l.774.101.043.006.044-.002 2.291-.104 1.687.104h1.68l.037-.005z"></path></svg>
                                          
                                            </button>
                                        </div>
                                    </div>
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
        planId: state.main.planId
   
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

export default connect(mapStateToProps, mapDispatchToProps)(Plan);


