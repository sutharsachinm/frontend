import React, { Component } from 'react';
import { connect } from 'react-redux';
 
 


class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name:"Pricing",
        };
    }
     

    render() {

        

        return (
            
  <div className=" " style={{"background-color": "#f9fbfd"}}>
    
    <section className="pt-6 pt-md-8 pb-8 mb-md-8">
      <div className="container">
        <div className="row">
          <div className="col-12">
            
            <div className="row mb-6 mb-md-8">
              <div className="col-auto">
                
                <div className="icon-circle bg-primary text-white">
                  <i className="fe fe-users"></i>
                </div>

              </div>
              <div className="col ml-n4">
                
                <h2 className="font-weight-bold mb-0">
                  FAQ
                </h2>

                <p className="font-size-lg text-gray-700 mb-0">
                  Why I say old chap that is spiffing off his nut arse pear shaped plastered 
Jeffrey bodge barney some dodgy.!!
                </p>

              </div>
            </div> 

            <div className="card shadow-light-lg accordion mb-5 mb-md-6" id="helpAccordionOne">
              <div className="list-group">
                <div className="list-group-item">
                  
                  <div className="d-flex align-items-center">
                    <div className="mr-auto">
                      
                      <h4 className="font-weight-bold mb-0">
                        Authentication Issues
                      </h4>

                      <p className="font-size-sm text-muted mb-0">
                        Issues related to logging in, out, or about multiple devices.
                      </p>

                    </div>
                      
                    <span className="badge badge-pill badge-success-soft ml-4">
                      <span className="h6 text-uppercase">
                        4 answers
                      </span>
                    </span>

                  </div>

                </div>
                <div className="list-group-item">
                  
                  <a className="d-flex align-items-center text-reset text-decoration-none" data-toggle="collapse" href="#helpOne" role="button" aria-expanded="false" aria-controls="helpOne">
                      
                    <span className="mr-4">
                     Why doesn’t my account stay logged in?
                    </span>
                    
                    <div className="text-muted ml-auto">

                      <span className="font-size-sm mr-4 d-none d-md-inline">
                        Updated last week
                      </span>
                      
                      <span className="collapse-chevron text-muted">
                        <i className="fe fe-lg fe-chevron-down"></i>
                      </span>

                    </div>

                  </a>
                  
                  <div className="collapse" id="helpOne" data-parent="#helpAccordionOne">
                    <div className="py-5">

                      <p className="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!
                      </p>

                      <div className="d-flex align-items-center">
                          
                        <div className="btn-group btn-group-toggle mr-4" data-toggle="buttons">
                          <label className="btn btn-sm btn-white">
                            <input type="radio" name="helpOneVote" id="helpOneDown" checked /> <i className="fe fe-thumbs-down"></i>
                          </label>
                          <label className="btn btn-sm btn-white">
                            <input type="radio" name="helpOneVote" id="helpOneUp" /> <i className="fe fe-thumbs-up"></i>
                          </label>
                        </div>
                        
                        <span className="font-size-sm text-muted">
                          Did this help solve your issue?
                        </span>

                      </div>

                    </div>
                  </div>

                </div>
                <div className="list-group-item">
                  
                  <a className="d-flex align-items-center text-reset text-decoration-none" data-toggle="collapse" href="#helpTwo" role="button" aria-expanded="false" aria-controls="helpTwo">

                    <span className="mr-4">
                     I'd like to renew but I am getting a 404 error
                    </span>
                    
                    <div className="text-muted ml-auto">

                      <span className="font-size-sm mr-4 d-none d-md-inline">
                        Updated 2 weeks ago
                      </span>
                      
                      <span className="collapse-chevron text-muted">
                        <i className="fe fe-lg fe-chevron-down"></i>
                      </span>
                      
                    </div>

                  </a> 
                  
                  <div className="collapse" id="helpTwo" data-parent="#helpAccordionOne">
                    <div className="py-5">

                      <p className="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!
                      </p>

                      <div className="d-flex align-items-center">

                        <div className="btn-group btn-group-toggle mr-4" data-toggle="buttons">
                          <label className="btn btn-sm btn-white">
                            <input type="radio" name="helpTwoVote" id="helpTwoDown" checked /> <i className="fe fe-thumbs-down"></i>
                          </label>
                          <label className="btn btn-sm btn-white">
                            <input type="radio" name="helpTwoVote" id="helpTwoUp" /> <i className="fe fe-thumbs-up"></i>
                          </label>
                        </div>
                        
                        <span className="font-size-sm text-muted">
                          Did this help solve your issue?
                        </span>

                      </div>

                    </div>
                  </div>

                </div>
                <div className="list-group-item">
                  
                  <a className="d-flex align-items-center text-reset text-decoration-none" data-toggle="collapse" href="#helpThree" role="button" aria-expanded="false" aria-controls="helpThree">

                    <span className="mr-4">
                     Why can't I upgrade for free?
                    </span>
                    
                    <div className="text-muted ml-auto">

                      <span className="font-size-sm mr-4 d-none d-md-inline">
                        Updated yesterday
                      </span>
                      
                      <span className="collapse-chevron text-muted">
                        <i className="fe fe-lg fe-chevron-down"></i>
                      </span>
                      
                    </div>

                  </a> 
                  
                  <div className="collapse" id="helpThree" data-parent="#helpAccordionOne">
                    <div className="py-5">

                      <p className="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!
                      </p>

                      <div className="d-flex align-items-center">

                        <div className="btn-group btn-group-toggle mr-4" data-toggle="buttons">
                          <label className="btn btn-sm btn-white">
                            <input type="radio" name="helpThreeVote" id="helpThreeDown" checked /> <i className="fe fe-thumbs-down"></i>
                          </label>
                          <label className="btn btn-sm btn-white">
                            <input type="radio" name="helpThreeVote" id="helpThreeUp" /> <i className="fe fe-thumbs-up"></i>
                          </label>
                        </div>
                        
                        <span className="font-size-sm text-muted">
                          Did this help solve your issue?
                        </span>

                      </div>

                    </div>
                  </div>

                </div>
                <div className="list-group-item">
                  
                  <a className="d-flex align-items-center text-reset text-decoration-none" data-toggle="collapse" href="#helpFour" role="button" aria-expanded="false" aria-controls="helpFour">

                    <span className="mr-4">
                     Why doesn't my account stay logged in?
                    </span>
                    
                    <div className="text-muted ml-auto">

                      <span className="font-size-sm mr-4 d-none d-md-inline">
                        Updated last month
                      </span>
                      
                      <span className="collapse-chevron text-muted">
                        <i className="fe fe-lg fe-chevron-down"></i>
                      </span>
                      
                    </div>

                  </a> 
                  
                  <div className="collapse" id="helpFour" data-parent="#helpAccordionOne">
                    <div className="py-5">

                      <p className="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!
                      </p>

                      <div className="d-flex align-items-center">
                          
                        <div className="btn-group btn-group-toggle mr-4" data-toggle="buttons">
                          <label className="btn btn-sm btn-white">
                            <input type="radio" name="helpFourVote" id="helpFourDown" checked /> <i className="fe fe-thumbs-down"></i>
                          </label>
                          <label className="btn btn-sm btn-white">
                            <input type="radio" name="helpFourVote" id="helpFourUp"/> <i className="fe fe-thumbs-up"></i>
                          </label>
                        </div>
                        
                        <span className="font-size-sm text-muted">
                          Did this help solve your issue?
                        </span>

                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="card shadow-light-lg accordion" id="helpAccordionTwo">
              <div className="list-group">
                <div className="list-group-item">
                  
                  <div className="d-flex align-items-center">
                    <div className="mr-auto">
                      
                      <h4 className="font-weight-bold mb-0">
                        Billing
                      </h4>

                      <p className="font-size-sm text-muted mb-0">
                        Issues related to payments or invoicing.
                      </p>

                    </div>
                      
                    <span className="badge badge-pill badge-success-soft ml-4">
                      <span className="h6 text-uppercase">
                        4 answers
                      </span>
                    </span>

                  </div> 

                </div>
                <div className="list-group-item">
                  
                  <a className="d-flex align-items-center text-reset text-decoration-none" data-toggle="collapse" href="#helpFive" role="button" aria-expanded="false" aria-controls="helpFive">

                    <span className="mr-4">
                     I was double charged last month. Why is that?
                    </span>
                    
                    <div className="text-muted ml-auto">

                      <span className="font-size-sm mr-4 d-none d-md-inline">
                        Updated 3 months ago
                      </span>
                      
                      <span className="collapse-chevron text-muted">
                        <i className="fe fe-lg fe-chevron-down"></i>
                      </span>
                      
                    </div>

                  </a> 
                  
                  <div className="collapse" id="helpFive" data-parent="#helpAccordionTwo">
                    <div className="py-5">

                      <p className="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!
                      </p>

                      <div className="d-flex align-items-center">
                          
                        <div className="btn-group btn-group-toggle mr-4" data-toggle="buttons">
                          <label className="btn btn-sm btn-white">
                            <input type="radio" name="helpFiveVote" id="helpFiveDown" checked /> <i className="fe fe-thumbs-down"></i>
                          </label>
                          <label className="btn btn-sm btn-white">
                            <input type="radio" name="helpFiveVote" id="helpFiveUp" /> <i className="fe fe-thumbs-up"></i>
                          </label>
                        </div>
                        
                        <span className="font-size-sm text-muted">
                          Did this help solve your issue?
                        </span>

                      </div>

                    </div>
                  </div>

                </div>
                <div className="list-group-item">
                  
                  <a className="d-flex align-items-center text-reset text-decoration-none" data-toggle="collapse" href="#helpSix" role="button" aria-expanded="false" aria-controls="helpSix">

                    <span className="mr-4">
                     How do I change my default payment option?
                    </span>
                    
                    <div className="text-muted ml-auto">

                      <span className="font-size-sm mr-4 d-none d-md-inline">
                        Updated today
                      </span>
                      
                      <span className="collapse-chevron text-muted">
                        <i className="fe fe-lg fe-chevron-down"></i>
                      </span>
                      
                    </div>

                  </a> 
                  
                  <div className="collapse" id="helpSix" data-parent="#helpAccordionTwo">
                    <div className="py-5">

                      <p className="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!
                      </p>

                      <div className="d-flex align-items-center">
                          
                        <div className="btn-group btn-group-toggle mr-4" data-toggle="buttons">
                          <label className="btn btn-sm btn-white">
                            <input type="radio" name="helpSixVote" id="helpSixDown" checked /> <i className="fe fe-thumbs-down"></i>
                          </label>
                          <label className="btn btn-sm btn-white">
                            <input type="radio" name="helpSixVote" id="helpSixUp" /> <i className="fe fe-thumbs-up"></i>
                          </label>
                        </div>
                        
                        <span className="font-size-sm text-muted">
                          Did this help solve your issue?
                        </span>

                      </div>

                    </div>
                  </div>

                </div>
                <div className="list-group-item">
                  
                  <a className="d-flex align-items-center text-reset text-decoration-none" data-toggle="collapse" href="#helpSeven" role="button" aria-expanded="false" aria-controls="helpSeven">

                    <span className="mr-4">
                      Can I still pay with PayPal?
                    </span>
                    
                    <div className="text-muted ml-auto">

                      <span className="font-size-sm mr-4 d-none d-md-inline">
                        Updated last week
                      </span>
                      
                      <span className="collapse-chevron text-muted">
                        <i className="fe fe-lg fe-chevron-down"></i>
                      </span>
                      
                    </div>

                  </a> 
                  
                  <div className="collapse" id="helpSeven" data-parent="#helpAccordionTwo">
                    <div className="py-5">

                      <p className="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!
                      </p>

                      <div className="d-flex align-items-center">
                          
                        <div className="btn-group btn-group-toggle mr-4" data-toggle="buttons">
                          <label className="btn btn-sm btn-white">
                            <input type="radio" name="helpSevenVote" id="helpSevenDown" checked /> <i className="fe fe-thumbs-down"></i>
                          </label>
                          <label className="btn btn-sm btn-white">
                            <input type="radio" name="helpSevenVote" id="helpSevenUp" /> <i className="fe fe-thumbs-up"></i>
                          </label>
                        </div>
                        
                        <span className="font-size-sm text-muted">
                          Did this help solve your issue?
                        </span>

                      </div>

                    </div>
                  </div>

                </div>
                <div className="list-group-item">
                  
                  <a className="d-flex align-items-center text-reset text-decoration-none" data-toggle="collapse" href="#helpEight" role="button" aria-expanded="false" aria-controls="helpEight">

                    <span className="mr-4">
                      Can I use referral code to decrease my monthly fees?
                    </span>
                    
                    <div className="text-muted ml-auto">

                      <span className="font-size-sm mr-4 d-none d-md-inline">
                        Updated 3 weeks ago
                      </span>
                      
                      <span className="collapse-chevron text-muted">
                        <i className="fe fe-lg fe-chevron-down"></i>
                      </span>
                      
                    </div>

                  </a> 
                  
                  <div className="collapse" id="helpEight" data-parent="#helpAccordionTwo">
                    <div className="py-5">

                      <p className="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!
                      </p>

                      <div className="d-flex align-items-center">
                          
                        <div className="btn-group btn-group-toggle mr-4" data-toggle="buttons">
                          <label className="btn btn-sm btn-white">
                            <input type="radio" name="helpEightVote" id="helpEightDown" checked /> <i className="fe fe-thumbs-down"></i>
                          </label>
                          <label className="btn btn-sm btn-white">
                            <input type="radio" name="helpEightVote" id="helpEightUp" /> <i className="fe fe-thumbs-up"></i>
                          </label>
                        </div>
                        
                        <span className="font-size-sm text-muted">
                          Did this help solve your issue?
                        </span>

                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>

            
            
            

          </div>
        </div> 
      </div> 
    </section>

    
    <div className="position-relative">
      <div className="shape shape-bottom shape-fluid-x svg-shim text-dark">
        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"/>
        </svg>
      </div>
    </div>

  </div>
             
      

        );
    }
}

const mapStateToProps = (state) => {
    return {
        initial: state.initial,
        role: state.role,
        registerType: state.registerType
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


