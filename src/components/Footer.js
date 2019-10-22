import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
class Footer extends Component {

    constructor(props) {
        super(props);

        this.state = {
          show:true,
          footerPage:null
        };
    }

    getHeader = () => {
      
          if(window.location.pathname.indexOf('product-tours')!=-1)
          {
            return "yes";
          }
        
         
     
      return false;
    
    };
      openContact()
   {
     $('#launcher').contents().find('.wrapper-AtBcr').click();
   }
    componentWillMount(){
      console.log('footerPage : ',this.props.fields)
       this.setState({footerPage:this.props.fields})
      console.log(this.props.registerType)
      if(this.props.registerType=="" || this.props.registerType==undefined)
      {
        // window.location.href="/404";
        this.setState({show:true})
      }
      else
      {
        this.setState({show:false})
      }
    }

    render() {
      const {footerPage} = this.state;
      if(footerPage!=null ){
        return (
            <div id="myFooter">
               {this.state.show===true &&
         
            <footer className="py-8 py-md-11 bg-gray-200">
             
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-4 col-lg-3">
              
                 
                  <img src={footerPage.logo_img} alt="..." className="footer-brand img-fluid mb-2" />
      
                  
                  <p className="text-gray-700 mb-2">
                   {footerPage.footer_one_liner}
                  </p>
      
                  
                  <ul className="list-unstyled list-inline list-social mb-6 mb-md-0">
                  <li className="list-inline-item list-social-item mr-3">
                      <a href="javascript:void(0);" className="text-decoration-none">
                        <img src={footerPage.facebook} className="list-social-icon" alt="..."/>
                      </a>
                    </li>
                    {/* <li className="list-inline-item list-social-item mr-3">
                      <a href="javascript:void(0);" className="text-decoration-none">
                        <img src="production/static/img/icons/social/instagram.svg" className="list-social-icon" alt="..." />
                      </a>
                    </li>
                  
                    <li className="list-inline-item list-social-item mr-3">
                      <a href="javascript:void(0);" className="text-decoration-none">
                        <img src="production/static/img/icons/social/twitter.svg" className="list-social-icon" alt="..."/>
                      </a>
                    </li>
                    <li className="list-inline-item list-social-item">
                      <a href="javascript:void(0);" className="text-decoration-none">
                        <img src="production/static/img/icons/social/pinterest.svg" className="list-social-icon" alt="..."/>
                      </a>
                    </li> */}
                  </ul>
      
                </div>
                <div className="col-6 col-md-4 col-lg-2">
              
                   
                  {/* <h6 className="font-weight-bold text-uppercase text-gray-700">
                    Products
                  </h6> */}
      
                 
                  <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
                    <li className="mb-3">
                      <a href="/features" className="text-reset">
                      {footerPage.p_title_1}
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="/pricing" className="text-reset">
                       {footerPage.p_title_2}
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="/refund" className="text-reset">
                      {footerPage.p_title_6}
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="javascript:void(0);" onClick={()=>this.props.auth.login()} className="text-reset">
                      {footerPage.p_title_7}
                      </a>
                    </li>
                     
                  </ul>
      
                </div>

                <div className="col-6 col-md-4 col-lg-2">
              
                   
              {/* <h6 className="font-weight-bold text-uppercase text-gray-700">
                Legal
              </h6> */}
  
             
              <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
                <li className="mb-3">
                  <a href="/testimonials" className="text-reset">
                  {footerPage.p_title_3}
                  </a>
                </li>
                <li className="mb-3">
                  <a href="/faq" className="text-reset">
                  {footerPage.p_title_8}
                  </a>
                </li>
                <li className="mb-3">
                  <a href="/privacy" className="text-reset">
                  {footerPage.p_title_9}
                  </a>
                </li>
                <li className="mb-3">
                  <a href="/terms-of-service" className="text-reset">
                  {footerPage.p_title_10}
                  </a>
                </li>
                <li>
                  <a href="/support" className="text-reset">
                  {footerPage.p_title_4}
                  </a>
                </li>
              </ul>
              </div>
                 <div className="col-6 col-md-4 col-lg-2">
                <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
                
                <li className="mb-3">
                  <a h href="javascript:void(0);"  onClick={this.openContact.bind(this)} className="text-reset">
                  Chat With Us
                  </a>
                </li>
                
                
              </ul>

  
            </div>
                
              </div> 
            </div> 
          </footer>
              }
             </div>
        );
        }
      else
      {
        return(
         <div>
         </div>
        );
      }
    }
}

const mapStateToProps = (state) => {
    return {
        initial: state.initial,
        role: state.role,
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
        }



    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);


