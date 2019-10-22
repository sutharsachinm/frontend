import React, { Component } from 'react';
import { connect } from 'react-redux';
 
 


class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name:"Pricing",
            refundData:null,
        };
    }
    async componentDidMount(){
      console.log('this.props : ',this.props)
      this.setState({refundData:this.props.fields});
   }

    render() {

        
    const{refundData} = this.state;
    if(refundData!=null){


        return (
            
  <div className=" " >

     <section data-jarallax data-speed=".8" className="pt-10 pt-md-14 pb-12 pb-md-15 overlay overlay-primary overlay-80 jarallax" style={{backgroundImage:`url(/production/static/img/covers/cover-4.jpg))`}}>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 text-center">
            
            <h1 className=" font-weight-bold text-white mb-6 mt-n3">
              {refundData.header_title}
            </h1>

            

          </div>
        </div> 
      </div> 

      <div className="position-absolute right-0 bottom-0 left-0">

        <div className="position-relative shape shape-bottom shape-fluid-x svg-shim text-white">
          <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"/>
          </svg>
        </div>

        <div className="position-absolute center">
          <a className="btn btn-light btn-rounded-circle lift"  href="#payItDown">
            <i className="fe fe-arrow-down"></i>
          </a>
        </div>

      </div>

    </section>
    
    <section className="pt-8 pt-md-11 pb-8 pb-md-14">
      <div className="container">

          
        <div className="row">

           <p className="text-gray-800" id="payItDown">
           {refundData.header_desc}
           </p>

          <div className="col-12">
            
            <hr className="my-6 my-md-8"></hr>

          </div>
        </div> 
        <div className="row">
          <div className="col-12 col-md-11">


           <h3 className="mb-5"> {refundData.p_title_1} </h3>

           <p className="text-gray-800" >
              {refundData.p_tag_1}
           </p>

          <h3 className="mb-5">{refundData.p_title_2}</h3>

          <p className="text-gray-800" >
          {refundData.p_tag_2}
          </p>

          <h3 className="mb-5">{refundData.p_title_3}</h3>

          <p className="text-gray-800" >
          {refundData.p_tag_3}
          </p>

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
      else{
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


