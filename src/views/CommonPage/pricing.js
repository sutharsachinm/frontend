import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../../history'
import $ from 'jquery';


class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name:"Pricing",
            isAnual:true,
            packagePrice:null,
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
     
    handlePrice(){
      this.setState({isAnual:!this.state.isAnual});
    }
     async componentDidMount(){
      console.log('this.props : ',this.props)
      this.setState({packagePrice:this.props.fields}); 
        
    }
    renderPrice(plan){

      return plan.map((el)=>{

        return (
          
                     
                      <div className="d-flex">
                      
                        <div className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                          <i className="fe fe-check"></i>
                        </div>

                       
                        <p>{el.title}</p>
                      </div>
        )

      })
}

      openContact()
      {
        $('#launcher').contents().find('.wrapper-AtBcr').click();
      }

    handleTry(plan){
      this.props.ChangePlan(plan);
      this.props.changeRegisterType(1);
      this.props.changeRole("");
      history.replace('/product-tours/signup?email=');
    }

    render() {
        const {plan,packagePrice} = this.state;
        
      


        return (
            
              <div className=" " style={{"backgroundColor": "#f9fbfd"}}>
               
                
        
        <section className="pt-8 pt-md-11 pb-10 pb-md-15 bg-primary">

          <div className="shape shape-blur-3 svg-shim text-white">
            <svg viewBox="0 0 1738 487" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H1420.92C1420.92 0 2134.35 457.505 1420.92 485.868C707.502 514.231 0 0 0 0Z" fill="url(#paint0_linear)"/>
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="1049.98" y2="912.68" gradientUnits="userSpaceOnUse">
                <stop stop-color="currentColor" stop-opacity="0.075"/>
                <stop offset="1" stop-color="currentColor" stop-opacity="0"/>
              </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8 text-center">
                
                
                <h1 className=" text-white">
                  {packagePrice!=null && packagePrice.header_title_1}<br></br>
                  {packagePrice!=null && packagePrice.header_title_2}
                </h1>

                
                <p className="lead text-white-80 mb-6 mb-md-8">
                {packagePrice!=null && packagePrice.header_desc_1}
                </p>
                <p className="lead text-white-80 mb-6 mb-md-8">
                {packagePrice!=null && packagePrice.header_desc_2}
                </p>

                <form className="d-flex align-items-center justify-content-center mb-7 mb-md-9">
                      
                  <span className="text-white-80">
                     {packagePrice!=null && packagePrice.annual}
                  </span>
                  
                  <div className="custom-control custom-switch custom-switch-dark mx-3">
                    <input type="checkbox" onClick={this.handlePrice.bind(this)}  className="custom-control-input" id="billingSwitch" data-toggle="price" data-target=".price"/>
                    <label className="custom-control-label" for="billingSwitch"></label>
                  </div>
                  
                  <span className="text-white-80">
                    {packagePrice!=null && packagePrice.monthly}
                  </span>

                </form>

              </div>
            </div> 
          </div> 

        </section>

        
        <div className="position-relative">
          <div className="shape shape-bottom shape-fluid-x svg-shim text-light">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"/>
            </svg>
          </div>
        </div>

        
        <section className="mt-n8 mt-md-n14">
          <div className="container  price-section">
            <div className="form-row">
              <div className="col-12 col-md-6 col-lg-4">

                <div className="card shadow-lg mb-6 mb-md-0">
                  <div className="card-body hgt-600">

                    <div className="text-center mb-3">
                      <span className="badge badge-pill badge-primary-soft">
                        <span className="h6 text-uppercase"> {plan[0].key}</span>
                      </span>
                    </div>
                    <div className="d-flex justify-content-center">
                      <span className="h2 mb-0 mt-2">$</span>
                      <span className="price display-2 mb-0" data-annual="29" data-monthly="49">
                             {this.state.isAnual===true &&
                              <div> {plan[0].annual} </div>
                            }

                            {this.state.isAnual===false &&
                              <div> {plan[0].monthly}  </div>
                            }
                      </span>
                      <span className="h2 align-self-end mb-1">/mo</span>
                    </div>


                    
                    <p className="text-center text-muted mb-5">
                      per seat
                    </p>

                    {this.renderPrice(plan[0].data)}

                  
                    
                  </div>
                  <a href="javascript:void(0);" onClick={this.handleTry.bind(this,0)} className="btn btn-block btn-primary">
                       {packagePrice!=null && packagePrice.try_for_free_btn} <i className="fe fe-arrow-right ml-3"></i>
                    </a>
                </div>

              </div>
              <div className="col-12 col-md-6 col-lg-4">
                
                <div className="card shadow-lg mb-6 mb-md-0">
                  <div className="card-body hgt-600">

                    <div className="text-center mb-3">
                      <span className="badge badge-pill badge-primary-soft">
                        <span className="h6 text-uppercase">{plan[1].key}</span>
                      </span>
                    </div>

                    <div className="d-flex justify-content-center">
                      <span className="h2 mb-0 mt-2">$</span>
                      <span className="price display-2 mb-0" data-annual="29" data-monthly="49">
                             {this.state.isAnual===true &&
                              <div>  {plan[1].annual} </div>
                            }

                            {this.state.isAnual===false &&
                              <div> {plan[1].monthly}  </div>
                            }
                      </span>
                      <span className="h2 align-self-end mb-1">/mo</span>
                    </div>

                    
                    <p className="text-center text-muted mb-5">
                      per seat
                    </p>

                    {this.renderPrice(plan[1].data)}

                    
                  </div>
                  
                  <a href="javascript:void(0);"  onClick={this.handleTry.bind(this,1)} className="btn btn-block btn-primary">
                      {packagePrice!=null && packagePrice.try_for_free_btn} <i className="fe fe-arrow-right ml-3"></i>
                    </a>
                </div>

              </div>
              <div className="col-12 col-md-6 col-lg-4">
                
                <div className="card shadow-lg mb-md-0">
                  <div className="card-body hgt-600">

                    <div className="text-center mb-3">
                      <span className="badge badge-pill badge-primary-soft">
                        <span className="h6 text-uppercase">{plan[2].key}</span>
                      </span>
                    </div>

                    <div className="d-flex justify-content-center">
                       
                    </div>

                    
                    <p className="text-center text-muted mb-5">
                   
                    </p>

                    {this.renderPrice(plan[2].data)}

                   
                    
                  </div>
                  <a href="javascript:void(0);" onClick={this.openContact.bind(this)} className="btn btn-block btn-primary">
                     {packagePrice!=null && packagePrice.contact_us_btn}<i className="fe fe-arrow-right ml-3"></i>
                    </a>
                </div>

              </div>
            </div> 
          </div> 
        </section>
        
        <div className="position-relative">
          <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"/>
            </svg>
          </div>
        </div>

        
        <section className="py-8 py-md-11 bg-white border-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-md-8 text-center">
                
                <span className="badge badge-pill badge-primary-desat-soft mb-3">
                  <span className="h6 text-uppercase">{packagePrice!=null && packagePrice.faq}</span>
                </span>

                
                <h2>
                  {packagePrice!=null && packagePrice.faq_title}
                </h2>

                
                <p className="font-size-lg text-muted mb-7 mb-md-9">
                  {packagePrice!=null && packagePrice.faq_desc}
                </p>

              </div>
            </div> 
            <div className="row">
              <div className="col-12 col-md-6">
                
                
                <h3>
                {packagePrice!=null && packagePrice.faq_title_1}
                </h3>

                
                <p className="text-gray-800 mb-6 mb-md-8">
                {packagePrice!=null && packagePrice.faq_desc_1}
                </p>

                
                <h3>
                  {packagePrice!=null && packagePrice.faq_title_2}
                </h3>

                
                <p className="text-gray-800 mb-6 mb-md-8">
                {packagePrice!=null && packagePrice.faq_desc_2}
                </p>

                
                <h3>
                {packagePrice!=null && packagePrice.faq_title_3}
                </h3>

                
                <p className="text-gray-800 mb-6 mb-md-0">
                {packagePrice!=null && packagePrice.faq_desc_3}
                </p>

              </div>
              <div className="col-12 col-md-6">
                
                
                <h3> {packagePrice!=null && packagePrice.faq_title_4} </h3>

                
                <p className="text-gray-800 mb-6 mb-md-8">
                {packagePrice!=null && packagePrice.faq_desc_4}
                </p>

                
                <h3>
                {packagePrice!=null && packagePrice.faq_title_5}
                </h3>

                
                <p className="text-gray-800 mb-6 mb-md-8">
                {packagePrice!=null && packagePrice.faq_desc_5}
                </p>

                
                <h3>
                {packagePrice!=null && packagePrice.faq_title_6}
                </h3>

                
                <p className="text-gray-800 mb-0">
                {packagePrice!=null && packagePrice.faq_desc_6}
                </p>

              </div>
            </div> 
          </div> 
        </section>

        

         <section className="py-8 py-md-11">
          <div className="container">
            
            <div className="row">
              <div className="col-12">
                
                {/* Card */}
                <div className="card card-row shadow-light-lg mb-6">
                  <div className="row no-gutters">
                    <div className="col-12 col-md-6">

                      {/* Slider */}
                      <div className="card-img-slider" data-flickity='{"fade": true, "imagesLoaded": true, "pageDots": false, "prevNextButtons": false, "asNavFor": "#blogSlider", "draggable": false}'>
                        <a className="card-img-left bg-cover" style={{backgroundImage: `url(${packagePrice !== null ? packagePrice.testimonial_1_img : ""})`}} href="javascript:void(0);">

                      {/* Image (placeholder) */}
                      <img src={packagePrice!=null ? packagePrice.testimonial_1_img : ""} alt="..." className="img-fluid d-md-none invisible" />

                    </a>
                    <a className="card-img-left bg-cover" style={{backgroundImage: `url(${packagePrice !== null ? packagePrice.testimonial_2_img : ""})`}} href="javascript:void(0);">

                      {/* Image (placeholder) */}
                      <img src={packagePrice!=null ? packagePrice.testimonial_2_img : ""} alt="..." className="img-fluid d-md-none invisible" />
                      
                    </a>
                      </div>

                      {/* Shape */}
                      <div className="shape shape-right shape-fluid-y svg-shim text-white d-none d-md-block">
                        <svg viewBox="0 0 112 690" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M116 0H51V172C76 384 0 517 0 517V690H116V0Z" fill="currentColor"/>
                        </svg>
                      </div>

                    </div>
                    <div className="col-12 col-md-6 position-static">

                      {/* Slider */}
                      <div className="position-static" data-flickity='{"wrapAround": true, "pageDots": false, "imagesLoaded": true, "adaptiveHeight": true}' id="blogSlider">
                        <div className="w-100">

                          {/* Body */}
                          <div className="card-body">
                            <blockquote className="blockquote text-center mb-0">
                              
                              {/* Brand */}
                              <div className="row justify-content-center mb-5 mb-md-7">
                                <div className="col-6 col-sm-4 col-md-7 col-lg-5">
                                  
                                  {/* Logo */}
                                  <div className="img-fluid svg-shim" style={{color: "#FF5A5F"}}>
                                   
                                  </div>

                                </div>
                              </div>  
                              
                              
                              <p className="mb-5 mb-md-7">
                                “ {packagePrice!=null && packagePrice.testimonials_title}”
                              </p>

                              
                              <footer className="blockquote-footer">
                                <span className="h6 text-uppercase">{packagePrice!=null && packagePrice.testimonials_name}</span>
                              </footer>

                            </blockquote>
                          </div>

                        </div>
                        <div className="w-100">

                          {/* Body */}
                          <div className="card-body">
                            <blockquote className="blockquote text-center mb-0">
                              
                              {/* Brand */}
                              <div className="row justify-content-center mb-5 mb-md-7">
                                <div className="col-6 col-sm-4 col-md-7 col-lg-5">
                                  
                                  {/* Logo */}
                                  <div className="img-fluid svg-shim" style={{color: "#3F5D87"}}>
                                    
                                  </div>

                                </div>
                              </div> {/* / .row */}
                              
                              {/* Text */}
                              <p className="mb-5 mb-md-7">
                                “{packagePrice!=null && packagePrice.testimonials_title_1}”
                              </p>

                              {/* Footer */}
                              <footer className="blockquote-footer">
                                <span className="h6 text-uppercase">{packagePrice!=null && packagePrice.testimonials_name_1}</span>
                              </footer>

                            </blockquote>
                          </div>
                        
                        </div>
                      </div>

                    </div>
                  </div> {/* / .row */}
                </div>

              </div>
            </div> {/* / .row */}
          </div> {/* / .container */}
        </section>
       
      

      
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

const mapDispatchToProps = (dispatch) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);


