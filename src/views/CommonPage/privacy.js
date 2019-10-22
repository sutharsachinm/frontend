import React, { Component } from 'react';
import { connect } from 'react-redux';

 


class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name:"Pricing",
            privacyData:null,
        };
    }
     
    async componentDidMount(){
          console.log('this.props : ',this.props)
         this.setState({privacyData:this.props.fields}); 
    }

    render() {

        const {privacyData} = this.state;
        if(privacyData!=null){


        return (
            
  <div className=" " style={{"background-color": "#f9fbfd"}}>
    
    <section className="pt-8 pt-md-11 pb-8 pb-md-14">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md">

            <h1 className="display-4 mb-2">
              {privacyData.name}
            </h1>

            <p className="font-size-lg text-gray-700 mb-md-0">
              {privacyData.update_date}
            </p>

          </div>
         
        </div> 
        <div className="row">
          <div className="col-12">
            
            <hr className="my-6 my-md-8"></hr>

          </div>
        </div> 
        <div className="row">
          <div className="col-12 col-md-8">

            <p className="font-size-lg text-gray-800 mb-6 mb-md-8">
              {privacyData.p_tag_1}
              </p>
            
            <p className="font-size-lg text-gray-800 mb-6 mb-md-8">
            {privacyData.p_tag_2}
            </p>
            

            <h3 className="mb-5">
             {privacyData.p_title_1}
            </h3>

            <p className="text-gray-800">
            {privacyData.p_tag_3}
            
            </p>

            
            <p className="text-gray-800">
            {privacyData.p_tag_4}
            </p>

            <p>
                {privacyData.p_tag_5}
            </p>

            <div className="d-flex">
                
              <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                <i className="fe fe-check"></i>
              </span>

              <p className="text-gray-800">
                  {privacyData.p_tag_6}
              </p>

            </div>
            <div className="d-flex">
                
              <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                <i className="fe fe-check"></i>
              </span>

              <p className="text-gray-800">
              {privacyData.p_tag_7}
              </p>

            </div>
            <div className="d-flex">
                
              <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                <i className="fe fe-check"></i>
              </span>

              <p className="text-gray-800">
              {privacyData.p_tag_8}
              </p>

            </div>
            <div className="d-flex">
                
              <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                <i className="fe fe-check"></i>
              </span>

              <p className="text-gray-800">
              {privacyData.p_tag_9}
              </p>

            </div>
            <div className="d-flex">
                
              <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                <i className="fe fe-check"></i>
              </span>

              <p className="text-gray-800">
              {privacyData.p_tag_10}
              </p>

            </div>

            <div className="d-flex">
                
                <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                  <i className="fe fe-check"></i>
                </span>
  
                <p className="text-gray-800">
                {privacyData.p_tag_11}
                </p>
  
              </div>

            <div className="d-flex">
                
                <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                  <i className="fe fe-check"></i>
                </span>
  
                <p className="text-gray-800">
                    {privacyData.p_tag_12}
                </p>
  
             </div>
  
             <div className="d-flex">
                
                <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                  <i className="fe fe-check"></i>
                </span>
  
                <p className="text-gray-800">
                {privacyData.p_tag_13}
                </p>
  
             </div>

             <div className="d-flex">
                
                <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                  <i className="fe fe-check"></i>
                </span>
  
                <p className="text-gray-800">
                  {privacyData.p_tag_14}
                </p>
  
             </div>

             <div className="d-flex">
                
                <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                  <i className="fe fe-check"></i>
                </span>
  
                <p className="text-gray-800">
                {privacyData.p_tag_15}
                </p>
  
             </div>

            
             <p className="text-gray-800">
             {privacyData.p_tag_16}
            </p>

            <h3 className="mb-5">
            {privacyData.p_title_2}
               
            </h3>
  
            <p className="text-gray-800">
            {privacyData.p_tag_17}
            </p>

            <h3 className="mb-5">
                {privacyData.p_title_3}
            </h3>
  
            <p className="text-gray-800">
            {privacyData.p_tag_18}
            </p>

            <h3 className="mb-5">
                {privacyData.p_title_4}
            </h3>

            <p className="text-gray-800">
            {privacyData.p_tag_19}
            </p>

            <h3 className="mb-5">
              {privacyData.p_title_5}
            </h3>

            <p className="text-gray-800">
            {privacyData.p_tag_20}
            </p>

            <h3 className="mb-5">
                {privacyData.p_title_6}
            </h3>

            <p className="text-gray-800">
            {privacyData.p_tag_21}
            </p>

            <h3 className="mb-5">
            {privacyData.p_title_7}
            </h3>

            <p className="text-gray-800">
            {privacyData.p_tag_22}
            </p>

            <h3 className="mb-5">
             {privacyData.p_title_8}
            </h3>

            <p className="text-gray-800">
            {privacyData.p_tag_23}
            </p>

            <h3 className="mb-5">
              {privacyData.p_title_9}
            </h3>

            <p className="text-gray-800">
            {privacyData.p_tag_24}
            </p>

            <p className="text-gray-800">
            {privacyData.p_tag_25}
            </p>

            <p className="text-gray-800">
           {privacyData.p_tag_26}
            </p>

          </div>
          <div className="col-12 col-md-4">
            
            <div className="card shadow-light-lg">
              <div className="card-body">
                
                <h4>
                {privacyData.question}
                  
                </h4>

                
                <p className="font-size-sm text-gray-800 mb-5">
                {privacyData.suggestions} 
                </p>

                <h6 className="font-weight-bold text-uppercase text-gray-700 mb-2">
                  {privacyData.email_us}
                </h6>

                <p className="font-size-sm mb-0">
                  <a href="mailto:tech@profitpro.io" className="text-reset">{privacyData.email}</a>
                </p>
                {/* <h6 className="font-weight-bold text-uppercase text-gray-700 mb-2">
                  Call anytime
                </h6>

                <p className="font-size-sm mb-5">
                  <a href="tel:555-123-4567" className="text-reset">(555) 123-4567</a>
                </p>

                <h6 className="font-weight-bold text-uppercase text-gray-700 mb-2">
                  Email us
                </h6>

                <p className="font-size-sm mb-0">
                  <a href="mailto:support@goodthemes.co" className="text-reset">support@goodthemes.co</a>
                </p> */}

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
    else
       {
        return ( <div></div>);
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


