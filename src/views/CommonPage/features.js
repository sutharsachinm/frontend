import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name:"Pricing",
            pricing:null,
            fname: "", femail: "", fcompany: "",fphone:"",weburl:''
        };
    }


    validateEmail(email){
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
      {
        return true;
      }
      return false;
    }

    weburlValidate(inptext){
      var reg = /\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i;
     if(reg.test(inptext))
     {
       return true;
     }
     else
     {
       return false;
     }
   };
  

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
             document.getElementById("p_cardEmail").innerHTML="Please enter a valid email address";
           }
 
           if(name!="")
           {
            document.getElementById("p_cardName").innerHTML="";
           }
           else
           {
             document.getElementById("p_cardName").innerHTML="Please enter a Name";
           }
         
           if(this.validateEmail(email)  && name!="")
           {
        
             fetch("/", {
               method: "POST",
               headers: { "Content-Type": "application/x-www-form-urlencoded" },
               body: encode({ "form-name": "demo-form", ...this.state })
             })
               .then((res) =>{
                  console.log(res)
                 
                   setTimeout(()=>{
                    toast.success("Thank you for requesting a demo with us. We will get back to you soon", {
                       position: toast.POSITION.TOP_RIGHT
                    });
                       window.location.href="/";
                   },3000)
               })
               .catch(error =>{
 
                 toast.error("Something went wrong !! Please try again", {
                   position: toast.POSITION.TOP_RIGHT
                 });
                
                 setTimeout(()=>{
                   window.location.href="/";
                  },3000)
                 
               });
       
             e.preventDefault();
           }
         
 
    }
     
    handleGetStart(e){
     
      let name =document.getElementById("weburl").value;
      let err =0;
       if(name!="" && this.weburlValidate(name))
       {
          document.getElementById("p_weburl").innerHTML="";
       }
       else
       {
        err++;
           document.getElementById("p_weburl").innerHTML="Please enter a valid Website address";
       }

      
     
       if(err==0)
       {
    
         fetch("/", {
           method: "POST",
           headers: { "Content-Type": "application/x-www-form-urlencoded" },
           body: encode({ "form-name": "app-form", ...this.state })
         })
           .then((res) =>{
              console.log(res)
             
               setTimeout(()=>{
                toast.success("Thank you for contacting us. We will get back to you soon", {
                   position: toast.POSITION.TOP_RIGHT
                });
                   window.location.href="/";
               },3000)
           })
           .catch(error =>{

             toast.error("Something went wrong !! Please try again", {
               position: toast.POSITION.TOP_RIGHT
             });
            
             setTimeout(()=>{
               window.location.href="/";
              },3000)
             
           });
   
         e.preventDefault();
       }
     

}

 async componentDidMount(){
  console.log('this.props : ',this.props)
      this.setState({pricing:this.props.fields});      
    }

    render() {

      const {fcompany,femail,fphone,fname,weburl,pricing} = this.state;
      return (
            
            <div className=" " style={{"background-color": "#f9fbfd"}}>
     <ToastContainer />
    <section className="pt-4 pt-md-11"  style={{"background-color": "#ffff"}}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-5 col-lg-6 order-md-2">
            
            {/* {/* Image */} 
            <img src="production/static/img/illustrations/illustration-2.png" className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0" alt="..." data-aos="fade-up" data-aos-delay="100" />

          </div>
          <div className="col-12 col-md-7 col-lg-6 order-md-1" data-aos="fade-up">
            
            {/* {/* Heading */}  
            <h1 className="display-3 text-center text-md-left">
            {pricing !=null &&
                    pricing.header_title
                  }
            </h1>

            {/* Text */}
            <p className="lead text-center text-md-left text-muted mb-6 mb-lg-8">
            {pricing !=null &&
                    pricing.header_title_desc
                  }
            </p>
                
            {/* Buttons */}
            <div className="text-center text-md-left">
               
                {/* <input type="text" className="emailText shadow lift " id="applyName" placeholder="Your email address"/> */}
                <div className="input-group feature-header-sign">
                
                 <input type="search" className="form-control pl-2 border-right-0" placeholder="Email Address"  />
                  <a href="" className="btn btn-primary-soft">
                   {pricing !=null &&
                    pricing.get_started_btn
                  }
                  </a>
                </div>
            
            </div>
            <span className="lead text-center text-md-left text-muted mb-6 mb-lg-8">
             {pricing !=null &&
                    pricing.already_using_profit
                  } 
             </span> <a href="https://app.profitpro.io/" className="text-primary">{pricing !=null &&
                    pricing.sign_in
                  }</a>

          </div>
        </div> {/* / .row */}
      </div> {/* / .container */}
    </section>


    
    <div className="position-relative">
      <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"/>
        </svg>
      </div>
    </div>

    
    <section className="pt-8 pt-md-10" id="about">
      <div className="container ">
        <div className="row">
          <div className="col-12 text-center">
            
            <a href="#about" className="btn btn-white btn-rounded-circle shadow mt-n12 mt-md-n14" >
              <i className="fe fe-arrow-down"></i>
            </a>

          </div>
        </div> 
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            
            <h2 className="font-weight-bold">
               {pricing !=null &&
                    pricing.communication_title_1
                  } <span className="text-primary"> {pricing !=null &&
                    pricing.communication_title_2
                  }</span>
            </h2>

            <p className="font-size-lg text-muted mb-9">
            {pricing !=null &&
                    pricing.communication_title_desc_1
                  }
            </p>

          </div>
        </div> 
        <div className="row">
          <div className="col-12 col-lg-6">
            
            <div className="row align-items-center mb-8"data-aos="fade-up">
              <div className="col-4 col-lg-5">
                
                <img src="/production/static/img/illustrations/illustration-4.png" alt="..." className="img-fluid"/>

              </div>
              <div className="col-8 col-lg-7">
                
                <h3 className="font-weight-bold mb-2">
                {pricing !=null &&
                    pricing.communication_title_1_1
                  }
                
                </h3>

                <p className="text-gray-700 mb-0">
                {pricing !=null &&
                    pricing.communication_title_desc_1_1
                  }
                </p>

              </div>
            </div> 

            <div className="row align-items-center mb-8" data-aos="fade-up">
              <div className="col-4 col-lg-5">
                
                <img src="/production/static/img/illustrations/illustration-1-cropped.png" alt="..." className="img-fluid"/>

              </div>
              <div className="col-8 col-lg-7">
                
                <h3 className="font-weight-bold mb-2">
                  {pricing !=null &&
                    pricing.communication_title_1_3
                  } 
                </h3>

                <p className="text-gray-700 mb-0">
                {pricing !=null &&
                    pricing.communication_title_desc_1_3
                  }
                </p>

              </div>
            </div> 


          </div>
          <div className="col-12 col-lg-6">
            <div className="row align-items-center mb-8" data-aos="fade-up">
              <div className="col-4 col-lg-5">
                
                <img src="/production/static/img/illustrations/illustration-7.png" alt="..." className="img-fluid"/>

              </div>
              <div className="col-8 col-lg-7">
                
                <h3 className="font-weight-bold mb-2">
                  {pricing !=null &&
                    pricing.communication_title_1_2
                  }
                </h3>

                <p className="text-gray-700 mb-0">
                {pricing !=null &&
                    pricing.communication_title_desc_1_2
                  }
                </p>

              </div>
            </div> 

            <div className="row align-items-center mb-8" data-aos="fade-up">
              <div className="col-4 col-lg-5">
                
                <img src="/production/static/img/illustrations/illustration-6.png" alt="..." className="img-fluid"/>

              </div>
              <div className="col-8 col-lg-7">
                
                <h3 className="font-weight-bold mb-2">
                  {pricing !=null &&
                    pricing.communication_title_1_4
                  }
                </h3>

                <p className="text-gray-700 mb-0">
                {pricing !=null &&
                    pricing.communication_title_desc_1_4
                  }
                </p>

              </div>
            </div> 

          </div>
        </div> 
      </div> 
    </section>

    
    <section className="py-8 py-md-11">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 col-lg-5" data-aos="fade-up">
            
            <span className="badge badge-pill badge-success-soft mb-3">
              <span className="h6 text-uppercase">{pricing !=null &&
                    pricing.unified
                  }</span>
            </span>

            <h2 className="font-weight-bold">
              {pricing !=null &&
                    pricing.microservices_title_1
                  } <br></br>
              <span className="text-success">{pricing !=null &&
                    pricing.microservices_title_2
                  }</span>
            </h2>

            <p className="font-size-lg text-gray-700">
            {pricing !=null &&
                    pricing.microservices_title_desc
                  }

            </p>

            <form method="post" className="mb-8">
              <div className="form-row">
                <div className="col-12 col-md">
                  
                  <div className="form-group mb-md-0">
                    <input type="url"   value={weburl} onChange={this.handleChange} name="weburl" id="weburl" className="form-control bg-light border-0" placeholder="WWW.PROFITPRO.IO"/>
                    <p className="err" id="p_weburl" ></p>
                  </div>

                </div>
                <div className="col-12 col-md-auto">
                  
                  <button type="button" onClick={this.handleGetStart.bind(this)} className="btn btn-success-soft">
                    Get started
                  </button>

                </div>
              </div>
            </form>

          </div>
          <div className="col-12 col-md-6 col-lg-6 offset-lg-1">
            
            <div className="card card-border border-success shadow-lg mb-5" data-aos="fade-up">
              <div className="card-body">
                
                <div className="list-group list-group-flush">
                  <div className="list-group-item d-flex align-items-center">
                    
                    <div className="mr-auto">
                      
                      <p className="font-weight-bold mb-1">
                      {pricing !=null &&
                          pricing.about_title_1
                        }
                      </p>

                      <p className="font-size-sm text-muted mb-0">
                      {pricing !=null &&
                          pricing.about_title_desc_1
                        }
                      </p>

                    </div>
                      
                    <div className="badge badge-rounded-circle badge-success-soft ml-4">
                      <i className="fe fe-check"></i>
                    </div>

                  </div>
                  <div className="list-group-item d-flex align-items-center">
                      
                    <div className="mr-auto">
                      
                      <p className="font-weight-bold mb-1">
                        {pricing !=null &&
                          pricing.about_title_2
                        }
                      </p>

                      <p className="font-size-sm text-muted mb-0">
                        {pricing !=null &&
                          pricing.about_title_desc_2
                        }
                      </p>

                    </div>
                      
                    <div className="badge badge-rounded-circle badge-success-soft ml-4">
                      <i className="fe fe-check"></i>
                    </div>

                  </div>
                  <div className="list-group-item d-flex align-items-center">
                      
                    <div className="mr-auto">
                      
                      <p className="font-weight-bold mb-1">
                        {pricing !=null &&
                          pricing.about_title_3
                        }
                      </p>

                      <p className="font-size-sm text-muted mb-0">
                        {pricing !=null &&
                          pricing.about_title_desc_3
                        }
                      </p>

                    </div>
                      
                    <div className="badge badge-rounded-circle badge-success-soft ml-4">
                      <i className="fe fe-check"></i>
                    </div>

                  </div>
                  <div className="list-group-item d-flex align-items-center">
                      
                    <div className="mr-auto">
                      
                      <p className="font-weight-bold mb-1">
                        {pricing !=null &&
                          pricing.about_title_4
                        }
                      </p>

                      <p className="font-size-sm text-muted mb-0">
                        {pricing !=null &&
                          pricing.about_title_desc_4
                        }
                      </p>

                    </div>
                      
                    <div className="badge badge-rounded-circle badge-success-soft ml-4">
                      <i className="fe fe-check"></i>
                    </div>

                  </div>
                </div>

              </div>
            </div>

            <p className="font-size-sm text-center text-gray-500 mb-0">
              * {pricing !=null &&
                          pricing.condition
                        }
            </p>

          </div>
        </div> 
      </div> 
    </section>

    
    <section data-jarallax data-speed=".8" className="py-15 overlay overlay-black overlay-60 jarallax" style={{backgroundImage: `url(/production/static/img/covers/cover-1.jpg)`}} >
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7">
            
            <blockquote className="blockquote mb-0">

              <p className="h2 text-white">
                "{pricing !=null &&
                          pricing.testimonials_desc
                        }"
              </p>

              <footer className="blockquote-footer text-white-50 mb-0">
              {pricing !=null &&
                          pricing.testimonials_name
                        }
                
              </footer>

            </blockquote>

          </div>
        </div> 
      </div> 
    </section>

    
    <div className="position-relative">
      <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
        <svg viewBox="0 0 2880 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M720 28H0V56H995.5H1639.5H2880V28H2160C2160 28 1874 -9.82909e-10 1440 0C1006 9.829e-10 720 28 720 28Z" fill="currentColor"/>
        </svg>
      </div>
    </div>

    
    <section className="pt-10">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            
            <span className="badge badge-pill badge-success-soft mb-3">
              <span className="h6 text-uppercase">{pricing !=null &&
                          pricing.case_studies
                        }</span>
            </span>

            <h2 className="font-weight-bold">
            {pricing !=null &&
                          pricing.case_studies_title
                        }
              
            </h2>

            <p className="font-size-lg text-gray-700 mb-9">
            {pricing !=null &&
                          pricing.case_studies_desc
                        }
              
            </p>

          </div>
        </div> 
      </div> 
    </section>

    
    <section>
      <div className="container w100">
        <div className="row">
          <div className="col-12">
            
            <div className="flickity-viewport-visible pt-2 pb-9" data-flickity='{"cellAlign": "left", "imagesLoaded": true, "pageDots": false, "prevNextButtons": false, "contain": true}'>
              <div className="col-12 col-md-5 col-lg-4">
                
                <div className="card card-border shadow-light-lg lift lift-lg" style={{"border-top-color": "#FF5A5F"}}>
                  <div className="card-body text-center">

                    <div className="img-fluid mb-5 w-50 svg-shim mx-auto" style={{color: "#FF5A5F"}}>
                      <svg viewBox="0 0 2761 991" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                        <g id="airbnb" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g transform="translate(130.000000, 105.000000)" fill="currentColor" fill-rule="nonzero" id="Shape">
                            <path d="M1317.62854,196.830214 C1317.62854,224.94903 1294.97121,247.590764 1266.85239,247.590764 C1238.73357,247.590764 1216.09184,224.94903 1216.09184,196.830214 C1216.09184,168.711397 1237.96116,146.069664 1266.85239,146.069664 C1295.76702,146.849875 1317.62854,169.49941 1317.62854,196.830214 Z M1108.31345,299.147129 L1108.31345,311.646115 C1108.31345,311.646115 1084.11129,280.390848 1032.56273,280.390848 C947.441668,280.390848 881.045683,345.218609 881.045683,435.028737 C881.045683,524.066455 946.661457,589.666625 1032.56273,589.666625 C1084.8915,589.666625 1108.31345,557.646752 1108.31345,557.646752 L1108.31345,570.918146 C1108.31345,577.167639 1113.01032,581.841105 1119.25201,581.841105 L1182.50374,581.841105 L1182.50374,288.177358 L1119.25201,288.177358 C1113.01032,288.200764 1108.31345,293.677848 1108.31345,299.147129 Z M1108.31345,487.357512 C1096.61028,504.545567 1073.17273,519.385187 1045.06171,519.385187 C995.081373,519.385187 956.804204,488.145525 956.804204,435.028737 C956.804204,381.919751 995.081373,350.680088 1045.06171,350.680088 C1072.40032,350.680088 1097.39049,366.299919 1108.31345,382.699962 L1108.31345,487.357512 Z M1229.37104,288.200764 L1304.34155,288.200764 L1304.34155,581.864512 L1229.37104,581.864512 L1229.37104,288.200764 Z M2349.32541,280.383046 C2297.77685,280.383046 2273.55909,311.638313 2273.55909,311.638313 L2273.55909,146.849875 L2198.58858,146.849875 L2198.58858,581.864512 L2261.85592,581.864512 C2268.10541,581.864512 2272.77888,576.39523 2272.77888,570.925949 L2272.77888,557.654554 C2272.77888,557.654554 2296.99664,589.674427 2348.52959,589.674427 C2433.66626,589.674427 2500.04664,524.089862 2500.04664,435.052143 C2500.04664,346.014425 2433.66626,280.383046 2349.32541,280.383046 Z M2336.82642,518.597174 C2307.91959,518.597174 2285.27786,503.773158 2273.55909,486.5773 L2273.55909,381.919751 C2285.27786,366.299919 2310.26803,349.899877 2336.82642,349.899877 C2386.80676,349.899877 2425.07613,381.139539 2425.07613,434.248525 C2425.07613,487.357512 2386.81457,518.597174 2336.82642,518.597174 Z M2159.5468,407.705735 L2159.5468,582.644723 L2084.56069,582.644723 L2084.56069,416.28806 C2084.56069,367.875946 2068.94086,348.339454 2026.79384,348.339454 C2004.15211,348.339454 1980.71456,360.058229 1965.85154,377.246285 L1965.85154,581.872314 L1890.89663,581.872314 L1890.89663,288.208566 L1950.2317,288.208566 C1956.4812,288.208566 1961.17027,293.677848 1961.17027,299.147129 L1961.17027,311.646115 C1983.03959,288.988777 2011.93082,280.390848 2040.82204,280.390848 C2073.62993,280.390848 2100.96854,289.776791 2122.83786,308.517467 C2149.38065,330.386791 2159.5468,358.497806 2159.5468,407.705735 Z M1708.89673,280.383046 C1657.36377,280.383046 1633.14601,311.638313 1633.14601,311.638313 L1633.14601,146.849875 L1558.1755,146.849875 L1558.1755,581.864512 L1621.42724,581.864512 C1627.67673,581.864512 1632.3658,576.39523 1632.3658,570.925949 L1632.3658,557.654554 C1632.3658,557.654554 1656.58356,589.674427 1708.11652,589.674427 C1793.25318,589.674427 1859.63356,524.089862 1859.63356,435.052143 C1860.41377,346.006622 1794.03339,280.383046 1708.89673,280.383046 Z M1696.39775,518.597174 C1667.50652,518.597174 1644.86479,503.773158 1633.14601,486.5773 L1633.14601,381.919751 C1644.86479,366.299919 1669.85496,349.899877 1696.39775,349.899877 C1746.39369,349.899877 1784.65525,381.139539 1784.65525,434.248525 C1784.65525,487.357512 1746.39369,518.597174 1696.39775,518.597174 Z M1493.34774,280.383046 C1515.98948,280.383046 1527.70825,284.299707 1527.70825,284.299707 L1527.70825,353.800934 C1527.70825,353.800934 1465.22893,332.711821 1426.18715,377.238483 L1426.18715,582.636921 L1351.20104,582.636921 L1351.20104,288.200764 L1414.46838,288.200764 C1420.71787,288.200764 1425.39134,293.670046 1425.39134,299.139327 L1425.39134,311.638313 C1439.46635,295.230468 1469.9258,280.383046 1493.34774,280.383046 Z M714.704624,555.306117 C710.803568,545.935779 706.894709,535.78523 702.993652,527.187301 C696.736357,513.135694 690.486864,499.848695 685.033187,487.357512 L684.252976,486.5773 C630.355976,369.420765 572.573524,250.719411 511.64682,133.57848 L509.306186,128.881608 C502.898081,116.729582 496.653228,104.492167 490.573312,92.1726639 C482.755594,78.1054534 474.953481,63.2814378 462.454495,49.2142273 C437.464326,17.9745651 401.535593,0.78650921 363.274029,0.78650921 C324.216649,0.78650921 289.07593,17.9745651 263.313352,47.6460025 C251.594577,61.6976088 242.996648,76.5372286 235.194535,90.6044391 C229.099222,102.916209 222.854469,115.153428 216.46166,127.313383 L214.113224,132.010255 C153.974534,249.151186 95.4040683,367.860342 41.5148708,485.009075 L40.7268574,486.561696 C35.265378,499.076286 29.008083,512.347681 22.7585901,526.391485 C18.8575334,534.989414 14.9564767,544.359752 11.05542,554.510302 C0.897068278,583.401528 -2.23157921,610.740133 1.68508173,638.866752 C10.2752086,697.44502 49.3169843,746.629543 103.213984,768.514471 C123.522885,777.1124 144.611998,781.013457 166.47352,781.013457 C172.723012,781.013457 180.525126,780.233246 186.782421,779.445232 C212.560604,776.324387 239.111196,767.742062 264.889379,752.902442 C296.909252,734.934175 327.368703,709.171597 361.72921,671.682441 C396.089718,709.171597 427.32938,734.934175 458.569042,752.902442 C484.355027,767.742062 510.897817,776.324387 536.668198,779.445232 C542.917691,780.241048 550.735408,781.013457 556.984901,781.013457 C578.854225,781.013457 600.715747,777.1124 620.236635,768.514471 C674.913846,746.629543 713.17541,696.664809 721.773339,638.866752 C727.976019,611.535949 724.855174,584.212948 714.704624,555.306117 Z M362.486015,595.916118 C320.30779,542.807132 292.969185,492.826793 283.606649,450.664172 C279.705592,432.695905 278.917578,417.076074 281.266015,403.016665 C282.818635,390.51768 287.515507,379.579117 293.765,370.208778 C308.60462,349.13527 333.594789,335.848271 362.493818,335.848271 C391.400648,335.848271 417.171029,348.347256 431.230437,370.208778 C437.47993,379.579117 442.161198,390.525482 443.737225,403.016665 C446.070057,417.083876 445.289845,433.476116 441.388789,450.664172 C431.987242,492.046582 404.648637,542.034723 362.486015,595.916118 Z M674.086822,632.625062 C668.625343,673.235062 641.286737,708.391385 603.025173,724.011216 C584.284496,731.81333 563.967793,734.161766 543.674496,731.81333 C524.153608,729.464894 504.617116,723.215401 484.323819,711.512231 C456.205002,695.876795 428.093987,671.682441 395.2861,635.745907 C446.826862,572.494173 478.066524,514.688315 489.785298,463.155356 C495.25458,438.937596 496.042593,417.076074 493.686355,396.75937 C490.573312,377.238483 483.535805,359.270215 472.605045,343.650384 C448.379482,308.494061 407.76168,288.200764 362.478213,288.200764 C317.194747,288.200764 276.576944,309.289877 252.366986,343.650384 C241.436226,359.270215 234.398719,377.238483 231.277874,396.75937 C228.157028,417.076074 228.929438,439.717807 235.178931,463.155356 C246.889903,514.688315 278.909776,573.266583 329.670326,636.526118 C297.650453,672.454851 268.751425,696.672611 240.632608,712.292442 C220.323707,724.011216 200.810621,730.260709 181.289733,732.593541 C160.208423,734.941977 139.891719,731.81333 121.931254,724.791428 C83.6696897,709.171597 56.3310842,674.015273 50.8696048,633.405273 C48.5289708,613.884385 50.0815914,594.363497 57.899309,572.494173 C60.232141,564.676456 64.1488019,556.874342 68.0498586,547.504004 C73.5191401,535.005018 79.7530288,521.718019 86.0103238,508.446624 L86.7983372,506.894004 C140.679733,390.51768 198.469987,271.808524 258.608677,156.228015 L260.949311,151.531143 C267.206606,139.827973 273.456099,127.328987 279.69779,115.610213 C285.947283,103.111227 292.969185,91.3924525 301.567114,81.2341009 C317.967156,62.5090286 339.828678,52.3428748 364.046438,52.3428748 C388.264198,52.3428748 410.12572,62.5090286 426.525763,81.2341009 C435.123692,91.4158589 442.145594,103.134633 448.395087,115.610213 C454.652382,127.328987 460.901874,139.827973 467.135763,151.531143 L469.484199,156.228015 C528.705845,272.288756 585.728672,389.458413 640.52213,507.674215 L640.52213,508.454426 C646.779425,520.969016 652.240904,535.01282 658.490397,547.52741 C662.391454,556.882144 666.300313,564.684258 668.640947,572.501975 C674.874835,592.78747 677.215469,612.323962 674.086822,632.625062 Z"></path>
                          </g>
                        </g>
                      </svg>
                    </div>

                    <p className="text-gray-700 mb-5">
                      {pricing !=null && pricing.case_studies_desc_2}
                    </p>

                    <a href="#!" style={{color: "#FF5A5F"}}>Read more</a>
                    
                  </div>
                </div>

              </div>
              <div className="col-12 col-md-5 col-lg-4">
                
                <div className="card card-border shadow-light-lg lift lift-lg" style={{"border-top-color": "#B81D24"}}>
                  <div className="card-body text-center">

                    <div className="img-fluid mb-5 w-50 svg-shim mx-auto" style={{color: "#B81D24"}}>
                      <svg viewBox="0 0 2761 991" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                        <g id="netflix" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g transform="translate(307.000000, 204.000000)" fill="currentColor" fill-rule="nonzero" id="Shape">
                            <path d="M1833.62885,545.008232 C1863.54373,547.904359 1893.44429,551.015014 1923.27324,554.232934 L1989.1318,391.820981 L2051.73252,569.214135 C2083.8527,573.232958 2115.95857,577.452008 2147.9642,581.856981 L2038.21426,270.784317 L2148,0.021452794 L2055.019,0.021452794 L2054.05239,1.35152602 L1994.74532,147.623827 L1942.6771,0.042905588 L1850.87036,0.042905588 L1945.64854,268.667641 L1833.63601,545.008232 L1833.62885,545.008232 Z M1764.1974,538.643903 L1764.1974,0.021452794 L1672.42646,0.021452794 L1672.42646,531.085369 C1703.03587,533.445176 1733.6596,535.976606 1764.1974,538.636752 L1764.1974,538.643903 Z M1074.82341,508.52418 C1099.59734,508.52418 1124.34263,508.710105 1149.04496,508.910331 L1149.04496,311.029759 L1259.28895,311.029759 L1259.28895,226.763184 L1149.05212,226.763184 L1149.05212,84.3881408 L1276.02209,84.3881408 L1276.02209,0.021452794 L1056.92317,0.021452794 L1056.92317,508.59569 C1062.87321,508.59569 1068.85189,508.502728 1074.82341,508.52418 Z M789.894572,513.672851 C820.46818,512.585909 851.070428,511.67059 881.715636,510.926893 L881.715636,84.4024426 L967.49358,84.4024426 L967.49358,0.042905588 L704.116628,0.042905588 L704.116628,84.4024426 L789.908892,84.4024426 L789.908892,513.672851 L789.894572,513.672851 Z M88.0333738,570.465548 L88.0333738,249.567504 L196.694983,557.50806 C230.111148,553.760972 263.577434,550.235563 297.136802,546.903229 L297.136802,0.0286037254 L209.081948,0.0286037254 L209.081948,332.425345 L91.8282244,0.0286037254 L0,0.0286037254 L0,582 L0.551327351,582 C29.6427952,577.981177 58.8345045,574.162579 88.0333738,570.465548 Z M615.625008,84.3809898 L615.625008,0.0286037254 L396.504607,0.0286037254 L396.504607,537.785792 C469.408032,531.500592 542.395578,526.229844 615.446006,521.975082 L615.446006,437.544036 C573.086881,440.003956 530.813678,442.835725 488.640715,445.989286 L488.640715,311.065513 L598.884705,311.065513 L598.884705,226.748882 L488.640715,226.748882 L488.640715,84.3809898 L615.625008,84.3809898 Z M1457.89568,433.510911 L1457.89568,0 L1365.72377,0 L1365.72377,513.980341 C1439.04315,516.669091 1512.07612,520.416179 1584.86565,525.135794 L1584.86565,440.654691 C1542.62109,437.930186 1500.30492,435.563228 1457.89568,433.50376 L1457.89568,433.510911 Z"></path>
                          </g>
                        </g>
                      </svg>
                    </div>

                    <p className="text-gray-700 mb-5">
                      {pricing !=null && pricing.case_studies_desc_3}
                    </p>

                    <a href="#!" style={{color:"#B81D24"}}>Read more</a>
                    
                  </div>
                </div>

              </div>
              <div className="col-12 col-md-5 col-lg-4">
                
                <div className="card card-border shadow-light-lg lift lift-lg" style={{"border-top-color": "#0081C9"}}>
                  <div className="card-body text-center">

                    <div className="img-fluid mb-5 w-50 svg-shim mx-auto" style={{color: "#0081C9"}}>
                      <svg viewBox="0 0 2761 991" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                        <g id="coinbase" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g transform="translate(170.000000, 233.000000)" fill="currentColor" fill-rule="nonzero" id="Shape">
                            <path d="M156.558139,526 C77.4418605,526 0,469.044585 0,340.476114 C0,211.488853 77.4418605,155.37102 156.558139,155.37102 C195.488373,155.37102 226.046511,165.421975 247.813954,179.660828 L223.953489,232.009555 C209.302326,221.539809 187.534884,214.839171 165.767442,214.839171 C118.046512,214.839171 74.511628,252.530255 74.511628,339.638535 C74.511628,426.746816 119.302326,465.275477 165.767442,465.275477 C187.534884,465.275477 209.302326,458.57484 223.953489,448.105095 L247.813954,501.710191 C225.209303,516.786624 195.488373,526 156.558139,526 Z M429.069768,526 C328.186047,526 272.511629,446.011146 272.511629,340.476114 C272.511629,234.941083 327.767442,155.37102 429.069768,155.37102 C529.953489,155.37102 585.627908,234.522293 585.627908,340.476114 C585.627908,446.011146 529.953489,526 429.069768,526 Z M429.069768,212.745223 C372.976745,212.745223 345.348837,263 345.348837,339.638535 C345.348837,416.27707 372.976745,466.950637 429.069768,466.950637 C485.162792,466.950637 512.790698,416.27707 512.790698,339.638535 C512.790698,263 485.162792,212.745223 429.069768,212.745223 Z M682.744187,97.996815 C658.883721,97.996815 639.627908,79.5700636 639.627908,56.955414 C639.627908,34.3407643 658.883721,15.9140127 682.744187,15.9140127 C706.604652,15.9140127 725.860466,34.3407643 725.860466,56.955414 C725.860466,79.5700636 706.186047,97.996815 682.744187,97.996815 Z M646.325582,162.490446 L719.162791,162.490446 L719.162791,518.461783 L646.325582,518.461783 L646.325582,162.490446 Z M1004.65117,518.461783 L1004.65117,281.007961 C1004.65117,239.54777 979.534885,213.582803 930.139536,213.582803 C903.767443,213.582803 879.488373,218.18949 864.83721,224.052548 L864.83721,518.880573 L792.837211,518.880573 L792.837211,180.498407 C828.418606,165.840765 874.046513,155.37102 929.720931,155.37102 C1029.34884,155.37102 1077.48837,198.925159 1077.48837,274.307324 L1077.48837,518.880573 L1004.65117,518.880573 L1004.65117,518.461783 Z M1268.7907,526 C1222.74419,526 1177.11628,514.692675 1149.06977,500.872611 L1149.06977,0 L1221.06977,0 L1221.06977,171.703822 C1238.23256,163.746815 1265.86047,157.046178 1290.55814,157.046178 C1382.23256,157.046178 1444.60465,223.214968 1444.60465,332.100319 C1444.60465,466.531847 1375.11628,526 1268.7907,526 Z M1278,213.582803 C1258.32559,213.582803 1234.88373,218.18949 1221.06977,225.308917 L1221.06977,458.99363 C1231.53489,463.600318 1252.04651,468.207007 1272.55814,468.207007 C1329.90697,468.207007 1372.18605,428.421974 1372.18605,337.544586 C1372.60465,259.649682 1335.76744,213.582803 1278,213.582803 Z M1640.51163,526 C1538.37209,526 1486.46511,484.539809 1486.46511,414.183121 C1486.46511,314.929937 1591.95349,297.340765 1699.53489,291.477707 L1699.53489,268.863057 C1699.53489,224.052548 1669.81395,208.138535 1624.18605,208.138535 C1590.69768,208.138535 1549.67442,218.60828 1525.81395,229.915605 L1507.39535,180.498407 C1535.86047,167.934713 1584,155.37102 1631.72093,155.37102 C1716.69767,155.37102 1768.60465,188.455414 1768.60465,276.401274 L1768.60465,500.872611 C1743.06977,514.692675 1690.74419,526 1640.51163,526 Z M1699.95349,339.638535 C1627.11628,343.407643 1554.69768,349.689491 1554.69768,412.926752 C1554.69768,450.617835 1583.58139,473.651274 1638.4186,473.651274 C1661.44187,473.651274 1688.65117,469.882165 1699.95349,464.437898 L1699.95349,339.638535 Z M1931.02326,526 C1889.5814,526 1846.04651,514.692675 1820.09303,500.872611 L1844.3721,445.592356 C1862.7907,456.899682 1901.72093,468.625796 1928.93023,468.625796 C1967.86047,468.625796 1993.81396,449.361465 1993.81396,419.627389 C1993.81396,387.380573 1966.60466,374.816878 1930.60466,361.415605 C1882.88372,343.407643 1829.72094,321.630573 1829.72094,255.042994 C1829.72094,196.412421 1875.34884,155.37102 1954.46512,155.37102 C1997.5814,155.37102 2033.16279,165.840765 2058.27907,180.498407 L2035.67442,230.753185 C2019.76744,220.702229 1987.95349,209.813694 1962.41861,209.813694 C1924.74419,209.813694 1903.81396,229.496815 1903.81396,255.461784 C1903.81396,287.708599 1930.18605,299.015923 1965.34884,312.417197 C2014.74419,330.843949 2069.5814,351.364649 2069.5814,420.883758 C2069.16279,484.121019 2020.18605,526 1931.02326,526 Z M2420.37209,338.800956 L2183.86047,371.88535 C2190.97675,435.960191 2232.83721,468.207007 2292.69768,468.207007 C2328.27907,468.207007 2366.7907,459.41242 2391.06977,446.429936 L2412.00001,500.453821 C2384.3721,515.111465 2336.65117,525.58121 2287.67442,525.58121 C2175.48837,525.58121 2112.69768,453.549363 2112.69768,340.057324 C2112.69768,231.171975 2173.39535,154.95223 2273.02326,154.95223 C2365.53488,154.95223 2420.37209,215.676751 2420.37209,311.579618 C2421.2093,320.374204 2421.2093,329.587579 2420.37209,338.800956 Z M2272.60465,208.138535 C2217.34884,208.138535 2180.93024,250.436305 2179.67442,324.562102 L2352.13954,300.691083 C2351.30233,238.710191 2319.90698,208.138535 2272.60465,208.138535 Z"></path>
                          </g>
                        </g>
                      </svg>
                    </div>


                    <p className="text-gray-700 mb-5">
                      {pricing !=null && pricing.case_studies_desc_4}
                    </p>

                    <a href="#!" style={{color: "#0081C9"}}>Read more</a>
                    
                  </div>
                </div>

              </div>
              <div className="col-12 col-md-5 col-lg-4">
                
                <div className="card card-border shadow-light-lg lift lift-lg" style={{"border-top-color": "#6772E5"}}>
                  <div className="card-body text-center">

                    <div className="img-fluid mb-5 w-50 svg-shim mx-auto" style={{color: "#6772E5"}}>
                      <svg viewBox="0 0 2761 991" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                        <g id="stripe" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g transform="translate(550.000000, 150.000000)" fill="currentColor" fill-rule="nonzero" id="Shape">
                            <path d="M116.751407,270.380196 C116.751407,252.418328 131.515491,245.506928 155.973067,245.506928 C191.035739,245.506928 235.327991,256.103977 270.393907,274.988876 L270.393907,166.741579 C232.100071,151.542328 194.266903,145.55396 155.973067,145.55396 C62.3082393,145.55396 0.0207393105,194.380703 0.0207393105,275.911907 C0.0207393105,403.037625 175.347075,382.773037 175.347075,437.588149 C175.347075,458.77253 156.894403,465.68393 131.054823,465.68393 C92.7609874,465.68393 43.8523233,450.021544 5.09457525,428.833925 L5.09457525,538.46091 C48.0048233,556.885913 91.3757393,564.713867 131.054823,564.713867 C227.022991,564.713867 293.002323,517.273291 293.002323,434.822294 C292.541655,297.559423 116.751407,321.969556 116.751407,270.380196 Z M428.649575,53.4321843 L316.071407,77.3824209 L315.610739,446.335896 C315.610739,514.510674 366.825987,564.713867 435.111903,564.713867 C472.945071,564.713867 500.627323,557.805706 515.852075,549.514616 L515.852075,456.009913 C501.091235,461.998282 428.188907,483.185902 428.188907,415.014363 L428.188907,251.495297 L515.852075,251.495297 L515.852075,153.385153 L428.188907,153.385153 L428.649575,53.4321843 Z M659.346903,187.469303 L651.963239,153.385153 L552.303239,153.385153 L552.303239,556.422778 L667.651903,556.422778 L667.651903,283.279965 C694.870243,247.812887 741.011655,254.261152 755.315071,259.32649 L755.315071,153.385153 C740.550987,147.85668 686.568487,137.722767 659.346903,187.469303 Z M783.457991,153.385153 L899.267323,153.385153 L899.267323,556.422778 L783.457991,556.422778 L783.457991,153.385153 Z M783.457991,118.377971 L899.267323,93.5047032 L899.267323,0 L783.457991,24.4133716 L783.457991,118.374732 L783.457991,118.377971 Z M1140.11232,145.55396 C1094.89549,145.55396 1065.82799,166.741579 1049.6819,181.484173 L1043.68024,152.925256 L942.177571,152.925256 L942.177571,690 L1057.52299,665.589867 L1057.9869,535.235158 C1074.5969,547.211896 1099.04799,564.253971 1139.65166,564.253971 C1222.24099,564.253971 1297.44666,497.925256 1297.44666,351.9114 C1296.98599,218.33094 1220.85574,145.55396 1140.11232,145.55396 Z M1112.43007,462.918075 C1085.20849,462.918075 1069.05591,453.247296 1057.9869,441.270559 L1057.52299,270.380196 C1069.51982,257.023769 1086.12982,247.812887 1112.43007,247.812887 C1154.41574,247.812887 1183.48324,294.793568 1183.48324,355.133913 C1183.48324,416.857187 1154.87641,462.918075 1112.43007,462.918075 Z M1661.02074,356.516841 C1661.02074,238.598766 1603.80708,145.55396 1494.46007,145.55396 C1384.64591,145.55396 1318.20591,238.602005 1318.20591,355.597049 C1318.20591,494.239608 1396.64599,564.253971 1509.22091,564.253971 C1564.12799,564.253971 1605.65299,551.817337 1637.02708,534.315366 L1637.02708,442.190351 C1605.65624,457.852737 1569.66574,467.526755 1523.98824,467.526755 C1479.23208,467.526755 1439.55299,451.864369 1434.47916,397.512392 L1660.0994,397.512392 C1660.0994,391.520784 1661.02074,367.570547 1661.02074,356.516841 Z M1433.09391,312.758674 C1433.09391,260.709418 1464.9319,239.058663 1493.9994,239.058663 C1522.14232,239.058663 1552.1344,260.709418 1552.1344,312.758674 L1433.09391,312.758674 Z"></path>
                          </g>
                        </g>
                      </svg>
                    </div>


                    <p className="text-gray-700 mb-5">
                      {pricing !=null && pricing.case_studies_desc_5}
                    </p>

                    <a href="#!" style={{color: "#6772E5"}}>Read more</a>
                    
                  </div>
                </div>

              </div>
              <div className="col-12 col-md-5 col-lg-4">
                
                <div className="card card-border shadow-light-lg lift lift-lg" style={{"border-top-color": "#CB2027"}}>
                  <div className="card-body text-center">

                    <div className="img-fluid mb-5 w-50 svg-shim mx-auto" style={{color: "#CB2027"}}>
                      <svg viewBox="0 0 2761 991" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                        <g id="pinterest" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g transform="translate(131.000000, 177.000000)" fill="currentColor" fill-rule="nonzero" id="Shape">
                            <path d="M574.01881,222.949777 C601.146101,222.949777 627.171838,200.365894 631.699105,172.504233 C637.049513,145.385011 618.662027,122.801128 591.554911,122.801128 C564.439724,122.801128 538.409953,145.385011 533.81409,172.504233 C528.524208,200.365894 546.157149,222.949777 574.01881,222.949777 Z M2414.87365,303.556931 L2475.55598,303.556931 C2483.87211,303.556931 2488.74236,300.179638 2490.61459,292.420337 C2493.51987,280.401339 2496.50718,268.402321 2499.57633,256.42412 C2501.3719,249.439539 2497.30462,244.145621 2489.56146,244.145621 L2429.68209,244.145621 C2433.9955,226.984775 2450.78916,171.269523 2450.78916,134.946472 C2450.78916,62.4052784 2389.19089,0.702089645 2301.7888,0.702089645 C2203.08064,0.702089645 2138.86365,66.9446511 2138.86365,160.157139 C2138.86365,187.344955 2149.00763,219.035829 2161.58069,238.694339 C2156.16991,238.385195 2150.75135,238.231801 2145.33175,238.234349 C2070.32921,238.234349 2023.08745,278.919234 2023.08745,338.120724 C2023.08745,393.682646 2066.88735,415.27392 2108.12503,429.642548 C2144.75474,442.409281 2178.48733,448.348798 2178.48733,476.965004 C2178.48733,496.260364 2159.92634,507.582568 2123.60329,507.582568 C2080.50547,507.582568 2056.82003,487.286528 2050.79982,479.587752 C2054.88324,476.379929 2060.95591,468.741678 2060.95591,456.015294 C2060.95591,438.212883 2048.45145,423.682856 2025.226,423.682856 C2005.57556,423.682856 1988.96347,439.709868 1984.79129,460.792732 C1953.22953,486.612684 1918.78275,503.34582 1869.927,503.34582 C1821.82175,503.34582 1796.85319,478.324798 1796.85319,425.083 C1808.13101,428.516783 1837.49772,432.640551 1856.90606,432.640551 C1938.36056,432.640551 1993.87407,395.63155 1993.87407,321.516707 C1993.87407,281.663032 1958.8866,239.807999 1889.67024,239.807999 L1889.51288,239.807999 C1798.47525,239.807999 1747.48095,297.476189 1725.21583,360.906357 C1718.97784,359.402159 1712.7288,357.94414 1706.46923,356.53242 C1711.44842,342.462382 1715.02343,326.156955 1715.02343,308.080164 C1715.02343,276.75244 1695.62316,239.807999 1643.70887,239.807999 C1607.54722,239.807999 1573.2457,263.493437 1549.4715,298.993349 C1555.3868,275.836495 1559.30882,260.414733 1559.56303,259.381774 C1561.11247,253.325242 1558.59059,246.578725 1549.14466,246.578725 L1495.86251,246.578725 C1488.26865,246.578725 1482.91017,249.261999 1480.75145,257.908999 C1479.30288,263.675012 1460.9961,335.506045 1443.17351,405.4487 C1431.94815,449.058958 1373.87645,503.34582 1300.88738,503.34582 C1252.77406,503.34582 1227.82567,476.678519 1227.82567,423.416546 C1240.41486,428.428013 1268.46617,432.636516 1287.86644,432.636516 C1372.63368,432.636516 1424.83444,395.627515 1424.83444,321.512672 C1424.83444,281.658997 1389.85101,239.803964 1320.62659,239.803964 L1320.47729,239.803964 C1217.96413,239.803964 1155.16746,319.426578 1144.52717,409.705623 C1140.10078,447.235139 1108.42604,498.770133 1074.08821,498.770133 C1057.35911,498.770133 1048.03019,488.262998 1048.03019,470.424272 C1048.03019,455.01865 1058.87627,417.347909 1070.76337,370.138433 C1074.74592,354.345451 1080.79034,330.252478 1087.49247,303.556931 L1143.22387,303.556931 C1151.51982,303.556931 1156.38603,300.179638 1158.27037,292.420337 C1160.93751,281.247428 1165.83196,261.754353 1167.22,256.42412 C1169.01557,249.439539 1164.97251,244.145621 1157.20513,244.145621 L1102.40179,244.145621 C1102.40179,244.145621 1127.63263,143.472422 1128.23385,140.885989 C1130.66292,130.649199 1122.09662,124.741962 1113.13489,126.626306 C1113.13489,126.626306 1070.77548,134.918227 1062.91934,136.556436 C1055.02285,138.154295 1048.89368,142.491918 1046.04094,153.874647 L1023.60635,244.145621 L979.600664,244.145621 C971.304709,244.145621 966.426396,247.530985 964.566262,255.274146 C961.642725,267.290329 958.659479,279.291906 955.616636,291.278433 C953.796852,298.263014 957.860095,303.556931 965.619396,303.556931 L1008.7737,303.556931 C1008.46704,304.791641 993.186502,362.919821 980.827304,414.97533 C975.008837,440.008457 955.523832,498.584523 923.615068,498.584523 C904.553737,498.584523 896.499881,488.969123 896.499881,468.346248 C896.499881,435.868549 928.46917,354.567376 928.46917,317.675389 C928.46917,268.395959 902.031864,239.844314 847.870086,239.844314 C813.729968,239.844314 778.330931,261.887507 763.328809,281.235323 C763.328809,281.235323 767.880286,265.397956 769.437796,259.309144 C771.100215,252.877357 767.650292,246.55855 759.205041,246.55855 L706.249728,246.55855 C694.979978,246.55855 691.86496,252.582802 690.210611,259.208269 C689.548871,261.867332 670.467366,336.797245 652.148475,408.729153 C639.619806,457.984373 609.175747,499.141352 576.625418,499.141352 C559.888247,499.141352 552.435605,488.638253 552.435605,470.799527 C552.435605,455.385835 562.39398,417.351944 574.277049,370.146503 C588.734447,312.676027 601.489076,265.349536 602.852905,259.821589 C604.632339,252.736132 601.464866,246.562585 592.333665,246.562585 L539.059587,246.562585 C529.407872,246.562585 525.961984,251.626508 523.928345,258.663544 C523.928345,258.663544 508.934292,315.42386 493.056576,378.611928 C481.524551,424.46968 468.790098,471.178817 468.790098,493.12517 C468.790098,532.288861 486.374619,561.808906 534.717929,561.808906 C572.029556,561.808906 601.557671,542.8888 624.105239,518.779687 C620.792506,531.828871 618.678167,540.088512 618.464312,540.931826 C616.519443,548.392538 618.875882,554.985724 627.664107,554.985724 L682.180965,554.985724 C691.67128,554.985724 695.318918,551.168616 697.300102,542.892835 C699.208656,534.996344 739.925821,374.84324 739.925821,374.84324 C750.68716,331.822092 777.306042,303.335007 814.754858,303.335007 C832.512884,303.335007 847.882191,315.092991 846.102757,337.943184 C844.125608,363.081221 813.810668,453.388511 813.810668,493.024296 C813.810668,523.024505 824.935158,561.837151 881.408989,561.837151 C919.90287,561.837151 948.24066,543.38107 968.847395,519.562477 C976.392841,544.841739 996.382221,561.837151 1033.04825,561.837151 C1093.98479,561.837151 1130.71537,525.695674 1152.29454,489.392797 C1170.20186,531.570631 1212.14163,561.816976 1273.64307,561.816976 C1336.32676,561.816976 1384.83551,535.391774 1419.21369,499.468187 L1408.4927,541.520936 C1406.5438,549.094627 1409.84039,555.050284 1418.73353,555.050284 L1472.68952,555.050284 C1480.0776,555.050284 1485.3352,551.293701 1487.25183,543.5344 C1488.20005,539.725362 1495.99567,509.596032 1507.00718,466.784704 C1528.06583,384.86214 1561.91139,299.868943 1612.76851,299.868943 C1630.70407,299.868943 1638.05988,309.895913 1638.05988,325.69293 C1638.05988,333.141536 1635.89712,339.577358 1634.02891,343.027281 C1609.37911,338.128794 1589.5471,350.298348 1589.5471,376.618639 C1589.5471,393.767381 1607.59161,409.354578 1631.94685,409.354578 C1650.55626,409.354578 1665.94171,404.790995 1678.21214,396.531354 C1690.28966,399.022486 1702.3402,401.642695 1714.36169,404.39153 C1712.51262,416.270627 1711.56706,428.272844 1711.53315,440.294942 C1711.53315,506.049269 1758.48439,561.812941 1842.64234,561.812941 C1908.59035,561.812941 1953.84689,537.687688 1992.91374,506.759429 C2011.69262,537.485938 2059.10788,562.317315 2121.31544,562.317315 C2206.57495,562.317315 2254.93036,517.984793 2254.93036,459.384518 C2254.93036,406.344469 2211.3887,386.823149 2166.48724,370.570177 C2129.98665,357.383804 2099.54259,350.213613 2099.54259,324.417871 C2099.54259,303.274482 2116.18696,293.602591 2144.71439,293.602591 C2163.22293,293.602591 2177.11946,297.589169 2184.53982,299.671228 C2191.89966,318.090994 2207.12774,338.487909 2233.12524,338.487909 C2255.12404,338.487909 2265.00172,321.088998 2265.00172,305.066021 C2265.00172,259.454404 2189.02271,254.672931 2189.02271,156.852476 C2189.02271,96.0248814 2223.44124,45.8456468 2294.72351,45.8456468 C2344.25311,45.8456468 2376.59766,77.2540709 2376.59766,127.94575 C2376.59766,169.740259 2351.2498,244.141586 2351.2498,244.141586 L2308.16409,244.141586 C2299.88428,244.141586 2294.99789,247.52695 2293.12565,255.270111 C2290.20955,267.289472 2287.2209,279.29112 2284.15989,291.274398 C2282.34818,298.258979 2286.41142,303.552896 2294.17475,303.552896 L2336.24364,303.552896 C2336.24364,303.552896 2292.75443,463.944065 2292.75443,493.113065 C2292.75443,532.276756 2314.82587,561.788731 2363.18936,561.788731 C2431.59468,561.788731 2474.34145,517.335158 2492.92665,452.694491 C2494.37118,447.695128 2491.53861,443.623816 2486.47469,443.623816 L2460.37632,443.623816 C2455.16714,443.623816 2452.14492,446.593574 2450.82951,451.685741 C2444.93438,474.632775 2430.32366,498.774168 2401.55412,498.774168 C2384.82502,498.774168 2375.50014,488.267033 2375.50014,470.432342 C2375.50014,455.022685 2385.70061,418.945768 2398.24946,370.146503 C2404.22932,346.908949 2414.87365,303.556931 2414.87365,303.556931 Z M1875.49933,300.817168 C1899.68914,300.817168 1911.18082,316.90874 1911.18082,336.087085 C1911.18082,368.524434 1886.02261,388.303994 1846.67331,388.303994 C1832.59116,388.303994 1812.90441,384.96705 1801.27958,381.093452 C1806.16596,351.262712 1827.75724,300.817168 1875.49933,300.817168 Z M1306.46374,300.817168 C1332.9414,300.817168 1342.13313,316.90874 1342.13313,336.087085 C1342.13313,368.524434 1316.98702,388.303994 1277.64175,388.303994 C1263.55558,388.303994 1243.86882,384.96705 1232.24803,381.093452 C1237.10616,351.262712 1256.25223,300.817168 1306.46374,300.817168 Z M259.640014,0 C87.030871,0 0,123.753387 0,226.952495 C0,289.438474 23.657193,345.02864 74.3972924,365.740285 C82.7174581,369.145823 90.1700994,365.8573 92.5830282,356.6454 C94.2615873,350.270103 98.2320253,334.190636 100.003389,327.488504 C102.440528,318.377479 101.492304,315.181761 94.778067,307.240885 C80.1471644,289.983198 70.7980742,267.641415 70.7980742,235.994926 C70.7980742,144.182582 139.489879,61.9896736 249.669534,61.9896736 C347.235784,61.9896736 400.832662,121.602733 400.832662,201.217278 C400.832662,305.96986 354.478606,394.3807 285.653645,394.3807 C247.648,394.3807 219.197229,362.948066 228.316324,324.397696 C239.235029,278.374509 260.386488,228.703684 260.386488,195.483546 C260.386488,165.745611 244.424036,140.942479 211.389508,140.942479 C172.536513,140.942479 141.325803,181.135093 141.325803,234.978106 C141.325803,269.271554 152.914318,292.464722 152.914318,292.464722 C152.914318,292.464722 113.153448,460.929922 106.185006,490.433827 C92.3046133,549.191467 104.094877,621.220216 105.091522,628.495317 C105.680632,632.804695 111.220684,633.829584 113.730452,630.577376 C117.313531,625.900813 163.582852,568.773312 179.319344,511.686161 C183.769947,495.521959 204.872986,411.828032 204.872986,411.828032 C217.49446,435.904864 254.386446,457.112814 293.618731,457.112814 C410.403677,457.112814 489.642967,350.641323 489.642967,208.125195 C489.642967,100.362504 398.367278,0 259.640014,0 Z"></path>
                          </g>
                        </g>
                      </svg>
                    </div>


                    <p className="text-gray-700 mb-5">
                      {pricing !=null && pricing.case_studies_desc_6}
                    </p>

                    <a href="#!" style={{color: "#CB2027"}}>Read more</a>
                    
                  </div>
                </div>

              </div>
              <div className="col-12 col-md-5 col-lg-4">
                
                <div className="card card-border shadow-light-lg lift lift-lg" style={{"border-top-color": "#DA5988"}}>
                  <div className="card-body text-center">

                    <div className="img-fluid mb-5 w-50 svg-shim mx-auto" style={{color: "#DA5988"}}>
                      <svg viewBox="0 0 2761 991" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                        <g id="dribbble" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g transform="translate(275.000000, 226.000000)" fill="currentColor" fill-rule="nonzero" id="Shape">
                            <path d="M676.211313,216.865556 C701.505429,216.865556 722.00834,196.386203 722.00834,171.127473 C722.00834,145.864434 701.505429,125.389391 676.211313,125.389391 C650.917196,125.389391 630.414286,145.864434 630.414286,171.127473 C630.414286,196.386203 650.917196,216.865556 676.211313,216.865556 Z M2187.64269,373.136978 C2180.67601,368.24555 2175.29778,367.43534 2170.83462,376.93376 C2093.91633,543.268163 1964.29477,460.264727 1977.1706,467.569547 C2005.92216,454.43811 2081.54121,393.887837 2070.11137,310.281053 C2063.1706,259.186103 2019.24689,236.521769 1972.62543,244.636799 C1891.24398,258.802546 1861.30542,346.443142 1876.54663,424.033685 C1879.21417,437.359054 1883.97948,448.348606 1888.74047,459.114057 C1796.77521,533.782672 1760.25413,392.271726 1756.11038,375.360746 C1755.94636,374.455724 1827.11951,315.224196 1846.91453,174.079569 C1867.66348,26.1515864 1820.39888,-0.78358876 1772.06812,0.0567887056 C1682.63227,1.61256442 1658.46473,188.180671 1690.93271,343.672051 C1688.21338,344.37883 1675.55769,351.377666 1655.22311,352.162018 C1640.59051,306.191216 1578.06743,265.896194 1561.70395,281.423783 C1520.74992,320.266461 1571.63599,396.206416 1607.44054,402.162322 C1585.93191,534.429116 1451.41987,501.671634 1476.45932,335.962126 C1520.26217,254.747186 1553.57616,133.987099 1547.63248,61.0854312 C1545.52607,35.275069 1526.41304,0.694613654 1483.18859,2.40984561 C1400.05037,5.69378217 1391.01182,192.313605 1400.75826,324.765713 C1400.27482,321.503324 1395.64764,340.857864 1361.57828,350.481263 C1353.51955,305.820588 1281.49607,260.991837 1264.54124,282.544287 C1232.80274,322.882405 1287.80665,394.805787 1313.86045,399.822194 C1292.35182,532.084679 1157.8441,499.327196 1182.88355,333.617689 C1226.68639,252.407058 1259.99607,131.646971 1254.05238,58.7453032 C1251.94598,32.9306313 1232.83727,-1.64982399 1189.6085,0.0610983336 C1106.47028,3.34934452 1097.43173,189.969167 1107.17817,322.421275 C1106.69041,319.107171 1101.95532,339.099535 1066.49608,348.563479 C1065.30907,290.62053 993.022281,264.051673 975.657395,282.539977 C944.708792,315.495703 982.744927,383.113766 1017.93224,399.822194 C996.423606,532.084679 861.915882,499.327196 886.955331,333.617689 C930.75818,252.407058 964.072172,131.646971 958.124169,58.7453032 C956.022082,32.9306313 936.909053,-1.64982399 893.680286,0.0610983336 C810.54638,3.34934452 803.855957,199.351227 813.602393,331.799026 C786.219138,448.939025 694.387682,595.225039 706.318218,302.183262 C707.496596,281.626336 708.782883,273.8216 698.518479,266.124604 C690.826651,260.14284 673.336589,263.021672 663.775758,263.258701 C652.156004,263.724141 649.242432,270.511805 646.674173,280.77303 C640.69164,307.268623 639.616856,332.954006 638.762208,367.999901 C638.201076,384.393726 636.884573,392.043316 630.561044,414.397356 C624.246148,436.747087 588.217139,477.598051 568.491181,470.767291 C541.125192,461.372302 550.103308,384.238579 555.231194,331.243084 C559.504432,289.362118 545.821437,270.554902 510.763619,263.715522 C490.239127,259.444681 477.769041,260.099744 456.394218,253.372415 C436.180506,247.011404 431.609437,208.836719 388.497212,221.558741 C364.916707,228.523099 380.075911,278.407044 374.408475,315.379343 C346.5461,497.249955 288.572502,502.244814 261.677001,413.897439 C382.808194,117.692395 296.717553,0.918714311 246.323558,0.918714311 C193.836108,0.918714311 133.838119,37.0161587 159.244462,267.977744 C146.890919,264.379205 143.092485,262.439872 129.569197,262.439872 C53.0868673,262.439872 0.979260689,324.170984 0.979260689,400.322111 C0.979260689,476.473238 53.0911837,538.20866 129.573513,538.20866 C174.72308,538.20866 206.422737,517.707759 230.430566,485.993207 C246.094789,508.390344 265.16897,538.55343 300.049816,537.195897 C404.018994,533.153466 434.255391,320.219055 437.825056,308.34172 C448.939791,310.052642 459.454547,313.289173 469.718951,315.000095 C486.820536,317.564324 488.06366,324.321821 487.675184,341.495689 C483.142962,486.316429 509.908971,537.023512 570.623484,537.023512 C604.451127,537.023512 634.601196,503.839376 655.371723,480.110565 C670.884873,512.079385 695.604908,536.045227 728.767825,537.019203 C809.126284,539.01456 839.893598,411.134968 837.087937,427.964065 C834.886572,441.168766 863.159006,536.299495 945.887169,536.644265 C1048.36287,537.075228 1067.41116,424.559459 1069.68158,405.713456 C1069.96647,401.964079 1070.09164,402.351946 1069.68158,405.713456 L1069.60389,406.855507 C1102.13661,400.813409 1118.9231,383.398202 1118.9231,383.398202 C1118.9231,383.398202 1145.04596,538.393974 1241.81107,536.648575 C1342.29691,534.829912 1361.24591,433.12269 1363.73216,413.289782 C1364.06021,408.583668 1364.25445,409.135301 1363.73216,413.289782 C1363.71857,413.483672 1363.70562,413.677606 1363.69331,413.871582 C1402.33806,399.835123 1412.50319,385.746949 1412.50319,385.746949 C1412.50319,385.746949 1433.26508,537.661337 1535.39116,538.988703 C1626.39818,540.17816 1660.12655,447.128981 1660.3251,408.182873 C1675.67423,408.346639 1704.06752,399.089558 1703.4028,398.563783 C1703.4028,398.563783 1736.73837,531.386519 1829.83021,538.20866 C1873.5381,541.410714 1906.32549,513.652399 1925.01551,500.990712 C1968.93922,536.506357 2115.20051,581.869502 2207.55425,425.537745 C2220.58978,403.101821 2192.56338,376.597609 2187.64269,373.136978 Z M125.882989,486.639651 C81.2600241,486.639651 52.6465943,445.443917 52.6465943,401.024581 C52.6465943,356.609554 78.9119013,315.41382 123.534867,315.41382 C143.614769,315.41382 154.785618,317.620349 170.423943,331.199987 C173.259819,342.357614 181.29696,368.094713 185.20762,379.782424 C190.447733,395.422064 196.680617,408.734505 202.965299,423.223475 C193.987182,460.385397 164.553636,486.639651 125.882989,486.639651 Z M234.621792,332.505805 C232.765739,329.553709 233.154215,331.368063 231.078026,328.579733 C222.898444,306.363601 207.134943,256.777021 205.309105,200.454492 C203.245865,136.740951 213.88148,62.0594072 245.235825,62.0594072 C266.481156,62.0594072 289.060256,213.413544 234.617476,332.505805 L234.621792,332.505805 Z M862.921604,266.120294 C857.888679,228.311928 857.625378,59.7623754 898.152078,64.4038448 C920.528307,73.4540637 883.964064,232.500886 862.921604,266.120294 Z M1158.84982,266.120294 C1153.81689,228.311928 1153.55359,59.7623754 1194.08029,64.4038448 C1216.45652,73.4540637 1179.89228,232.500886 1158.84982,266.120294 Z M1452.42991,268.469042 C1447.39267,230.656365 1447.13368,62.1068131 1487.65607,66.7482825 C1510.0323,75.7985013 1473.46805,234.849633 1452.42991,268.469042 Z M1776.53991,54.5391063 C1813.59191,50.7035373 1812.0639,212.254254 1737.69229,314.245911 C1728.10125,277.381352 1713.39527,67.1964838 1776.53991,54.5347966 L1776.53991,54.5391063 Z M1932.2757,402.162322 C1920.37538,342.142133 1951.12543,302.721965 1982.82509,298.399408 C1993.90529,296.632461 2009.96231,303.799372 2013.16508,317.198006 C2018.43109,342.448116 2012.40108,379.903094 1941.45237,427.425362 C1941.55597,427.830467 1934.93029,415.530788 1932.28002,402.162322 L1932.2757,402.162322 Z"></path>
                          </g>
                        </g>
                      </svg>
                    </div>

                    <p className="text-gray-700 mb-5">
                     {pricing !=null && pricing.case_studies_desc_7}
                    </p>

                    <a href="#!" style={{color:"#DA5988"}}>Read more</a>
                    
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div> 
      </div> 
    </section>

    
    <section className="pt-8 pt-md-11">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            
            <span className="badge badge-pill badge-success-soft mb-3">
              <span className="h6 text-uppercase">{pricing !=null && pricing.coming_soon}</span>
            </span>

            <h2 className="font-weight-bold">
              {pricing !=null && pricing.platforms_title}
            </h2>

            <p className="font-size-lg text-gray-700 mb-9">
            {pricing !=null && pricing.platforms_desc}
            </p>

          </div>
        </div> 
        <div className="row">
        <div className="col-12 col-md-6 col-lg-4 text-center" data-aos="fade-up">
              
              <div className="icon icon-lg mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 48 48" space="preserve"><path d="M39 39.079H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v27.079a3 3 0 0 1-3 3z" fill="#FF8F00"/><path d="M39 42H9a3 3 0 0 1-3-3V14a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v25a3 3 0 0 1-3 3z" fill="#DD2C00"/><circle cx="15" cy="17" r="2" fill="#B71C1C"/><circle cx="33" cy="17" r="2" fill="#B71C1C"/><path d="M33 17c0 4.971-4.029 9-9 9s-9-4.029-9-9" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10"/></svg>
              </div>
  
              <h3 className="font-weight-bold">
                {pricing !=null && pricing.platforms_title_1}
              </h3>
  
              <p className="text-muted mb-8">
                {pricing !=null && pricing.platforms_desc_1}
              </p>
  
            </div>
         
          <div className="col-12 col-md-6 col-lg-4 text-center" data-aos="fade-up" >

            <div className="icon icon-lg mb-4">
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 512 512" space="preserve">
            <path style={{fill:'#5C5560'}} d="M512,256c0,46.049-12.152,89.255-33.447,126.589c-1.567,2.759-3.323,5.705-5.256,8.808
              c-27.136,43.468-66.957,78.211-114.291,99.035c-7.795,3.427-15.799,6.489-23.98,9.132c-4.827,1.567-9.718,2.999-14.66,4.274
              c-4.378,1.139-8.808,2.163-13.27,3.062c-16.51,3.345-33.594,5.1-51.096,5.1c-50.761,0-98.053-14.764-137.843-40.249
              c-26.049-16.666-48.87-37.93-67.344-62.631C18.902,366.414,0,313.407,0,256C0,119.986,106.078,8.746,240.013,0.491
              c3.323-0.209,6.656-0.345,10.01-0.418h0.042C252.04,0.021,254.015,0,256,0C397.385,0,512,114.615,512,256z"/>
            <path style={{fill:'#3E8E33'}} d="M478.553,382.589c-1.567,2.759-3.323,5.705-5.256,8.808c-27.136,43.468-66.957,78.211-114.291,99.035
              c-7.795,3.427-15.799,6.489-23.98,9.132c-4.827,1.567-9.718,2.999-14.66,4.274l32.172-444.771l39.999,34.994l42.998,1.003
              L478.553,382.589z"/>
            <path style={{fill:'#7FC029'}} d="M334.503,64.92c-10.909-28.421-28.212-53.77-56.592-49.246c-6.51-8.631-15.475-14.858-27.847-15.6
              h-0.042C249.208,0.021,248.383,0,247.536,0c-2.529,0-5.036,0.167-7.523,0.491c-44.116,5.778-80.238,61.67-93.8,125.555l-61.67,20.02
              l-33.73,263.053c18.474,24.701,41.294,45.965,67.344,62.631l188.938,35.15c9.509-1.923,18.829-4.378,27.93-7.335l17.512-440.498
              L334.503,64.92z M165.763,119.704c0,0,8.777-27.638,20.773-52.642c12.006-24.994,51.001-61.001,73.007-47.501
              c0.658,0.408,1.296,0.846,1.902,1.317c-25.266,11.661-45.108,38.922-55.223,85.692L165.763,119.704z M276.741,83.675l-49.622,16.102
              c0,0,9.467-51.493,44.534-64.136C279.406,55.557,276.741,83.675,276.741,83.675z M295.037,77.73c0,0,0-23.291-7.795-44.377
              c17.983,1.881,27.209,21.138,31.754,36.603L295.037,77.73z"/>
            <path style={{fill:'#FDFEFD'}} d="M124.166,361.18c8.989,6.496,17.982,13.095,28.394,17.355c4.479,1.833,9.049,3.257,13.847,4.031
              c8.615,1.39,16.428,0.24,21.909-7.294c5.745-7.896,4.726-16.319,0.905-24.618c-2.627-5.703-7.027-10.088-11.685-14.164
              c-6.017-5.263-12.098-10.453-18.208-15.608c-19.831-16.728-25.971-38.429-22.478-63.301c6.09-43.363,38.335-74.347,81.947-79.659
              c18.748-2.284,37.14-2.101,55.257,4.017c4.067,1.373,4.472,3.029,3.173,6.77c-5.674,16.335-11.169,32.735-16.485,49.19
              c-1.073,3.322-1.957,3.871-5.355,2.478c-13.872-5.686-28.219-9.078-43.355-6.541c-10.524,1.764-18.977,6.377-21.938,17.566
              c-2.084,7.876,0.677,14.423,6.278,19.929c7.749,7.619,16.779,13.654,25.338,20.269c10.342,7.995,19.913,16.743,26.603,28.148
              c11.917,20.317,12.047,42.002,5.861,63.793c-10.463,36.858-42.119,56.749-80.196,51.942c-22.131-2.794-41.667-10.842-58.611-25.37
              c-3.81-3.266-5.243-6.207-3.364-11.47c3.967-11.105,6.995-22.546,10.398-33.852C122.776,363.546,122.829,362.162,124.166,361.18z"/>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            </svg>

            </div>

            <h3 className="font-weight-bold">
           {pricing !=null && pricing.platforms_title_2}
            </h3>

            <p className="text-muted mb-8 mb-lg-0">
            {pricing !=null && pricing.platforms_desc_2}
            </p>

          </div>
         
          <div className="col-12 col-md-6 col-lg-4 text-center" data-aos="fade-up">
              
            <div className="icon icon-lg mb-4">
            
<svg id="Layer_1" enable-background="new 0 0 128 128" height="512" viewBox="0 0 128 128" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m107.642 91.773c-4.023 0-7.7 1.483-10.535 3.919l-5.309-5.309c6.15-6.496 9.934-15.254 9.934-24.884s-3.784-18.388-9.934-24.884l5.309-5.309c2.835 2.436 6.512 3.919 10.535 3.919 8.932 0 16.198-7.267 16.198-16.198s-7.266-16.197-16.198-16.197-16.198 7.267-16.198 16.198c0 4.19 1.613 8.002 4.233 10.88l-5.293 5.293c-6.496-6.15-15.254-9.934-24.884-9.934s-18.388 3.784-24.884 9.934l-5.293-5.293c2.62-2.879 4.233-6.69 4.233-10.88 0-8.932-7.267-16.198-16.198-16.198s-16.198 7.267-16.198 16.198 7.267 16.198 16.198 16.198c4.023 0 7.7-1.483 10.535-3.919l5.309 5.309c-6.15 6.496-9.934 15.254-9.934 24.884s3.784 18.388 9.934 24.884l-5.309 5.309c-2.835-2.436-6.512-3.919-10.535-3.919-8.932 0-16.198 7.267-16.198 16.198s7.267 16.198 16.198 16.198 16.198-7.267 16.198-16.198c0-4.19-1.613-8.002-4.233-10.88l5.293-5.293c6.496 6.15 15.254 9.934 24.884 9.934s18.388-3.784 24.884-9.934l5.293 5.293c-2.62 2.879-4.233 6.69-4.233 10.88 0 8.932 7.267 16.198 16.198 16.198s16.198-7.267 16.198-16.198-7.266-16.199-16.198-16.199z" fill="#e6e7e8"/><circle cx="103.642" cy="19.028" fill="#ffd7e5" r="15.198"/><circle cx="103.642" cy="12.793" fill="#6dc9f7" r="4.506"/><path d="m103.642 17.908c-3.729 0-6.752 3.023-6.752 6.752v4.445c0 .367.297.664.664.664h12.177c.367 0 .664-.297.664-.664v-4.445c0-3.729-3.024-6.752-6.753-6.752z" fill="#6dc9f7"/><circle cx="19.358" cy="19.028" fill="#ffd7e5" r="15.198"/><circle cx="19.358" cy="12.793" fill="#6dc9f7" r="4.506"/><path d="m19.358 17.908c-3.729 0-6.752 3.023-6.752 6.752v4.445c0 .367.297.664.664.664h12.177c.367 0 .664-.297.664-.664v-4.445c-.001-3.729-3.024-6.752-6.753-6.752z" fill="#6dc9f7"/><circle cx="103.642" cy="103.972" fill="#ffd7e5" r="15.198"/><circle cx="103.642" cy="97.736" fill="#6dc9f7" r="4.506"/><path d="m103.642 102.852c-3.729 0-6.752 3.023-6.752 6.752v4.445c0 .367.297.664.664.664h12.177c.367 0 .664-.297.664-.664v-4.445c0-3.729-3.024-6.752-6.753-6.752z" fill="#6dc9f7"/><circle cx="19.358" cy="103.972" fill="#ffd7e5" r="15.198"/><circle cx="19.358" cy="97.736" fill="#6dc9f7" r="4.506"/><path d="m19.358 102.852c-3.729 0-6.752 3.023-6.752 6.752v4.445c0 .367.297.664.664.664h12.177c.367 0 .664-.297.664-.664v-4.445c-.001-3.729-3.024-6.752-6.753-6.752z" fill="#6dc9f7"/><circle cx="61.5" cy="61.5" fill="#6dc9f7" r="35.232"/><path d="m61.5 29.268c18.955 0 34.407 14.97 35.194 33.732.021-.498.038-.997.038-1.5 0-19.458-15.774-35.232-35.232-35.232s-35.232 15.774-35.232 35.232c0 .503.017 1.002.038 1.5.787-18.762 16.239-33.732 35.194-33.732z" fill="#fff"/><path d="m65.077 68.055h-1.257c-.754.134-1.527.216-2.32.216s-1.565-.082-2.32-.216h-1.257c-9.02 0-16.375 7.041-16.92 15.923h40.995c-.546-8.882-7.901-15.923-16.921-15.923z" fill="#fa759e"/><path d="m63.82 68.055c-.754.134-1.527.216-2.32.216s-1.565-.082-2.32-.216h-1.257c-.933 0-1.848.076-2.74.221v15.702h12.633v-15.701c-.892-.145-1.807-.221-2.74-.221h-1.256z" fill="#fff"/><path d="m75.546 50.428c-.277 0-.602.026-.841.172v2.799 1.242.427c0 .217-.006.433-.016.648.26.181.548.295.858.295 1.092 0 1.977-1.25 1.977-2.791-.001-1.542-.886-2.792-1.978-2.792z" fill="#fff"/><path d="m48.296 55.067v-.427c0-.385 0-.811 0-1.223v-2.817c-.24-.146-.564-.172-.842-.172-1.092 0-1.977 1.249-1.977 2.791 0 1.541.885 2.791 1.977 2.791.31 0 .598-.113.858-.295-.01-.215-.016-.43-.016-.648z" fill="#fff"/><path d="m68.522 45.672v-.912s-7.041 3.146-14.077 1.249c-.177 2.561-2.289 4.591-4.895 4.591h-1.254v4.467c0 7.293 5.912 13.204 13.204 13.204s13.204-5.912 13.204-13.204v-4.467h-1.254c-2.722 0-4.928-2.206-4.928-4.928z" fill="#fff"/><path d="m74.704 50.6h-1.254c-2.722 0-4.928-2.206-4.928-4.928v-8.505h1.254c2.722 0 4.928 2.206 4.928 4.928z" fill="#0089ef"/><path d="m50.557 44.37c-.919-.55-1.659-1.227-2.261-1.959v8.189h1.254c2.606 0 4.718-2.03 4.894-4.591-1.311-.354-2.622-.882-3.887-1.639z" fill="#0089ef"/><path d="m50.557 44.37c8.054 4.818 17.965.389 17.965.389v-7.593s-2.095-4.088-6.723-4.088c-4.053 0-6.392 3.066-10.256 3.803-2.452.468-5.81-1.467-5.81-1.467s.107 6.135 4.824 8.956z" fill="#0089ef"/><path d="m62.579 77.268h-2.174l-1.15-2.991 1.15-1.84h2.174l1.15 1.84z" fill="#6dc9f7"/><path d="m62.57 77.268h-2.174l-1.372 6.711h4.918z" fill="#6dc9f7"/><g fill="#3a2c60"><path d="m97.554 30.77h12.177c.917 0 1.664-.747 1.664-1.664v-4.445c0-3.254-2.017-6.041-4.865-7.189 1.568-.971 2.618-2.703 2.618-4.679 0-3.036-2.47-5.506-5.506-5.506s-5.505 2.47-5.505 5.506c0 1.976 1.05 3.707 2.618 4.679-2.848 1.148-4.865 3.935-4.865 7.189v4.445c0 .917.746 1.664 1.664 1.664zm6.088-21.483c1.933 0 3.506 1.573 3.506 3.506s-1.573 3.505-3.506 3.505-3.505-1.572-3.505-3.505 1.572-3.506 3.505-3.506zm-5.752 15.374c0-3.172 2.58-5.752 5.752-5.752s5.752 2.581 5.752 5.752v4.109h-11.504z"/><path d="m22.245 17.472c1.568-.971 2.618-2.702 2.618-4.679 0-3.036-2.47-5.506-5.505-5.506-3.036 0-5.506 2.47-5.506 5.506 0 1.976 1.05 3.707 2.618 4.679-2.848 1.148-4.865 3.935-4.865 7.189v4.445c0 .917.747 1.664 1.664 1.664h12.177c.917 0 1.664-.747 1.664-1.664v-4.445c0-3.254-2.017-6.041-4.865-7.189zm-2.887-8.185c1.933 0 3.505 1.573 3.505 3.506s-1.572 3.505-3.505 3.505-3.506-1.572-3.506-3.505 1.573-3.506 3.506-3.506zm5.752 19.483h-11.505v-4.109c0-3.172 2.581-5.752 5.752-5.752s5.752 2.581 5.752 5.752v4.109z"/><path d="m103.642 87.773c-4.023 0-7.7 1.483-10.535 3.92l-5.288-5.288c4.078-4.301 7.134-9.631 8.72-15.652.141-.534-.178-1.081-.712-1.222-.538-.145-1.081.178-1.222.712-1.582 6.005-4.713 11.282-8.892 15.456-.002.002-.006.003-.008.005-.003.003-.003.006-.006.009-6.265 6.25-14.884 10.019-24.199 10.019-18.875 0-34.232-15.356-34.232-34.232s15.357-34.232 34.232-34.232c16.862 0 31.422 12.56 33.867 29.215.08.546.589.928 1.135.844.546-.08.924-.588.844-1.135-1.108-7.55-4.573-14.299-9.569-19.555l5.33-5.33c2.835 2.436 6.512 3.92 10.535 3.92 8.932 0 16.198-7.267 16.198-16.198s-7.266-16.199-16.198-16.199-16.198 7.267-16.198 16.198c0 4.19 1.613 8.001 4.233 10.88l-5.313 5.313c-6.553-6.184-15.363-9.953-24.865-9.953-9.63 0-18.388 3.784-24.884 9.934l-5.293-5.293c2.62-2.879 4.233-6.69 4.233-10.88 0-8.932-7.267-16.198-16.198-16.198s-16.197 7.266-16.197 16.197 7.267 16.198 16.198 16.198c4.023 0 7.7-1.483 10.535-3.919l5.309 5.309c-6.15 6.496-9.934 15.254-9.934 24.884s3.784 18.388 9.934 24.884l-5.309 5.309c-2.835-2.436-6.512-3.919-10.535-3.919-8.932 0-16.198 7.267-16.198 16.198s7.267 16.198 16.198 16.198 16.198-7.267 16.198-16.198c0-4.19-1.613-8.002-4.233-10.88l5.293-5.293c6.496 6.15 15.254 9.934 24.884 9.934 9.512 0 18.336-3.716 24.901-9.917l5.276 5.277c-2.62 2.879-4.233 6.69-4.233 10.88 0 8.932 7.266 16.198 16.198 16.198s16.198-7.267 16.198-16.198-7.266-16.2-16.198-16.2zm0-82.943c7.829 0 14.198 6.369 14.198 14.198s-6.369 14.198-14.198 14.198c-3.823 0-7.291-1.526-9.846-3.992-.005-.005-.007-.013-.012-.018-.009-.009-.021-.011-.03-.02-2.654-2.581-4.31-6.183-4.31-10.168 0-7.829 6.369-14.198 14.198-14.198zm-98.482 14.198c0-7.829 6.369-14.198 14.198-14.198s14.198 6.369 14.198 14.198c0 3.985-1.656 7.586-4.309 10.167-.009.009-.022.012-.031.021-.006.006-.007.013-.013.019-2.555 2.465-6.023 3.991-9.846 3.991-7.828.001-14.197-6.369-14.197-14.198zm14.198 99.142c-7.829 0-14.198-6.369-14.198-14.198s6.369-14.198 14.198-14.198c3.823 0 7.291 1.526 9.846 3.991.005.006.007.014.013.019.009.009.022.012.031.021 2.653 2.581 4.309 6.182 4.309 10.167-.001 7.829-6.37 14.198-14.199 14.198zm84.284 0c-7.829 0-14.198-6.369-14.198-14.198 0-3.986 1.656-7.587 4.31-10.168.009-.008.021-.011.03-.02.005-.005.007-.013.012-.018 2.555-2.466 6.023-3.992 9.846-3.992 7.829 0 14.198 6.369 14.198 14.198s-6.369 14.198-14.198 14.198z"/><path d="m106.53 102.416c1.568-.971 2.618-2.703 2.618-4.679 0-3.036-2.47-5.506-5.506-5.506s-5.505 2.47-5.505 5.506c0 1.977 1.05 3.708 2.618 4.679-2.848 1.148-4.865 3.935-4.865 7.189v4.445c0 .917.746 1.664 1.664 1.664h12.177c.917 0 1.664-.746 1.664-1.664v-4.445c0-3.255-2.018-6.042-4.865-7.189zm-2.888-8.186c1.933 0 3.506 1.573 3.506 3.506s-1.573 3.506-3.506 3.506-3.505-1.573-3.505-3.506 1.572-3.506 3.505-3.506zm5.753 19.483h-11.505v-4.109c0-3.172 2.58-5.752 5.752-5.752s5.752 2.58 5.752 5.752v4.109z"/><path d="m22.245 102.415c1.568-.971 2.618-2.703 2.618-4.679 0-3.036-2.47-5.506-5.505-5.506-3.036 0-5.506 2.47-5.506 5.506 0 1.977 1.05 3.708 2.618 4.679-2.848 1.148-4.865 3.935-4.865 7.188v4.445c0 .917.747 1.664 1.664 1.664h12.177c.917 0 1.664-.746 1.664-1.664v-4.445c0-3.253-2.017-6.04-4.865-7.188zm-2.887-8.185c1.933 0 3.505 1.573 3.505 3.506s-1.572 3.506-3.505 3.506-3.506-1.573-3.506-3.506 1.573-3.506 3.506-3.506zm5.752 19.483h-11.505v-4.109c0-3.172 2.581-5.752 5.752-5.752s5.752 2.58 5.752 5.752v4.109z"/><path d="m95.732 61.5c0 1.401-.086 2.814-.255 4.199-.067.548.323 1.047.872 1.114.041.005.082.007.123.007.498 0 .929-.372.991-.879.179-1.465.27-2.959.27-4.441 0-.552-.448-1-1-1s-1.001.448-1.001 1z"/><path d="m44.954 72.62c-.074.059-.133.132-.189.213-2.727 2.945-4.497 6.8-4.76 11.084-.017.275.081.546.27.747s.453.315.729.315h40.995c.276 0 .54-.114.729-.315s.287-.471.27-.747c-.263-4.285-2.033-8.14-4.76-11.084-.056-.08-.115-.153-.189-.212-2.518-2.634-5.821-4.501-9.517-5.226 3.744-2.143 6.414-5.937 7.027-10.385 1.664-.007 2.967-1.668 2.967-3.79 0-2.057-1.227-3.667-2.818-3.771v-.913-6.44c0-3.269-2.659-5.928-5.928-5.928h-.69c-.805-1.227-3.128-4.088-7.288-4.088-2.522 0-4.41 1.044-6.236 2.055-1.367.756-2.659 1.471-4.208 1.766-1.701.325-4.277-.865-5.125-1.352-.312-.179-.697-.177-1.007.007-.31.183-.498.518-.492.878.004.212.12 4.139 2.564 7.325v5.778.913c-1.591.104-2.818 1.715-2.818 3.771 0 2.122 1.303 3.783 2.967 3.79.612 4.448 3.283 8.242 7.027 10.385-3.699.723-7.002 2.59-9.52 5.224zm.875 2.024c2.466 1.337 4.035 3.902 4.035 6.747v1.587h-7.763c.407-3.171 1.754-6.033 3.728-8.334zm25.307 8.335h-2.319v-13.462c2.604.631 4.97 1.892 6.909 3.635-2.827 1.749-4.589 4.844-4.589 8.24v1.587zm-14.185-13.878 2.159 3.203-1.636 1.6-1.026-4.78c.166-.015.336-.013.503-.023zm3.986 2.336-1.58-2.345c.701.107 1.413.18 2.143.18.724 0 1.43-.072 2.126-.177l-1.579 2.342zm2.936.868 2.161-3.204c.171.01.344.008.514.024l-1.036 4.783zm-7.689 4.295c.113.11.248.198.405.245.095.029.192.042.289.042.258 0 .51-.1.699-.285l1.091-1.068.694 1.804-1.154 5.64h-2.024zm4.183-2.216.592-.948h1.065l.592.948-.725 1.884h-.799zm3.244 2.985.705-1.833 1.091 1.067c.189.186.441.285.699.285.096 0 .193-.014.288-.042.164-.049.307-.141.423-.259v6.392h-2.058zm-9.427 5.61h-2.319v-1.587c0-3.396-1.762-6.491-4.589-8.24 1.939-1.742 4.304-3.004 6.909-3.635v13.462zm6.065 0 .964-4.71h.542l.963 4.71zm12.887 0v-1.587c0-2.845 1.569-5.411 4.035-6.747 1.975 2.3 3.321 5.162 3.728 8.334zm3.386-29.76c0 .892-.411 1.607-.818 1.76v-3.443-.078c.408.154.818.869.818 1.761zm-2.817-11.124v7.505h-.255c-2.166 0-3.928-1.762-3.928-3.928v-.912-6.593h.254c2.166 0 3.929 1.762 3.929 3.928zm-21.975-4.231c1.862-.355 3.356-1.182 4.801-1.981 1.677-.928 3.262-1.805 5.268-1.805 3.446 0 5.272 2.606 5.724 3.352v1.576c-1.244-1.138-3.126-2.256-5.724-2.256-.552 0-1 .448-1 1s.448 1 1 1c3.443 0 5.269 2.602 5.724 3.352v1.979c-2.188.818-10.018 3.279-16.452-.571-2.715-1.625-3.733-4.552-4.114-6.412 1.318.533 3.172 1.069 4.773.766zm1.585 8.851c-.459 1.668-1.986 2.885-3.765 2.885h-.254v-4.878c.239.175.483.348.748.506 1.071.641 2.169 1.121 3.27 1.484 0 .001.001.003.001.003zm-6.837 6.504c0-.893.411-1.607.818-1.761v.142 3.244.136c-.407-.153-.818-.868-.818-1.761zm2.818 1.848v-3.467h.254c1.294 0 2.486-.444 3.465-1.167-.01.09-.024.18-.007.275.085.486.507.829.984.829.057 0 .114-.005.172-.015l2.586-.45c.544-.095.909-.613.814-1.157s-.607-.905-1.157-.814l-2.406.419c.566-.659.997-1.433 1.232-2.298 1.374.284 2.734.409 4.03.409 3.526 0 6.593-.847 8.285-1.428.112 1.256.617 2.399 1.391 3.307l-2.348-.409c-.544-.091-1.062.27-1.157.814s.27 1.062.814 1.157l2.586.45c.058.01.116.015.172.015.477 0 .899-.342.984-.829.014-.081-.001-.157-.006-.235.976.706 2.17 1.127 3.464 1.127h.255v3.467c0 6.729-5.475 12.204-12.205 12.204s-12.202-5.474-12.202-12.204z"/><path d="m61.5 58.829c1.379 0 2.502-1.122 2.502-2.501 0-.552-.448-1-1-1s-1 .448-1 1c0 .276-.225.501-.502.501-.276 0-.501-.225-.501-.501 0-.552-.448-1-1-1s-1 .448-1 1c0 1.379 1.122 2.501 2.501 2.501z"/><circle cx="55.675" cy="53.219" r="1.32"/><path d="m67.326 54.54c.729 0 1.32-.591 1.32-1.32s-.591-1.32-1.32-1.32-1.32.591-1.32 1.32.59 1.32 1.32 1.32z"/><path d="m65.223 61.8c.333-.44.247-1.067-.193-1.401-.441-.335-1.069-.247-1.401.193-.007.01-.762.956-2.129.956-1.372 0-2.079-.891-2.121-.945-.325-.44-.945-.538-1.39-.217-.448.323-.549.948-.226 1.396.052.072 1.303 1.767 3.737 1.767 2.372-.002 3.669-1.678 3.723-1.749z"/></g></svg>
            </div>

            <h3 className="font-weight-bold">
                {pricing !=null && pricing.platforms_title_3}
            </h3>

            <p className="text-muted mb-0">
            {pricing !=null && pricing.platforms_desc_3}

            </p>

          </div>
        </div> 
      </div> 
    </section>

    
    <section className="py-11" >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            
            <div className="card card-border border-primary shadow-light-lg" data-jarallax-element="-40">
              <div className="card-body">
                <div className="row justify-content-center">
                  <div className="col-12 col-xl-11">
                
                    <div className="text-center">
                      <img src="/production/static/img/illustrations/illustration-1.png" alt="..." className="img-fluid mb-3" style={{width: "200px"}}/>
                    </div>

                    <h2 className="font-weight-bold text-center mb-1">
                      {pricing !=null && pricing.demo_title}
                    </h2>

                    <p className="font-size-lg text-center text-muted mb-6 mb-md-8">
                      {pricing !=null && pricing.demo_desc}
                    </p>

                    <form method="post" >
                    <input type="hidden" name="form-name" value="demo-form" />
                    <div className="row">
                        <div className="col-12 col-md-6">

                          <div className="form-label-group">
                            <input type="text"    value={fname} onChange={this.handleChange} className="form-control form-control-flush" name="fname"  id="fname" placeholder="Full Name "/>
                            <label for="Full Name">Full Name <span className="required">*</span></label>
                            <p className="err" id="p_cardName" ></p>
                          </div>

                        </div>
                        <div className="col-12 col-md-6">

                          <div className="form-label-group">
                            <input type="text"  value={fcompany} onChange={this.handleChange} className="form-control form-control-flush" name="fcompany" id="fcompany" placeholder="Company Name "/>
                            <label for="Company">Company Name (Optional)</label>
                          </div>

                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-md-6">

                          <div className="form-label-group">
                            <input type="email"  value={femail} onChange={this.handleChange} className="form-control form-control-flush" id="femail"  name="femail" placeholder="Email "/>
                            <label for="registrationEmail">Email <span className="required">*</span></label>
                            <p className="err" id="p_cardEmail" ></p>
                          </div>

                        </div>
                        <div className="col-12 col-md-6">

                          <div className="form-label-group">
                            <input type="number"  value={fphone} onChange={this.handleChange} className="form-control form-control-flush" name="fphone" id="fphone" placeholder="Phone"/>
                            <label for="Phone">Phone (Optional)</label>
                          </div>

                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          
                        <a href="javascript:void(0);" onClick={this.handleStartFree.bind(this)} className="btn btn-block btn-primary mt-3 lift">
                            {pricing !=null && pricing.request_a_demo_btn}
                          </a>

                        </div>
                      </div>
                    </form>
                  
                  </div>
                </div> 
              </div>
            </div>

          </div>
        </div> 
      </div> 
    </section>

    
    <div className="position-relative mt-n16" style={{marginBottom:'200px'  }}>
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


