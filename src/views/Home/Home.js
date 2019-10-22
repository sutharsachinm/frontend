import React, { Component } from "react";
import { connect } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import Typed from 'react-typed';
import $ from 'jquery';
import 'react-toastify/dist/ReactToastify.css';
import history from '../../history'
const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}
class Home extends Component {
  constructor(props) {
    super(props);
    console.log('props : ',this.props)
    this.state = {
      name: "Profit Pro",
      isAnual: true,
      fname: "", femail: "", fcompany: "",fphone:"",
      emailAddress:"",
      homePage:null,
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

  handlePrice() {
    this.setState({ isAnual: !this.state.isAnual });
  }
  validateEmail(email){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
      return true;
    }
    return false;
  }

  checkEmail(id,plan){
    
       let email =document.getElementById(id).value;
      
       if (this.validateEmail(email))
        {
          
 
         
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact-form-1", ...this.state })
          })
            .then((res) =>{
            
              this.props.changeRole(email);
              this.props.changeRegisterType(1);
              this.props.ChangePlan(plan);
               history.replace('/product-tours/signup?email='+email);

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

    handleChange = e => this.setState({ [e.target.name]: e.target.value });
     

   handleStartFree(e){
         let email =document.getElementById("femail").value;
         let name =document.getElementById("fname").value;
          if(this.validateEmail(email))
          {
           document.getElementById("p_cardEmail").innerHTML="";
          }
          else
          {
            document.getElementById("p_cardEmail").innerHTML="Please enter  a valid email address";
          }

          if(name=="")
          {
          
           document.getElementById("p_cardName").innerHTML="Please enter a Name";
          }
          else
          {
            document.getElementById("p_cardName").innerHTML="";
          }
        
          if(this.validateEmail(email)  && name!="")
          {

            toast.success("Thank you for contacting us. We will get back to you soon", {
              position: toast.POSITION.TOP_RIGHT
            });
            

            $.ajax({
              type: "POST",
              url: "/",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              data: encode({ "form-name": "demo-form", ...this.state })
            })
             .then((res) =>{
                 
                  setTimeout(()=>{
                      window.location.href="/";
                  },3000)

                  
              }).catch(error =>{
               
                setTimeout(()=>{

                      toast.error("Something went wrong !! Please try again", {
                        position: toast.POSITION.TOP_RIGHT
                      });
                      window.location.href="/";

                 },3000)
                
              });
      
            e.preventDefault();
          }
        

   }
   handleTry(plan){
    this.props.ChangePlan(plan);
    this.props.changeRegisterType(1);
    this.props.changeRole("");
    history.replace('/product-tours/signup?email=');
   }
   renderPrice(plan){

          return plan.map((el)=>{

            return (
              
                         
                          <div className="d-flex" key={el.title+new Date()}>
                          
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
   async componentDidMount(){
      
 
       this.setState({homePage:this.props.fields})

    }
    
   render() {
    const {plan,fcompany,femail,fphone,fname,emailAddress,homePage} = this.state;

     console.log('homePage : ',homePage) 
          
     
      

       
    return (
      <div className=" ">

        <ToastContainer />
       

        <section className="pt-4 pt-md-11">
          <div className="container  pl-0">
            <div className="row align-items-center">
              <div className="col-12 col-md-5 col-lg-6 order-md-2">
                {/* {/* Image */}
                {homePage !=null &&
                 <img
                    src={homePage.top_header_img}
                    className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0"
                    alt="..."
                    data-aos="fade-up"
                    data-aos-delay="100"
                  />
                }
              </div>
              <div className="col-12 col-md-7 col-lg-6 order-md-1" data-aos="fade-up" >
            
                {/* {/* Heading */}
                <h1 className="display-3 text-center text-md-left">
                  {homePage !=null &&
                    homePage.header_title
                  }
                </h1>

                {/* Text */}
                <p className="lead text-center text-md-left text-muted mb-6 mb-lg-8">
                {homePage !=null &&
                    homePage.header_title_desc
                  }
                </p>

                {/* Buttons */}
                <div className="text-center text-md-left">
                <form method="post" >
                  <div className="input-group feature-header-sign">
                    <input
                      type="email"
                      id="emailAddress"
                      name="emailAddress"
                  
                      className="form-control pl-2 border-right-0"
                      value={emailAddress} onChange={this.handleChange}
                      placeholder="Email Address"
                    />
                    <a href="javascript:void(0);" onClick={this.checkEmail.bind(this,'emailAddress',0)} className="btn btn-primary-soft">
                    {homePage !=null &&
                    homePage.get_started
                    }
                    </a>
                  </div>
                  </form>
                </div>
                <div className="text-center text-md-left pointer-box  mt-3 d-flex">
                 {homePage !=null && homePage.check_1!="" &&

                  
                  <div className="d-flex">
                    <div className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                      <i className="fe fe-check"></i>
                    </div>
                    <p className="mb-0"> { homePage.check_1}
                   </p>
                  </div>
                  }
                  {homePage !=null && homePage.check_2!="" &&
                  <div className="d-flex">
                    <div className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                      <i className="fe fe-check"></i>
                    </div>

                    <p className="mb-0">{ homePage.check_2} </p>
                  </div>
                   }
                   {homePage !=null && homePage.check_3!="" &&
                <div className="d-flex">
                    <div className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                      <i className="fe fe-check"></i>
                    </div>

                    <p className="mb-0">{ homePage.check_3}</p>
                  </div>
                  }
               </div>
               
              </div>
            </div> 
           
          </div> 
        
        </section>

        {/* FEATURES
    ================================================== */}
        <section className="py-8 py-md-11 border-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up">
                {/* Icon */}
                <div className="icon text-primary mb-3">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                  >
                    {/* Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch */}
                    <title>Stockholm-icons / General / Settings-1</title>
                    <desc>Created with Sketch.</desc>
                    <g
                      id="Stockholm-icons-/-General-/-Settings-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <rect
                        id="bound"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      ></rect>
                      <path
                        d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z"
                        id="Combined-Shape"
                        fill="#335EEA"
                      ></path>
                      <path
                        d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z"
                        id="Combined-Shape"
                        fill="#335EEA"
                        opacity="0.3"
                      ></path>
                    </g>
                  </svg>
                </div>

                {/* Heading */}
                <h3>{homePage !=null &&
                    homePage.products_title_1
                  }</h3>

                {/* Text */}
                <p className="text-muted mb-6 mb-md-0">
                  {homePage !=null &&
                    homePage.products_desc_1
                  }
                </p>
              </div>
              <div
                className="col-12 col-md-6 col-lg-4"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                {/* Icon */}
                <div className="icon text-primary mb-3">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                  >
                    {/* Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch */}
                    <title>Stockholm-icons / Layout / Layout-arrange</title>
                    <desc>Created with Sketch.</desc>
                    <g
                      id="Stockholm-icons-/-Layout-/-Layout-arrange"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <rect
                        id="bound"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      ></rect>
                      <path
                        d="M5.5,4 L9.5,4 C10.3284271,4 11,4.67157288 11,5.5 L11,6.5 C11,7.32842712 10.3284271,8 9.5,8 L5.5,8 C4.67157288,8 4,7.32842712 4,6.5 L4,5.5 C4,4.67157288 4.67157288,4 5.5,4 Z M14.5,16 L18.5,16 C19.3284271,16 20,16.6715729 20,17.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,17.5 C13,16.6715729 13.6715729,16 14.5,16 Z"
                        id="Combined-Shape"
                        fill="#335EEA"
                      ></path>
                      <path
                        d="M5.5,10 L9.5,10 C10.3284271,10 11,10.6715729 11,11.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,11.5 C4,10.6715729 4.67157288,10 5.5,10 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,12.5 C20,13.3284271 19.3284271,14 18.5,14 L14.5,14 C13.6715729,14 13,13.3284271 13,12.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z"
                        id="Combined-Shape"
                        fill="#335EEA"
                        opacity="0.3"
                      ></path>
                    </g>
                  </svg>
                </div>

                {/* Heading */}
                <h3>{homePage !=null &&
                    homePage.products_title_2
                  }</h3>

                {/* Text */}
                <p className="text-muted mb-6 mb-md-0">
                {homePage !=null &&
                    homePage.products_desc_2
                  }
                </p>
              </div>
              <div
                className="col-12 col-md-6 col-lg-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {/* Icon */}
                <div className="icon text-primary mb-3">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                  >
                    {/* Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch */}
                    <title>Stockholm-icons / Code / Code</title>
                    <desc>Created with Sketch.</desc>
                    <g
                      id="Stockholm-icons-/-Code-/-Code"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <rect
                        id="bound"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      ></rect>
                      <path
                        d="M17.2718029,8.68536757 C16.8932864,8.28319382 16.9124644,7.65031935 17.3146382,7.27180288 C17.7168119,6.89328641 18.3496864,6.91246442 18.7282029,7.31463817 L22.7282029,11.5646382 C23.0906029,11.9496882 23.0906029,12.5503176 22.7282029,12.9353676 L18.7282029,17.1853676 C18.3496864,17.5875413 17.7168119,17.6067193 17.3146382,17.2282029 C16.9124644,16.8496864 16.8932864,16.2168119 17.2718029,15.8146382 L20.6267538,12.2500029 L17.2718029,8.68536757 Z M6.72819712,8.6853647 L3.37324625,12.25 L6.72819712,15.8146353 C7.10671359,16.2168091 7.08753558,16.8496835 6.68536183,17.2282 C6.28318808,17.6067165 5.65031361,17.5875384 5.27179713,17.1853647 L1.27179713,12.9353647 C0.909397125,12.5503147 0.909397125,11.9496853 1.27179713,11.5646353 L5.27179713,7.3146353 C5.65031361,6.91246155 6.28318808,6.89328354 6.68536183,7.27180001 C7.08753558,7.65031648 7.10671359,8.28319095 6.72819712,8.6853647 Z"
                        id="Combined-Shape"
                        fill="#335EEA"
                      ></path>
                      <rect
                        id="Rectangle-28"
                        fill="#335EEA"
                        opacity="0.3"
                        transform="translate(12.000000, 12.000000) rotate(-345.000000) translate(-12.000000, -12.000000) "
                        x="11"
                        y="4"
                        width="2"
                        height="16"
                        rx="1"
                      ></rect>
                    </g>
                  </svg>
                </div>

                {/* Heading */}
                <h3>{homePage !=null &&
                    homePage.products_title_3
                  }</h3>

                {/* Text */}
                <p className="text-muted mb-0">
                 {homePage !=null &&
                    homePage.products_desc_3
                  }
                </p>
              </div>
            </div>{" "}
            {/* / .row */}
          </div>{" "}
          {/* / .container */}
        </section>

   

        {/* ABOUT
    ================================================== */}
        <section className="pt-8 pt-md-11 bg-gradient-light">
          <div className="container">
            <div className="row align-items-center justify-content-between mb-8 mb-md-11">
              <div className="col-12 col-md-6 order-md-2" data-aos="fade-left">
                {/* Heading */}
                <h2>
                  {homePage !=null &&
                    homePage.about_heading
                  }&nbsp; <span className="text-blue">
                  <Typed
                strings={[
                    'Shopify',
                    'Ebay',
                    'Amazon']}
                    typeSpeed={80}
                    backSpeed={90}
                    loop >
                    
                </Typed>
                </span>
                  <br />
                  {/* <span className="text-success">ever created for <span data-toggle="typed" data-options='{"strings": ["developers.", "founders.", "designers."]}'></span></span> */}
                </h2>

                {/* Text */}
                <p className="font-size-lg text-muted mb-6">
                  {homePage !=null &&
                    homePage.about_desc
                  }
                </p>
              </div>
              <div
                className="col-12 col-md-6 col-lg-5 order-md-1"
                data-aos="fade-right"
              >
                {/* Card */}
                <div className="card shadow-light-lg lift lift-lg">
                  {/* Image */}
                  {homePage !=null &&
                  <img
                      src={homePage.top_product_img}
                      alt="...."
                      className="card-img-top"
                    />
                  }
                  {/* Shape */}
                  <div className="position-relative">
                    <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                      <svg
                        viewBox="0 0 2880 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="card-body">
                    {/* Form */}
                    <form method="post" >
                    <input type="hidden" name="form-name" value="demo-form" />
                      <div className="form-label-group">
                        <input
                          type="text"
                          className="form-control form-control-flush"
                          id="fname"
                          name="fname"
                          value={fname} onChange={this.handleChange}
                          placeholder="Name"
                        />
                        <label htmlFor="cardName">Name <span className="required">*</span></label>
                        <p className="err" id="p_cardName" ></p>
                      </div>
                     
                      <div className="form-label-group">
                        <input
                          type="femail"
                          className="form-control form-control-flush"
                          id="femail"
                          name="femail"
                          value={femail} onChange={this.handleChange}
                          placeholder="Email"
                        />
                        <label htmlFor="cardEmail">Email <span className="required">*</span></label>
                        <p className="err" id="p_cardEmail" ></p>
                      </div>
                      <div className="form-label-group">
                        <input
                          type="text"
                          name="fphone"
                          className="form-control form-control-flush"
                          id="fphone"
                          value={fphone} onChange={this.handleChange}
                          placeholder="Phone"
                        />
                        <label htmlFor="cardName">Phone (Optional)</label>
                        <p className="err" id="p_phone" ></p>
                      </div>

                      <div className="mt-6">
                        <a href="javascript:void(0);"
                          className="btn btn-block btn-success lift"
                          onClick={this.handleStartFree.bind(this)}
                        >
                          Start Free Trial Now
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* / .row */}
            <div className="row align-items-center">
              <div className="col-12 col-md-7 col-lg-6" data-aos="fade-right">
                {/* Heading */}
                <h2>
                  {homePage !=null &&
                    homePage.about_heading_1
                  } <br />
                  <span className="text-primary">{homePage !=null &&
                    homePage.about_heading_2
                  }</span>.
                </h2>

                {/* Text */}
                <p className="font-size-lg text-muted mb-6">
                 {homePage !=null &&
                    homePage.about_desc_2
                  }
                </p>

                {/* List */}
                <div className="d-flex">
                  {/* Icon */}
                  <div className="icon text-primary">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xlink="http://www.w3.org/1999/xlink"
                    >
                      {/* Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch */}
                      <title>Stockholm-icons / Media / Repeat</title>
                      <desc>Created with Sketch.</desc>
                      <g
                        id="Stockholm-icons-/-Media-/-Repeat"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <rect
                          id="bound"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        ></rect>
                        <path
                          d="M12,8 L8,8 C5.790861,8 4,9.790861 4,12 L4,13 C4,14.6568542 5.34314575,16 7,16 L7,18 C4.23857625,18 2,15.7614237 2,13 L2,12 C2,8.6862915 4.6862915,6 8,6 L12,6 L12,4.72799742 C12,4.62015048 12.0348702,4.51519416 12.0994077,4.42878885 C12.264656,4.2075478 12.5779675,4.16215674 12.7992086,4.32740507 L15.656242,6.46136716 C15.6951359,6.49041758 15.7295917,6.52497737 15.7585249,6.56395854 C15.9231063,6.78569617 15.876772,7.09886961 15.6550344,7.263451 L12.798001,9.3840407 C12.7118152,9.44801079 12.607332,9.48254921 12.5,9.48254921 C12.2238576,9.48254921 12,9.25869158 12,8.98254921 L12,8 Z"
                          id="Combined-Shape"
                          fill="#335EEA"
                        ></path>
                        <path
                          d="M12.0583175,16 L16,16 C18.209139,16 20,14.209139 20,12 L20,11 C20,9.34314575 18.6568542,8 17,8 L17,6 C19.7614237,6 22,8.23857625 22,11 L22,12 C22,15.3137085 19.3137085,18 16,18 L12.0583175,18 L12.0583175,18.9825492 C12.0583175,19.2586916 11.8344599,19.4825492 11.5583175,19.4825492 C11.4509855,19.4825492 11.3465023,19.4480108 11.2603165,19.3840407 L8.40328311,17.263451 C8.18154548,17.0988696 8.13521119,16.7856962 8.29979258,16.5639585 C8.32872576,16.5249774 8.36318164,16.4904176 8.40207551,16.4613672 L11.2591089,14.3274051 C11.48035,14.1621567 11.7936615,14.2075478 11.9589099,14.4287888 C12.0234473,14.5151942 12.0583175,14.6201505 12.0583175,14.7279974 L12.0583175,16 Z"
                          id="Combined-Shape"
                          fill="#335EEA"
                          opacity="0.3"
                        ></path>
                      </g>
                    </svg>
                  </div>

                  <div className="ml-5">
                    {/* Heading */}
                    <h4 className="mb-1">{homePage !=null &&
                    homePage.about_heading_1_1
                  }</h4>

                    {/* Text */}
                    <p className="text-muted mb-6 mb-md-0">
                    {homePage !=null &&
                    homePage.about_desc_1_1
                  }
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  {/* Icon */}
                  <div className="icon text-primary">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xlink="http://www.w3.org/1999/xlink"
                    >
                      <title>Stockholm-icons / General / User</title>
                      <desc>Created with Sketch.</desc>
                      <g
                        id="Stockholm-icons-/-General-/-User"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <polygon
                          id="Shape"
                          points="0 0 24 0 24 24 0 24"
                        ></polygon>
                        <path
                          d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z"
                          id="Mask"
                          fill="#335EEA"
                          opacity="0.3"
                        ></path>
                        <path
                          d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z"
                          id="Mask-Copy"
                          fill="#335EEA"
                        ></path>
                      </g>
                    </svg>
                  </div>

                  <div className="ml-5">
                    {/* Heading */}
                    <h4 className="mb-1">{homePage !=null &&
                    homePage.about_heading_1_2
                  }</h4>

                    {/* Text */}
                    <p className="text-muted mb-6 mb-md-0">
                    {homePage !=null &&
                    homePage.about_desc_1_2
                  }
                    </p>
                  </div>
                </div>

                <div className="d-flex">
                  {/* Icon */}
                  <div className="icon text-primary">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xlink="http://www.w3.org/1999/xlink"
                    >
                      <title>Stockholm-icons / Navigation / Route</title>
                      <desc>Created with Sketch.</desc>
                      <g
                        id="Stockholm-icons-/-Navigation-/-Route"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <polygon
                          id="Shape"
                          points="0 0 24 0 24 24 0 24"
                        ></polygon>
                        <path
                          d="M8,7 C7.44771525,7 7,6.55228475 7,6 C7,5.44771525 7.44771525,5 8,5 L16,5 C18.209139,5 20,6.790861 20,9 C20,11.209139 18.209139,13 16,13 L8,13 C6.8954305,13 6,13.8954305 6,15 C6,16.1045695 6.8954305,17 8,17 L17,17 C17.5522847,17 18,17.4477153 18,18 C18,18.5522847 17.5522847,19 17,19 L8,19 C5.790861,19 4,17.209139 4,15 C4,12.790861 5.790861,11 8,11 L16,11 C17.1045695,11 18,10.1045695 18,9 C18,7.8954305 17.1045695,7 16,7 L8,7 Z"
                          id="Path-110"
                          fill="#335EEA"
                          opacity="0.3"
                        ></path>
                        <path
                          d="M9.79289322,3.79289322 C10.1834175,3.40236893 10.8165825,3.40236893 11.2071068,3.79289322 C11.5976311,4.18341751 11.5976311,4.81658249 11.2071068,5.20710678 L8.20710678,8.20710678 C7.81658249,8.59763107 7.18341751,8.59763107 6.79289322,8.20710678 L3.79289322,5.20710678 C3.40236893,4.81658249 3.40236893,4.18341751 3.79289322,3.79289322 C4.18341751,3.40236893 4.81658249,3.40236893 5.20710678,3.79289322 L7.5,6.08578644 L9.79289322,3.79289322 Z"
                          id="Path-104"
                          fill="#335EEA"
                          transform="translate(7.500000, 6.000000) rotate(-270.000000) translate(-7.500000, -6.000000) "
                        ></path>
                        <path
                          d="M18.7928932,15.7928932 C19.1834175,15.4023689 19.8165825,15.4023689 20.2071068,15.7928932 C20.5976311,16.1834175 20.5976311,16.8165825 20.2071068,17.2071068 L17.2071068,20.2071068 C16.8165825,20.5976311 16.1834175,20.5976311 15.7928932,20.2071068 L12.7928932,17.2071068 C12.4023689,16.8165825 12.4023689,16.1834175 12.7928932,15.7928932 C13.1834175,15.4023689 13.8165825,15.4023689 14.2071068,15.7928932 L16.5,18.0857864 L18.7928932,15.7928932 Z"
                          id="Path-104-Copy"
                          fill="#335EEA"
                          transform="translate(16.500000, 18.000000) scale(1, -1) rotate(270.000000) translate(-16.500000, -18.000000) "
                        ></path>
                      </g>
                    </svg>
                  </div>

                  <div className="ml-5">
                    {/* Heading */}
                    <h4 className="mb-1">{homePage !=null &&
                    homePage.about_heading_1_3
                  }</h4>

                    {/* Text */}
                    <p className="text-muted mb-6 mb-md-0">
                    {homePage !=null &&
                    homePage.about_desc_1_3
                  }
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5 col-lg-6">
                <div
                  className="w-md-150 w-lg-130 position-relative"
                  data-aos="fade-left"
                >
                  {/* Shape */}
                  <div className="shape shape-fluid-y shape-blur-4 svg-shim text-gray-200">
                   
                  </div>

                  {/* Image */}
                  <div className="img-skewed img-skewed-left">
                    {/* Image */}
                    {homePage !=null &&
                     <img
                        src={homePage.toolkit_right_img}

                        className="screenshot img-fluid img-skewed-item"
                        alt="..."
                      />
                    }
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* / .row */}
          </div>{" "}
          {/* / .container */}
        </section>

        {/* TESTIMONIALS
    ================================================== */}
    
     
        <section className="pt-10 pt-md-12">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8 text-center">
                {/* Heading */}
                <h2>{homePage !=null &&
                    homePage.testimonials_heading
                  }</h2>

                {/* Text */}
                <p className="font-size-lg text-muted mb-7 mb-md-9">
                  {homePage !=null &&
                    homePage.testimonials_desc
                  }
                </p>
              </div>
            </div>{" "}
            {/* / .row */}
            <div className="row">
              <div className="col-12">
                {/* Card */}
                {/* {homePage !=null && */}
                <div className="card card-row shadow-light-lg mb-6">
                  <div className="row no-gutters">
                    <div className="col-12 col-md-6">
                      {/* Slider */}
                      <div
                        className="card-img-slider"
                        data-flickity='{"fade": true, "imagesLoaded": true, "pageDots": false, "prevNextButtons": false, "asNavFor": "#blogSlider", "draggable": false}'
                      >
                        <a
                          className="card-img-left bg-cover"
                          style={{
                            backgroundImage: `url(${homePage !== null ? homePage.testimonial_1_img : ""})`
                          }}
                          href="javascript:void(0);"
                        >
                          {/* Image (placeholder) */}
                          <img
                              src={homePage !== null ? homePage.testimonial_1_img : ""}
                              alt="..."
                              className="img-fluid d-md-none invisible"
                            />
                        </a>
                        <a
                          className="card-img-left bg-cover"
                          style={{
                            backgroundImage: `url(${homePage !== null ? homePage.testimonial_2_img : ""})`
                          }}
                          href="javascript:void(0);"
                        >
                          {/* Image (placeholder) */}
                          <img
                              src={homePage !== null ? homePage.testimonial_2_img : ""}
                              alt="..."
                              className="img-fluid d-md-none invisible"
                            />
                        </a>
                      </div>

                      {/* Shape */}
                      <div className="shape shape-right shape-fluid-y svg-shim text-white d-none d-md-block">
                        <svg
                          viewBox="0 0 112 690"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M116 0H51V172C76 384 0 517 0 517V690H116V0Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 position-static">
                      {/* Slider */}
                      <div
                        className="position-static"
                        data-flickity='{"wrapAround": true, "pageDots": false, "imagesLoaded": true, "adaptiveHeight": true}'
                        id="blogSlider"
                      >
                        <div className="w-100">
                          {/* Body */}
                          <div className="card-body">
                            <blockquote className="blockquote text-center mb-0">
                              {/* Brand */}
                              <div className="row justify-content-center mb-5 mb-md-7">
                                <div className="col-6 col-sm-4 col-md-7 col-lg-5">
                                  {/* Logo */}
                                  <div
                                    className="img-fluid svg-shim"
                                    style={{ color: "#FF5A5F" }}
                                  >
                                    <svg
                                      viewBox="0 0 2761 991"
                                      version="1.1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xlink="http://www.w3.org/1999/xlink"
                                    >
                                      <g
                                        id="airbnb"
                                        stroke="none"
                                        strokeWidth="1"
                                        fill="none"
                                        fillRule="evenodd"
                                      >
                                        <g
                                          transform="translate(130.000000, 105.000000)"
                                          fill="currentColor"
                                          fillRule="nonzero"
                                          id="Shape"
                                        >
                                          <path d="M1317.62854,196.830214 C1317.62854,224.94903 1294.97121,247.590764 1266.85239,247.590764 C1238.73357,247.590764 1216.09184,224.94903 1216.09184,196.830214 C1216.09184,168.711397 1237.96116,146.069664 1266.85239,146.069664 C1295.76702,146.849875 1317.62854,169.49941 1317.62854,196.830214 Z M1108.31345,299.147129 L1108.31345,311.646115 C1108.31345,311.646115 1084.11129,280.390848 1032.56273,280.390848 C947.441668,280.390848 881.045683,345.218609 881.045683,435.028737 C881.045683,524.066455 946.661457,589.666625 1032.56273,589.666625 C1084.8915,589.666625 1108.31345,557.646752 1108.31345,557.646752 L1108.31345,570.918146 C1108.31345,577.167639 1113.01032,581.841105 1119.25201,581.841105 L1182.50374,581.841105 L1182.50374,288.177358 L1119.25201,288.177358 C1113.01032,288.200764 1108.31345,293.677848 1108.31345,299.147129 Z M1108.31345,487.357512 C1096.61028,504.545567 1073.17273,519.385187 1045.06171,519.385187 C995.081373,519.385187 956.804204,488.145525 956.804204,435.028737 C956.804204,381.919751 995.081373,350.680088 1045.06171,350.680088 C1072.40032,350.680088 1097.39049,366.299919 1108.31345,382.699962 L1108.31345,487.357512 Z M1229.37104,288.200764 L1304.34155,288.200764 L1304.34155,581.864512 L1229.37104,581.864512 L1229.37104,288.200764 Z M2349.32541,280.383046 C2297.77685,280.383046 2273.55909,311.638313 2273.55909,311.638313 L2273.55909,146.849875 L2198.58858,146.849875 L2198.58858,581.864512 L2261.85592,581.864512 C2268.10541,581.864512 2272.77888,576.39523 2272.77888,570.925949 L2272.77888,557.654554 C2272.77888,557.654554 2296.99664,589.674427 2348.52959,589.674427 C2433.66626,589.674427 2500.04664,524.089862 2500.04664,435.052143 C2500.04664,346.014425 2433.66626,280.383046 2349.32541,280.383046 Z M2336.82642,518.597174 C2307.91959,518.597174 2285.27786,503.773158 2273.55909,486.5773 L2273.55909,381.919751 C2285.27786,366.299919 2310.26803,349.899877 2336.82642,349.899877 C2386.80676,349.899877 2425.07613,381.139539 2425.07613,434.248525 C2425.07613,487.357512 2386.81457,518.597174 2336.82642,518.597174 Z M2159.5468,407.705735 L2159.5468,582.644723 L2084.56069,582.644723 L2084.56069,416.28806 C2084.56069,367.875946 2068.94086,348.339454 2026.79384,348.339454 C2004.15211,348.339454 1980.71456,360.058229 1965.85154,377.246285 L1965.85154,581.872314 L1890.89663,581.872314 L1890.89663,288.208566 L1950.2317,288.208566 C1956.4812,288.208566 1961.17027,293.677848 1961.17027,299.147129 L1961.17027,311.646115 C1983.03959,288.988777 2011.93082,280.390848 2040.82204,280.390848 C2073.62993,280.390848 2100.96854,289.776791 2122.83786,308.517467 C2149.38065,330.386791 2159.5468,358.497806 2159.5468,407.705735 Z M1708.89673,280.383046 C1657.36377,280.383046 1633.14601,311.638313 1633.14601,311.638313 L1633.14601,146.849875 L1558.1755,146.849875 L1558.1755,581.864512 L1621.42724,581.864512 C1627.67673,581.864512 1632.3658,576.39523 1632.3658,570.925949 L1632.3658,557.654554 C1632.3658,557.654554 1656.58356,589.674427 1708.11652,589.674427 C1793.25318,589.674427 1859.63356,524.089862 1859.63356,435.052143 C1860.41377,346.006622 1794.03339,280.383046 1708.89673,280.383046 Z M1696.39775,518.597174 C1667.50652,518.597174 1644.86479,503.773158 1633.14601,486.5773 L1633.14601,381.919751 C1644.86479,366.299919 1669.85496,349.899877 1696.39775,349.899877 C1746.39369,349.899877 1784.65525,381.139539 1784.65525,434.248525 C1784.65525,487.357512 1746.39369,518.597174 1696.39775,518.597174 Z M1493.34774,280.383046 C1515.98948,280.383046 1527.70825,284.299707 1527.70825,284.299707 L1527.70825,353.800934 C1527.70825,353.800934 1465.22893,332.711821 1426.18715,377.238483 L1426.18715,582.636921 L1351.20104,582.636921 L1351.20104,288.200764 L1414.46838,288.200764 C1420.71787,288.200764 1425.39134,293.670046 1425.39134,299.139327 L1425.39134,311.638313 C1439.46635,295.230468 1469.9258,280.383046 1493.34774,280.383046 Z M714.704624,555.306117 C710.803568,545.935779 706.894709,535.78523 702.993652,527.187301 C696.736357,513.135694 690.486864,499.848695 685.033187,487.357512 L684.252976,486.5773 C630.355976,369.420765 572.573524,250.719411 511.64682,133.57848 L509.306186,128.881608 C502.898081,116.729582 496.653228,104.492167 490.573312,92.1726639 C482.755594,78.1054534 474.953481,63.2814378 462.454495,49.2142273 C437.464326,17.9745651 401.535593,0.78650921 363.274029,0.78650921 C324.216649,0.78650921 289.07593,17.9745651 263.313352,47.6460025 C251.594577,61.6976088 242.996648,76.5372286 235.194535,90.6044391 C229.099222,102.916209 222.854469,115.153428 216.46166,127.313383 L214.113224,132.010255 C153.974534,249.151186 95.4040683,367.860342 41.5148708,485.009075 L40.7268574,486.561696 C35.265378,499.076286 29.008083,512.347681 22.7585901,526.391485 C18.8575334,534.989414 14.9564767,544.359752 11.05542,554.510302 C0.897068278,583.401528 -2.23157921,610.740133 1.68508173,638.866752 C10.2752086,697.44502 49.3169843,746.629543 103.213984,768.514471 C123.522885,777.1124 144.611998,781.013457 166.47352,781.013457 C172.723012,781.013457 180.525126,780.233246 186.782421,779.445232 C212.560604,776.324387 239.111196,767.742062 264.889379,752.902442 C296.909252,734.934175 327.368703,709.171597 361.72921,671.682441 C396.089718,709.171597 427.32938,734.934175 458.569042,752.902442 C484.355027,767.742062 510.897817,776.324387 536.668198,779.445232 C542.917691,780.241048 550.735408,781.013457 556.984901,781.013457 C578.854225,781.013457 600.715747,777.1124 620.236635,768.514471 C674.913846,746.629543 713.17541,696.664809 721.773339,638.866752 C727.976019,611.535949 724.855174,584.212948 714.704624,555.306117 Z M362.486015,595.916118 C320.30779,542.807132 292.969185,492.826793 283.606649,450.664172 C279.705592,432.695905 278.917578,417.076074 281.266015,403.016665 C282.818635,390.51768 287.515507,379.579117 293.765,370.208778 C308.60462,349.13527 333.594789,335.848271 362.493818,335.848271 C391.400648,335.848271 417.171029,348.347256 431.230437,370.208778 C437.47993,379.579117 442.161198,390.525482 443.737225,403.016665 C446.070057,417.083876 445.289845,433.476116 441.388789,450.664172 C431.987242,492.046582 404.648637,542.034723 362.486015,595.916118 Z M674.086822,632.625062 C668.625343,673.235062 641.286737,708.391385 603.025173,724.011216 C584.284496,731.81333 563.967793,734.161766 543.674496,731.81333 C524.153608,729.464894 504.617116,723.215401 484.323819,711.512231 C456.205002,695.876795 428.093987,671.682441 395.2861,635.745907 C446.826862,572.494173 478.066524,514.688315 489.785298,463.155356 C495.25458,438.937596 496.042593,417.076074 493.686355,396.75937 C490.573312,377.238483 483.535805,359.270215 472.605045,343.650384 C448.379482,308.494061 407.76168,288.200764 362.478213,288.200764 C317.194747,288.200764 276.576944,309.289877 252.366986,343.650384 C241.436226,359.270215 234.398719,377.238483 231.277874,396.75937 C228.157028,417.076074 228.929438,439.717807 235.178931,463.155356 C246.889903,514.688315 278.909776,573.266583 329.670326,636.526118 C297.650453,672.454851 268.751425,696.672611 240.632608,712.292442 C220.323707,724.011216 200.810621,730.260709 181.289733,732.593541 C160.208423,734.941977 139.891719,731.81333 121.931254,724.791428 C83.6696897,709.171597 56.3310842,674.015273 50.8696048,633.405273 C48.5289708,613.884385 50.0815914,594.363497 57.899309,572.494173 C60.232141,564.676456 64.1488019,556.874342 68.0498586,547.504004 C73.5191401,535.005018 79.7530288,521.718019 86.0103238,508.446624 L86.7983372,506.894004 C140.679733,390.51768 198.469987,271.808524 258.608677,156.228015 L260.949311,151.531143 C267.206606,139.827973 273.456099,127.328987 279.69779,115.610213 C285.947283,103.111227 292.969185,91.3924525 301.567114,81.2341009 C317.967156,62.5090286 339.828678,52.3428748 364.046438,52.3428748 C388.264198,52.3428748 410.12572,62.5090286 426.525763,81.2341009 C435.123692,91.4158589 442.145594,103.134633 448.395087,115.610213 C454.652382,127.328987 460.901874,139.827973 467.135763,151.531143 L469.484199,156.228015 C528.705845,272.288756 585.728672,389.458413 640.52213,507.674215 L640.52213,508.454426 C646.779425,520.969016 652.240904,535.01282 658.490397,547.52741 C662.391454,556.882144 666.300313,564.684258 668.640947,572.501975 C674.874835,592.78747 677.215469,612.323962 674.086822,632.625062 Z"></path>
                                        </g>
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                              </div>

                              <p className="mb-5 mb-md-7">
                               “{homePage !=null &&
                                homePage.testimonial_desc_1
                              }”
                              </p>

                              {homePage !=null &&
                              <footer className="blockquote-footer">
                                <span className="h6 text-uppercase">
                                
                                {homePage.testimonial_desc_name_1}
                             
                                  
                                </span>
                              </footer>
                                 }
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
                                  <div
                                    className="img-fluid svg-shim"
                                    style={{ color: "#3F5D87" }}
                                  >
                                    <svg
                                      viewBox="0 0 2761 991"
                                      version="1.1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xlink="http://www.w3.org/1999/xlink"
                                    >
                                      <g
                                        id="instagram"
                                        stroke="none"
                                        strokeWidth="1"
                                        fill="none"
                                        fillRule="evenodd"
                                      >
                                        <g
                                          transform="translate(130.000000, 198.000000)"
                                          fill="currentColor"
                                          fillRule="nonzero"
                                          id="Shape"
                                        >
                                          <path d="M143.497142,0.251252504 C120.634256,0.251252504 90.9945866,24.495521 73.5095841,40.6341758 C35.0686047,74.7558316 0.251252504,137.498637 0.251252504,187.859048 C0.251252504,259.418179 61.1096718,286.430218 76.5025801,286.430218 C81.5776602,286.430218 85.9044914,283.812597 85.9044914,276.925704 C85.9044914,271.5278 82.4810645,267.035804 79.0751552,262.421185 C64.981047,240.874616 60.4540155,220.311533 60.4540155,192.57627 C60.4540155,134.750887 87.1232113,81.7478306 109.245356,57.493552 C113.324439,53.1041583 122.541165,43.6221668 125.298925,43.6221668 C128.036666,43.6221668 128.714845,45.8518988 128.714845,52.7437975 L126.144772,431.225157 C126.144772,490.391883 109.072683,513.89541 109.072683,527.826856 C109.072683,533.947983 111.722836,535.537074 116.782901,535.537074 C140.741884,535.537074 164.618284,506.335343 171.382555,495.684681 C192.358552,459.453414 197.503702,431.170102 197.503702,349.588439 L197.503702,31.5500826 C197.503702,22.9414654 195.088785,19.2202405 186.910599,13.9124273 C174.951127,6.31732464 161.24741,0.251252504 143.497142,0.251252504 Z M828.54037,1.30730962 C817.27159,1.30730962 812.454268,7.1982064 811.921234,25.4264529 L809.421232,100.902004 L743.412657,98.6147143 C739.408649,98.5121116 737.599338,99.7783792 735.847584,103.296901 C730.241973,113.807422 727.29152,122.043166 727.29152,135.756894 C727.29152,146.923071 732.354087,148.114263 736.868606,148.114263 L805.547354,150.086237 L805.337143,294.283078 C805.337143,324.866192 786.037825,364.540906 751.793546,397.538937 C751.793546,397.538937 754.738995,387.576465 754.571327,377.123502 C754.571327,347.536385 735.529766,320.724546 710.144355,301.750553 L648.184834,255.138895 C661.172835,240.113855 683.177362,210.314025 683.177362,185.151337 C683.177362,165.641808 670.910082,157.446105 648.042191,157.446105 C615.767384,157.446105 578.337417,187.005694 578.337417,230.847079 C578.337417,246.828076 585.447033,261.212475 596.255353,272.213487 C581.332915,300.526828 560.21928,337.779118 544.541087,364.308173 C532.699233,384.621007 512.66668,415.742159 500.814817,415.742159 C492.076069,415.742159 488.037026,401.993396 488.037026,349.170521 C488.037026,305.28409 491.155147,257.568827 492.719213,211.767981 C492.719213,201.269972 490.997489,191.585278 477.368847,182.090774 C464.831297,174.057733 449.348299,162.839003 433.399834,162.839003 C397.944343,162.839003 373.790165,195.464161 357.221079,227.366094 C340.073915,260.429191 330.802134,288.292081 317.72154,328.717547 L319.165486,189.590781 C319.610932,179.670852 317.105924,175.819496 309.167978,172.443617 C298.87017,168.076746 283.712497,163.041706 270.266538,163.041706 C259.03029,163.041706 257.663923,167.886555 257.663923,179.693374 L256.15241,346.632981 L255.979737,411.019932 C255.979737,469.070541 263.249514,478.75023 297.696495,478.75023 C316.768086,478.75023 322.876701,476.510488 323.254579,460.657119 C323.777602,450.171623 328.792622,424.768694 335.576913,399.293193 C355.419276,324.097923 378.93031,264.623389 419.468389,219.293013 C423.69512,214.89361 426.963391,216.467685 426.297725,222.70643 C426.297725,222.70643 419.88881,324.470796 419.88881,366.094962 C419.88881,440.124065 431.280212,478.752732 468.114584,478.752732 C504.265771,478.752732 539.771312,432.303737 559.153213,400.947349 L621.32795,296.953251 C661.615778,331.282615 689.72892,357.899258 689.72892,390.27917 C689.72892,410.404316 677.031209,430.094025 657.689348,430.094025 C633.517652,430.094025 618.074694,404.603509 601.748351,404.603509 C588.197286,404.603509 570.804877,430.764696 570.804877,445.619566 C570.804877,459.643604 601.40801,479.483464 656.317975,479.483464 C737.376615,479.483464 780.860142,423.85528 806.956264,362.253617 C811.951264,435.366803 841.082925,478.074554 886.518406,478.074554 C916.320738,478.074554 950.765217,440.421863 966.433401,394.428324 C966.433401,394.428324 967.979949,406.367775 979.87936,430.829762 C996.258256,462.774238 1021.15818,477.44142 1052.08664,477.44142 C1090.55515,477.44142 1123.45808,454.120576 1143.54569,414.988905 C1146.59124,444.641087 1171.48866,477.296275 1211.52624,477.296275 C1236.6589,477.296275 1259.57183,458.039499 1274.61189,426.320248 C1274.61189,426.320248 1294.09389,478.707687 1350.44279,478.707687 C1382.09198,478.707687 1419.56949,449.388339 1428.52596,428.084514 L1429.51194,459.065526 L1345.90575,536.165202 C1321.62895,559.731292 1295.8056,593.590185 1295.8056,631.07771 C1295.8056,678.755435 1340.82066,706.170378 1380.43532,706.170378 C1421.61404,706.170378 1448.93639,680.081763 1463.90387,658.222382 C1482.74022,629.936568 1490.69569,576.625703 1490.69569,524.513539 L1488.82882,446.1526 C1545.17772,384.213098 1589.27937,298.599899 1608.91152,238.024263 L1651.68434,236.898136 C1659.97013,236.340077 1659.55722,239.603344 1658.41107,244.433179 C1650.89355,276.199977 1644.32947,312.175989 1644.32947,348.004353 C1644.32947,407.196104 1657.96312,432.954388 1677.56024,454.00546 C1694.5998,471.643116 1711.54426,477.59157 1729.37961,477.59157 C1764.25952,477.59157 1786.15644,448.787738 1793.10089,430.629561 C1809.47979,462.574038 1833.60894,477.45143 1864.5299,477.45143 C1903.0009,477.45143 1935.90384,454.130586 1955.99395,414.998915 C1959.0395,444.651097 1983.93192,477.306285 2023.972,477.306285 C2053.88444,477.306285 2071.23431,460.046508 2084.87796,427.526455 C2085.15324,437.986926 2085.55614,449.138088 2085.86395,459.593554 C2086.22431,465.00397 2090.54864,468.427397 2094.42002,469.83881 C2107.13524,474.651127 2118.29642,477.058537 2128.32145,477.058537 C2154.46762,477.058537 2160.14581,471.688161 2160.14581,454.596052 C2160.14581,426.405333 2160.97163,381.863246 2168.98215,346.099947 C2177.48566,310.494306 2190.31851,270.186458 2208.02624,242.140884 C2209.62033,239.242983 2213.52674,240.003745 2213.69691,243.514759 C2216.23946,303.522327 2220.25347,405.10401 2236.01675,431.400333 C2243.79454,443.942888 2255.82408,453.084539 2273.8246,453.084539 C2282.26555,453.084539 2292.61341,449.485936 2295.26106,447.241189 C2297.94374,445.149095 2299.2951,442.824268 2299.13243,438.512452 C2299.13243,361.800663 2323.05638,287.533822 2347.01286,237.60134 C2347.67102,236.119857 2349.53789,236.004742 2349.47533,237.954193 L2348.13899,293.227021 C2348.13899,384.007893 2354.68304,441.360303 2400.02843,468.932903 C2408.94435,473.921657 2418.99597,476.527218 2429.21264,476.497975 C2452.41337,476.497975 2473.45193,463.540005 2483.84983,442.701645 C2492.32081,426.507935 2500.25626,395.339236 2500.25626,377.684063 C2500.25626,370.849722 2500.33634,359.726087 2489.13262,359.726087 C2482.98897,359.726087 2479.29778,364.255621 2477.82881,371.09747 C2474.25773,385.927314 2471.3273,398.645045 2465.78675,413.307222 C2460.49145,427.303732 2452.58854,435.454391 2443.21916,435.454391 C2432.21315,435.454391 2426.62756,426.793221 2423.43436,421.440363 C2409.3903,400.01892 2408.26417,350.809661 2408.26417,309.736047 L2411.64506,204.017723 C2411.64506,195.271468 2407.9939,184.803489 2394.49789,177.085764 C2385.43883,171.870543 2362.52589,162.053216 2348.48684,162.053216 C2335.46881,162.053216 2329.1675,169.425596 2324.4753,180.24893 C2315.66398,199.688389 2286.21951,275.937214 2278.3241,337.929268 C2278.04132,339.563404 2276.00428,339.90875 2275.86164,337.824163 C2271.75753,293.98528 2269.65292,241.164907 2269.69797,205.529236 C2269.69797,194.755952 2267.06283,179.355536 2244.20996,169.375546 C2233.10384,164.768434 2223.91714,161.948111 2212.69841,161.948111 C2198.77948,161.948111 2195.78648,168.75993 2190.80149,177.786465 C2175.03321,206.920629 2164.12979,244.91366 2147.78593,292.83663 L2148.03368,183.176861 C2148.03368,178.049228 2144.89054,171.3275 2135.88652,169.518189 C2113.56168,164.388053 2103.21882,162.058221 2094.41751,162.058221 C2088.0086,162.058221 2084.48757,167.165834 2084.48757,172.688863 L2083.28887,359.661022 C2078.96955,382.548932 2061.46953,437.181119 2036.64218,437.181119 C2016.26428,437.181119 2006.75476,416.535453 2006.75476,330.234065 L2010.45346,189.976167 C2010.45346,181.117299 2004.63764,177.396074 1996.16166,173.644819 C1984.04203,168.83 1974.39988,166.918086 1962.08255,166.918086 C1946.62207,166.918086 1941.31676,174.317993 1944.44489,192.093286 C1927.45038,169.10027 1910.46087,156.39255 1880.44583,156.39255 C1820.18551,156.39255 1774.76254,228.877607 1774.76254,334.213048 C1774.17195,363.750115 1781.30909,393.107001 1781.30909,393.107001 C1775.85613,417.62154 1763.0383,437.604043 1745.33058,437.604043 C1722.99071,437.604043 1708.75396,406.019927 1708.75396,351.282635 C1708.75396,296.38268 1729.6649,234.463199 1729.6649,217.6814 C1729.6649,198.169369 1716.8796,185.824511 1694.24944,185.824511 C1682.9131,185.824511 1640.8585,195.36406 1619.29942,198.494694 C1619.29942,198.494694 1621.73185,188.226916 1621.55167,180.153835 C1621.55167,160.914576 1612.52514,148.857507 1590.11521,148.857507 C1562.73029,148.857507 1542.62267,168.412081 1542.62267,201.772976 C1542.62267,216.740458 1551.2438,230.589321 1562.65522,238.029268 C1547.84289,299.811112 1523.75878,345.757104 1488.26826,397.085984 L1491.25875,189.237928 C1491.25875,182.481165 1489.45945,178.284464 1476.2237,173.146821 C1469.2267,170.123795 1457.82278,166.6328 1443.44839,166.6328 C1422.61504,166.6328 1423.99392,181.510193 1425.10753,192.648842 C1415.57549,175.746924 1394.7071,155.684341 1362.51238,155.684341 C1274.77956,155.684341 1247.84509,289.468259 1261.05332,384.478364 C1261.05332,396.06246 1249.74199,437.181119 1224.19392,437.181119 C1203.81602,437.181119 1194.3065,416.535453 1194.3065,330.234065 L1198.04024,189.976167 C1198.04024,181.114797 1192.18438,177.393572 1183.70839,173.644819 C1171.58876,168.83 1161.98164,166.918086 1149.66431,166.918086 C1134.20134,166.918086 1128.89603,174.317993 1132.02416,192.090784 C1115.02965,169.097768 1098.0051,156.390047 1067.98756,156.390047 C1007.72724,156.390047 961.703666,222.681405 961.703666,328.011841 C961.703666,368.219589 927.084012,429.576007 902.807211,429.576007 C889.321212,429.576007 874.961838,404.818725 874.961838,341.565408 C875.029405,298.449749 880.910292,151.672825 880.910292,151.672825 L965.647614,150.29895 C969.691662,150.261413 972.034007,145.841989 973.533008,143.119263 C977.424403,135.22386 979.306287,129.966097 979.306287,120.519141 C979.306287,111.995609 977.599578,108.882492 966.668636,108.266876 L882.211595,103.196801 L885.805192,24.5180436 C886.057945,19.5505711 883.059944,16.3123296 877.637016,13.8874023 C861.28815,7.493502 841.23808,1.30981212 828.54037,1.30730962 Z M1085.00209,207.463672 C1107.5947,207.463672 1130.52015,228.069298 1130.52015,301.174977 C1130.52015,393.222116 1096.98658,436.047485 1071.20077,436.047485 C1047.02657,436.047485 1028.67571,401.925829 1028.67571,334.90374 C1028.67571,267.158427 1046.59614,207.463672 1085.00209,207.463672 Z M1898.64404,207.463672 C1921.23666,207.463672 1944.16211,228.069298 1944.16211,301.174977 C1944.16211,393.222116 1910.62854,436.047485 1884.84273,436.047485 C1860.66853,436.047485 1842.31516,401.925829 1842.31516,334.90374 C1842.31766,267.158427 1860.2381,207.463672 1898.64404,207.463672 Z M1382.58497,207.886595 C1412.06948,207.886595 1425.11254,238.277016 1425.11254,297.195994 C1425.11254,386.027414 1398.70611,436.605543 1366.6365,436.605543 C1346.16351,436.605543 1322.62245,402.989393 1323.86369,336.870709 C1323.86369,294.595891 1337.64749,207.886595 1382.58497,207.886595 Z M1432.50244,505.049055 L1432.50244,540.03908 C1432.50244,656.145302 1401.56397,675.96264 1376.70408,675.96264 C1367.28465,675.96264 1344.21156,668.848018 1344.21156,640.124265 C1344.21156,599.971573 1386.19108,554.293349 1399.23664,540.17922 L1432.50244,505.049055 Z"></path>
                                        </g>
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                              </div>{" "}
                              {/* / .row */}
                              {/* Text */}
                              <p className="mb-5 mb-md-7">
                                “{homePage !=null &&
                                homePage.testimonial_desc_2
                              }”
                              </p>
                              {/* Footer */}
                              {homePage !=null &&
                              <footer className="blockquote-footer">
                              
                                <span className="h6 text-uppercase">
                                  
                                {homePage.testimonial_desc_name_2}
                              
                                  
                                </span>
                               
                              </footer>
                               }
                            </blockquote>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                 

                  {/* / .row */}
                </div>
                 {/* } */}
              </div>
            </div>{" "}
            {/* / .row */}
          </div>{" "}
          {/* / .container */}
        </section>
   
        {/* SHAPE
    ================================================== */}
        <div className="position-relative mt-n8">
          <div className="shape shape-bottom shape-fluid-x svg-shim text-gray-200">
            <svg
              viewBox="0 0 2880 480"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2160 0C1440 240 720 240 720 240H0V480H2880V0H2160Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        {/* STATS
    ================================================== */}
        <section className="pt-12 pt-md-13 bg-gray-200">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-5 col-lg-6 order-md-2">
                {/* Image */}
                <img
                    src={homePage!=null ? homePage.instant_right_img : ""}
                    alt="...."
                    className="img-fluid mb-6 mb-md-0"
                  />
              </div>
              <div className="col-12 col-md-7 col-lg-6 order-md-1">
                {/* Heading */}
                <h2>
                  {homePage !=null &&
                    homePage.stats_heading
                  }
                  <br />
                  {/* <span className="text-primary">Let us handle the design</span>. */}
                </h2>

                {/* Text */}
                <p className="font-size-lg text-gray-700 mb-6">
               
                </p>
              </div>
            </div>{" "}
            {/* / .row */}
          </div>{" "}
          {/* / .container */}
        </section>

        {/* PRICING
    ================================================== */}
        <section className="pt-9 pt-md-12 bg-gray-200">
          <div className="container price-section">
            <div className="row justify-content-center">
              <div className="col-12 col-md-12 col-lg-12 text-center">
                {/* Heading */}
                <h1>
                  {homePage !=null &&
                    homePage.pricing_heading_1_1
                  }.<br></br>
                  {homePage !=null &&
                    homePage.pricing_heading_1_2
                  }
                </h1>

                {/* Text */}
                <p className="lead text-gray-700">
                  {homePage !=null &&
                    homePage.pricing_desc_1_1
                  }
                </p>
                <p className="lead text-gray-700">
                    {homePage !=null &&
                    homePage.pricing_desc_1_2
                  }
                </p>

                {/* Form */}
                <form className="d-flex align-items-center justify-content-center mb-7 mb-md-9">
                  {/* Label */}
                  <span className="text-muted">Annual</span>

                  {/* Switch */}
                  <div className="custom-control custom-switch mx-3">
                    <input
                      type="checkbox"
                      onClick={this.handlePrice.bind(this)}
                      className="custom-control-input"
                      id="billingSwitch"
                      data-toggle="price"
                      data-target=".price"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="billingSwitch"
                    ></label>
                  </div>

                  {/* Label */}
                  <span className="text-muted">Monthly</span>
                </form>
              </div>
            </div>{" "}
            {/* / .row */}
            <div className="row align-items-center no-gutters">
              <div className="col-12 col-md-6 col-lg-4 ml-md-n3">
                {/* Card */}
                <div className="card rounded-lg shadow-lg mb-6  mb-md-0" data-aos="fade-up" data-aos-delay="200" >
                  {/* Body */}
                  <div className="card-body  hgt-600 ">
                    <div className="row justify-content-center">
                      <div className="col-12 col-xl-12">
                        {/* Badge */}
                        <p className="text-center ">
                          <span className="badge badge-pill badge-primary-soft">
                            <span className="h6 font-weight-bold text-uppercase">
                              {plan[0].key}
                            </span>
                          </span>
                        </p>

                        {/* Price */}
                        <div className="d-flex justify-content-center">
                          <span className="h2 mb-0 mt-2">$</span>
                          <span
                            className="price display-2 mb-0"
                            data-annual="37"
                            data-monthly="49"
                          >
                            {this.state.isAnual === true && <div>  {plan[0].annual} </div>}

                            {this.state.isAnual === false && <div> {plan[0].monthly} </div>}
                          </span>
                          <span className="h2 align-self-end mb-1">/mo</span>
                        </div>

                        {/* Text */}
                        <p className="text-center text-muted mb-6 mb-md-8">
                        {homePage!==null &&
                               homePage.what_included_title
                            } 

                        </p>

                          {this.renderPrice(plan[0].data)}
                      </div>
                    </div>{" "}
                    {/* / .row */}
                  </div>

                  {/* Button */}
                  <a
                    href="javascript:void(0);" onClick={this.handleTry.bind(this,0)}
                    className="card-btn btn btn-block btn-lg btn-light  btn-primary text-gray-700 rounded-bottom"
                  >
                    {homePage!==null  &&
                     homePage.try_free_btn
                    }
                  </a>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                {/* Card */}
                <div
                  className="card rounded-lg shadow-lg mb-6 mb-md-0"
                  style={{ zIndex: 1 }}
                  data-aos="fade-up"
                >
                  {/* Body */}
                  <div className="card-body hgt-600 py-6 py-md-8">
                    <div className="row justify-content-center">
                      <div className="col-12 col-xl-12">
                        {/* Badge */}
                        <div className="text-center mb-5">
                          <span className="badge badge-pill badge-primary-soft">
                            <span className="h6 font-weight-bold text-uppercase">
                            {plan[1].key}
                            </span>
                          </span>
                        </div>

                        {/* Price */}
                        <div className="d-flex justify-content-center">
                          <span className="h2 mb-0 mt-2">$</span>
                          <span
                            className="price display-2 mb-0"
                            data-annual="29"
                            data-monthly="49"
                          >
                            {this.state.isAnual === true && <div> {plan[1].annual} </div>}

                            {this.state.isAnual === false && <div> {plan[1].monthly} </div>}
                          </span>
                          <span className="h2 align-self-end mb-1">/mo</span>
                        </div>

                        {/* Text */}
                        <p className="text-center text-muted mb-6 mb-md-8">
                        {homePage!==null &&
                               homePage.what_included_title
                            } 

                        </p>

                          <div className="d-flex">
                            <p>{homePage!==null &&
                               homePage.price_2_title
                            } </p>
                          </div>

                        {this.renderPrice(plan[1].data)}
                      </div>
                    </div>{" "}
                    {/* / .row */}
                  </div>

                  {/* Button */}
                  <a
                    href="javascript:void(0);" onClick={this.handleTry.bind(this,1)}
                    className="card-btn btn btn-block btn-lg btn-primary rounded-bottom"
                  >
                   {homePage!==null &&
                     homePage.try_free_btn
                    }
                  </a>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4 ml-md-n3">
                {/* Card */}
                <div
                  className="card rounded-lg shadow-lg"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {/* Body */}
                  <div className="card-body hgt-600 ">
                    <div className="row justify-content-center">
                      <div className="col-12 col-xl-12">
                        {/* Badge */}
                        <p className="text-center ">
                          <span className="badge badge-pill badge-primary-soft">
                            <span className="h6 font-weight-bold text-uppercase">
                              {plan[2].key}
                            </span>
                          </span>
                        </p>

                        <div className="d-flex">
                            <p> 
                            {homePage!==null &&
                               homePage.contact_price_title
                            } 
                    </p>
                          </div>

                        {this.renderPrice(plan[2].data)}
                       
                      </div>
                    </div>{" "}
                    {/* / .row */}
                  </div>

                  {/* Button */}
                  <a
                    href="javascript:void(0);"  onClick={this.openContact.bind(this)}
                    className="card-btn btn btn-block btn-lg btn-light  btn-primary text-gray-700 rounded-bottom"
                  >
                    {homePage!==null &&
                     homePage.contact_us_btn
                    }
                  </a>
                </div>
              </div>
            </div>{" "}
            {/* / .row */}
          </div>{" "}
          {/* / .container */}
        </section>

        {/* SHAPE
    ================================================== */}
        <div className="position-relative mt-n15">
          <div className="shape shape-bottom shape-fluid-x svg-shim text-dark">
            <svg viewBox="0 0 2880 48" fill="none">
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        {/* FAQ
    ================================================== */}
        <section className="pt-15 bg-dark">
          <div className="container pt-8 pt-md-11"></div> {/* / .container */}
        </section>

        {/* CTA
                    ================================================== */}
        <section className="py-8 py-md-11 bg-dark">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8 text-center">
                <form method="post" >

              
                {/* Badge */}
                <span className="badge badge-pill badge-gray-700-soft mb-4">
                  <span className="h6 font-weight-bold text-uppercase">
                    {homePage !=null &&
                    homePage.footer_badge
                  }
                  </span>
                </span>

                {/* Heading */}
                <h1 className="display-4 text-white">{homePage !=null &&
                    homePage.footer_heading
                  }</h1>

                {/* Text */}
                <p className="font-size-lg text-muted mb-6 mb-md-8">
                  {homePage !=null &&
                    homePage.footer_desc
                  }
                </p>

                <div className="input-group   mb-8">
                  <input
                    type="email"
                    id="emailAdress"
                    name="emailAdress"
                    
                    className="form-control pl-2 border-left-0"
                    placeholder="Email Address"
                  />
                </div>

                {/* Button */}
                <a href="javascript:void(0);" onClick={this.checkEmail.bind(this,'emailAdress',0)} className="btn btn-success lift mb-6" >
                {homePage!==null &&
                     homePage.free_trial_btn
                    } <i className="fe fe-arrow-right"></i>
                </a>
                </form>
              </div>
            </div>{" "}
            {/* / .row */}
          </div>{" "}
          {/* / .container */}
        </section>

        {/* SHAPE
                ================================================== */}
        <div className="position-relative">
          <div className="shape shape-bottom shape-fluid-x svg-shim text-gray-200">
            <svg viewBox="0 0 2880 48" fill="none">
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
