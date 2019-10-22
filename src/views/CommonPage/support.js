import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
 
const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class Support extends Component {

    constructor(props) {
        super(props);

        this.state = { contactName: "", contactEmail: "", contactMessage: "" };
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value });
     
    validateEmail(email){
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
      {
        return true;
      }
      return false;
    }

    
    handleSubmit = e => {

      let contactName =document.getElementById("contactName").value;
      let contactEmail =document.getElementById("contactEmail").value;
      let contactMessage =document.getElementById("contactMessage").value;

        let err =0;
         if(this.validateEmail(contactEmail))
          {
           document.getElementById("p_contactEmail").innerHTML="";
          }
          else
          {
            document.getElementById("p_contactEmail").innerHTML="Please enter  a valid email address";
            err++;
          }

          if(contactName=="")
          {
            err++;
           document.getElementById("p_contactName").innerHTML="Please enter a Name";
          }
          else
          {
            document.getElementById("p_contactName").innerHTML="";
          }

          if(contactMessage=="")
          {
            err++;
           document.getElementById("p_contactMessage").innerHTML="Please enter a message";
          }
          else
          {
            document.getElementById("p_contactMessage").innerHTML="";
          }


          if(err==0)
          {
     
            toast.success("Thank you for contacting us. We will get back to you soon", {
              position: toast.POSITION.TOP_RIGHT
            });
            fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encode({ "form-name": "contact-form-2", ...this.state })
            })
              .then((res) =>{
                        console.log(res)

                setTimeout(()=>{
                 
                    window.location.href="/";
                },3000)

              }).catch(error => {
                setTimeout(()=>{
                      toast.error("Something went wrong !! Please try again", {
                        position: toast.POSITION.TOP_RIGHT
                      });
                      window.location.href="/";
                 },3000)
              });
            
          }

   

      e.preventDefault();
    };

    handleError = (err) =>{
      console.log('netlify error',err)
    }
    render() {

        
      const { contactName, contactEmail, contactMessage } = this.state;
     
        return (
            
          <div className=" " style={{"backgroundColor": "#f9fbfd"}}>
      <ToastContainer />
    <section data-jarallax data-speed=".8" className="pt-10 pb-11 py-md-14 overlay overlay-black overlay-60 jarallax"  style={{backgroundImage:`url(/production/static/img/covers/cover-4.jpg))`}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            
            <h1 className="display-2 font-weight-bold text-white">
              Around the clock support
            </h1>

            <p className="lead text-white-75 mb-0">
              Real humans, real help, anytime you need.
            </p>

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

    
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            
            <form className="rounded shadow mt-n6 mb-4">
              <div className="input-group input-group-lg">

                <div className="input-group-prepend">
                  <span className="input-group-text border-0 pr-1">
                    <i className="fe fe-search"></i>
                  </span>
                </div>

                <input type="text" className="form-control border-0 px-1" aria-label="Search for your issue..." placeholder="Search for your issue..."/>

                <div className="input-group-append">
                  <span className="input-group-text border-0 py-0 pl-1 pr-3">
                    <button type="submit" className="btn btn-sm btn-primary">
                      Search
                    </button>
                  </span>
                </div>

              </div>
            </form>
            
            <div className="row align-items-center mb-6 mb-md-8">
              <div className="col-auto">
                
                <h6 className="font-weight-bold text-uppercase text-muted mb-0">
                  Common searches:
                </h6>

              </div>
              <div className="col ml-n5">
                
                <p className="font-size-sm text-muted mb-0">
                Will I make profits with Profit Pro?
                </p>

              </div>
            </div> 

          </div>
        </div> 
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            
            <div className="card card-border border-primary shadow-lg mb-6 mb-md-8 lift lift-lg">
              <div className="card-body text-center">

                <div className="icon-circle bg-primary text-white mb-5">
                  <i className="fe fe-users"></i>
                </div>

                <h4 className="font-weight-bold">
                  Account
                </h4>

                <p className="text-gray-700 mb-5">
                  Issues related to logging in, out, or about multiple devices.
                </p>

                <span className="badge badge-pill badge-dark-soft">
                  <span className="h6 text-uppercase">
                    21 entries
                  </span>
                </span>
                
              </div>
            </div>

          </div>
     
          <div className="col-12 col-md-6 col-lg-4">
            
            <div className="card card-border border-warning shadow-lg mb-6 mb-md-8 lift lift-lg">
              <div className="card-body text-center">

                <div className="icon-circle bg-warning text-white mb-5">
                  <i className="fe fe-users"></i>
                </div>

                <h4 className="font-weight-bold">
                  Billing
                </h4>

                <p className="text-gray-700 mb-5">
                  Issues with payments or invoicing.
                </p>

                <span className="badge badge-pill badge-dark-soft">
                  <span className="h6 text-uppercase">
                    14 entries
                  </span>
                </span>
                
              </div>
            </div>

          </div>
          <div className="col-12 col-md-6 col-lg-4">
            
            <div className="card card-border border-dark shadow-lg mb-6 mb-md-8 mb-lg-0 lift lift-lg">
              <div className="card-body text-center">

                <div className="icon-circle bg-dark text-white mb-5">
                  <i className="fe fe-users"></i>
                </div>

                <h4 className="font-weight-bold">
                  Organizations
                </h4>

                <p className="text-gray-700 mb-5">
                  Setting up and managing collections of users.
                </p>

                <span className="badge badge-pill badge-dark-soft">
                  <span className="h6 text-uppercase">
                    17 entries
                  </span>
                </span>
                
              </div>
            </div>

          </div>
          <div className="col-12 col-md-6 col-lg-4">
            
            <div className="card card-border border-primary-desat shadow-lg mb-6 mb-md-0 lift lift-lg">
              <div className="card-body text-center">

                <div className="icon-circle bg-primary-desat text-white mb-5">
                  <i className="fe fe-users"></i>
                </div>

                <h4 className="font-weight-bold">
                  Performance
                </h4>

                <p className="text-gray-700 mb-5">
                  Improving your system's speed and reliability.
                </p>

                <span className="badge badge-pill badge-dark-soft">
                  <span className="h6 text-uppercase">
                    7 entries
                  </span>
                </span>
                
              </div>
            </div>

          </div>
          <div className="col-12 col-md-6 col-lg-4">
            
            <div className="card card-border border-danger shadow-lg lift lift-lg">
              <div className="card-body text-center">

                <div className="icon-circle bg-danger text-white mb-5">
                  <i className="fe fe-users"></i>
                </div>

                <h4 className="font-weight-bold">
                  Customizing
                </h4>

                <p className="text-gray-700 mb-5">
                  Building custom modules on top of our platform.
                </p>

                <span className="badge badge-pill badge-dark-soft">
                  <span className="h6 text-uppercase">
                    14 entries
                  </span>
                </span>
                
              </div>
            </div>

          </div>
        </div> 
      </div>
    </section>

    
    <section className="pt-8 pt-md-11 pb-8 pb-md-14">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            
            <h2 className="font-weight-bold">
              Can't find the answer you need?
            </h2>

            <p className="font-size-lg text-muted mb-7 mb-md-9">
              Contact us and we'll get back to you as soon as possible with a solution to whatever issues you're having with Landkit.
            </p>

          </div>
        </div> 
        <div className="row mb-7 mb-md-9">
          <div className="col-12 col-md-4 text-center">
            
            <h6 className="text-uppercase text-gray-700 mb-1">
              Message us
            </h6>

            <div className="mb-5 mb-md-0">
              <a href="#!" className="h4 text-primary">
                Start a chat!
              </a>
            </div>

          </div>
          <div className="col-12 col-md-4 text-center border-left-md border-gray-300">
            
            <h6 className="text-uppercase text-gray-700 mb-1">
              Call anytime
            </h6>

            <div className="mb-5 mb-md-0">
              <a href="#!" className="h4">
                (555) 123-4567
              </a>
            </div>

          </div>
          <div className="col-12 col-md-4 text-center border-left-md border-gray-300">
            
            <h6 className="text-uppercase text-gray-700 mb-1">
              Email us
            </h6>

            <a href="#!" className="h4">
            Support@ProfitPro.io
            </a>

          </div>
        </div> 
        <div className="row justify-content-center">
          <div className="col-12">
          <form method="post" >
             <div>
             <input type="hidden" name="form-name" value="contact-form-2" />
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="form-group mb-5">
                    
                    <label htmlFor="contactName"> Full name <span className="required">*</span> </label>

                    <input type="text" value={contactName} onChange={this.handleChange} name="contactName" className="form-control" id="contactName" placeholder="Full name"/>
                    <p className="err" id="p_contactName" ></p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group mb-5">
                    
                    <label htmlFor="contactEmail"> Email <span className="required">*</span> </label>

                    <input type="email"   value={contactEmail} onChange={this.handleChange} name="contactEmail"  className="form-control" id="contactEmail" placeholder="hello@domain.com"/>

                    <p className="err" id="p_contactEmail" ></p>

                  </div>
                </div>
              </div> 
              <div className="row">
                <div className="col-12">
                  <div className="form-group mb-7 mb-md-9">
                    
                    <label htmlFor="contactMessage"> What can we help you with?  <span className="required">*</span></label>

                    <textarea className="form-control"  value={contactMessage} onChange={this.handleChange} name="contactMessage"  id="contactMessage" rows="5" placeholder="Tell us what we can help you with!"></textarea>
                    <p className="err" id="p_contactMessage" ></p>
                  </div>
                </div>
              </div> 
              
              <div className="row justify-content-center">
                <div className="col-auto">
                  
                  <button  onClick={this.handleSubmit.bind(this)} type="button" className="btn btn-primary lift">
                    Submit request
                  </button>

                </div>
              </div> 

              </div>
          </form>

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

export default connect(mapStateToProps, mapDispatchToProps)(Support);


