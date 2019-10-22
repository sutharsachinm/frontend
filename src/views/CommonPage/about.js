import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typed from 'react-typed';


class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name:"About",
            page:null
        };
    }

    async componentDidMount(){
      console.log('this.props : ',this.props)
      this.setState({page:this.props.fields});
      

  }
     

    render() {
      const{page} = this.state;
        

        return (
            
          <div className=" ">
           
    
   
  

    <section className="py-8 py-md-11 border-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            
           
            <h1 className="display-2">
              {page !=null &&
                    page.header_title
                } 
            </h1>

           
            <p className="lead text-muted mb-7 mb-md-9">
            {page !=null &&
                    page.header_desc
                } 
             </p>

          </div>
        </div> 
        <div className="row">
          <div className="col-12">
            
            
            <div className="form-row">
              <div className="col-4">
                <img src="production/static/img/photos/photo-16.jpg" className="img-fluid rounded shadow-lg" alt="..."/>

               

              </div>
              <div className="col-3">

                <img src="production/static/img/photos/photo-17.jpg" className="img-fluid rounded shadow-lg mb-4" alt="..."/>

                <img src="production/static/img/photos/photo-18.jpg" className="img-fluid rounded shadow-lg mt-1" alt="..."/>

              </div>
              <div className="col-5">

                <div className="form-row mb-4">
                  <div className="col-5">
                    
                    <img src="production/static/img/photos/photo-19.jpg" className="img-fluid rounded shadow-lg" alt="..."/>

                  </div>
                  <div className="col-7">
                    
                    <img src="production/static/img/photos/photo-20.jpg" className="img-fluid rounded shadow-lg" alt="..."/>

                  </div>
                </div> 

                <img src="production/static/img/photos/photo-21.jpg" className="img-fluid rounded shadow-lg mt-1" alt="..."/>

              </div>
            </div>

          </div>
        </div> 
      </div> 
    </section>

 
    <section className="pt-8 pt-md-0 border-bottom bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">

            
            <div className="embed-responsive embed-responsive-1by1 d-md-none">
              <div className="embed-responsive-item" data-toggle="map" data-options='{"center": [-118.244615, 34.052979], "zoom": 12}'></div>
            </div>
            
           
            <div className="position-relative h-100 vw-50 float-right d-none d-md-block">

              
              <div className="h-100 w-100" >
                  <div className="embed-responsive-item">
                      <iframe width="400" height="315" src="https://www.youtube.com/embed/GlUm5a86EX0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                   </div>
              </div>
              
          
              <div className="shape shape-right shape-fluid-y svg-shim text-light">
                <svg viewBox="0 0 100 1544" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 386V0H100V1544H50V1158L0 386Z" fill="currentColor"/>
                </svg>
              </div>

            </div>

          </div>
          <div className="col-12 col-md-6 col-lg-5 offset-lg-1 py-8 py-md-11 py-lg-12">
            
            
           <h2>
           {page !=null &&
                    page.content_title_1
                }   <span className="text-blue">

              <Typed
                strings={[
                    'Shopify',
                    'Ebay',
                    'Amazon']}
                    typeSpeed={80}
                    backSpeed={90}
                    loop >
                    
                </Typed>
                </span>  {page !=null &&
                    page.content_title_2
                } 
             
            </h2> 

            {page !=null &&
            <p className="font-size-lg text-gray-700 mb-6">
               
                    {page.content_desc}
              
                </p>
                 } 

          
            <div className="d-flex">
              <div className="pr-5">
                <h3 className="text-blue mb-0">
                  <span data-toggle="countup" data-from="0" data-to={page !=null ? page.content_tab1_value : 100 } data-aos data-aos-id="countup:in">0</span>%
                </h3>
                <p className="text-gray-700 mb-0">
                {page !=null &&
                    page.content_tab1_title
                } 
                </p>
              </div>
              <div className="border-left border-gray-300"></div>
              <div className="px-5">
                <h3 className="text-blue mb-0">
                  <span data-toggle="countup" data-from="0" data-to={page !=null ? page.content_tab2_value : 100 } data-aos data-aos-id="countup:in">0</span>%
                </h3>
                <p className="text-gray-700 mb-0">
                {page !=null &&
                    page.content_tab2_title
                } 
                </p>
              </div>
              <div className="border-left border-gray-300"></div>
              <div className="pl-5">
                <h3 className="text-blue mb-0">
                <span data-toggle="countup" data-from="0" data-to={page !=null ? page.content_tab3_value : 100 } data-aos data-aos-id="countup:in">0</span>%
                </h3>
                <p className="text-gray-700 mb-0">
                {page !=null &&
                    page.content_tab3_title
                } 
                </p>
              </div>
            </div>

          </div>
        </div> 
      </div> 
    </section>

    
    
    <section>
      <div className="flickity-button-white flickity-button-inset" data-flickity='{"imagesLoaded": true, "wrapAround": true, "pageDots": false}'>
        <div className="w-100">
          
          
          <img src="production/static/img/covers/cover-11.jpg" className="img-fluid w-100" />

          <div className="shape shape-top shape-fluid-x svg-shim text-white">
            <svg viewBox="0 0 2880 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2880 0H0V54.1118H720C720 54.1118 1009.42 94.3602 1425 54.1118C1841.5 16.3789 2160 54.1118 2160 54.1118H2880V0Z" fill="currentColor"/>
            </svg>
          </div>

        </div>
        <div className="w-100">
          
          
          <img src="production/static/img/covers/cover-3.jpg" className="img-fluid w-100" />

          <div className="shape shape-top shape-fluid-x svg-shim text-white">
            <svg viewBox="0 0 2880 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2880 0H0V54.1118H720C720 54.1118 1009.42 94.3602 1425 54.1118C1841.5 16.3789 2160 54.1118 2160 54.1118H2880V0Z" fill="currentColor"/>
            </svg>
          </div>

        </div>
      </div>
    </section>


    <section className="pt-6 pt-md-8">
      <div className="container pb-6 pb-md-8 border-bottom">
        <div className="row align-items-center">
          <div className="col-12 col-md">
            
            
            <h3 className="font-weight-bold mb-1">
            {page !=null &&
                    page.interest_title
                } 
            </h3>

           
            <p className="font-size-lg text-muted mb-5 mb-md-0">
            {page !=null &&
                    page.interest_desc
                } 
            </p>

          </div>
          <div className="col-12 col-md-auto">
            
          
            <a href="mailto:tech@profitpro.io" className="btn btn-primary lift">
            {page !=null &&
                    page.btn_email
                } 
            </a>

          </div>
        </div> 
      </div> 
    </section>
                
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


