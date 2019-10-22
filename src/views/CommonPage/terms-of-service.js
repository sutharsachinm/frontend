import React, { Component } from 'react';
import { connect } from 'react-redux';

 


class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name:"Pricing",
            termsData:null,
        };
    }
     async componentDidMount(){
        console.log('this.props : ',this.props)
      this.setState({termsData:this.props.fields}); 
        

    }


    render() {

        
           const {termsData} = this.state;
            if(termsData!=null){
        return (
            
  <div className=" " style={{"background-color": "#f9fbfd"}}>
    
    <section className="pt-8 pt-md-11 pb-8 pb-md-14">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md">

            <h1 className="display-4 mb-2">
              {termsData.title}
            </h1>

            <p className="font-size-lg text-gray-700 mb-md-0">
              {termsData.update_date}
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

            
            
            <h3 className="mb-5">
                {termsData.label_1}
            </h3>

            <p className="text-gray-800">
            {termsData.p_tag_1}
            </p>

            <p className="text-gray-800">
            {termsData.p_tag_2}
            </p>

            <p className="text-gray-800">
            {termsData.p_tag_3}
            </p>

            <p className="text-gray-800">
            {termsData.p_tag_4}
            </p>

            <p className="text-gray-800">
            {termsData.p_tag_5}
            </p>
           
            <h3 className="mb-5">
                {termsData.section_1}
            </h3>
  
            <p className="text-gray-800">
            {termsData.p_tag_6}
            </p>

            <p className="text-gray-800">
            {termsData.p_tag_7}
            </p>

            <p className="text-gray-800">
            {termsData.p_tag_8}
            </p>

            <h3 className="mb-5">
                {termsData.section_2}
                
            </h3>
  
            <p className="text-gray-800">
            {termsData.p_tag_9}
            </p>

            <p className="text-gray-800">
            {termsData.p_tag_10}
            </p>

            <p className="text-gray-800">
            {termsData.p_tag_11}
            </p>

            <h3 className="mb-5">
                {termsData.section_3}
            </h3>
  
            <p className="text-gray-800">
            {termsData.p_tag_12}
            </p>

            <p className="text-gray-800">
            {termsData.p_tag_13}
            </p>

            <h3 className="mb-5">
                {termsData.section_4}
            </h3>
  
            <p className="text-gray-800">
            {termsData.p_tag_14}
            </p>

            <p className="text-gray-800">
            {termsData.p_tag_15}
            </p>

            <p className="text-gray-800">
            {termsData.p_tag_16}
            </p>

            <h3 className="mb-5">
                {termsData.section_5}
            </h3>
  
            <p className="text-gray-800">
            {termsData.p_tag_17}
            </p>

            <p className="text-gray-800">
            {termsData.p_tag_18}
            </p>

            <p className="text-gray-800">
            {termsData.p_tag_19}
            </p>

            <p className="text-gray-800">
            {termsData.p_tag_20}
            </p>


            <h3 className="mb-5">
                {termsData.section_6}
            </h3>
  
            <p className="text-gray-800">
            {termsData.p_tag_21}
            </p>

            <p className="text-gray-800">
            {termsData.p_tag_22}
            </p>

            <p className="text-gray-800">
            {termsData.p_tag_23}
            </p>

            <h3 className="mb-5">
                {termsData.section_7}
                
            </h3>
  
            <p className="text-gray-800">
            {termsData.p_tag_24}
            </p>

            <p className="text-gray-800">
            {termsData.p_tag_25}
            </p>

            <p className="text-gray-800">
            {termsData.p_tag_26}
            </p>

            <p className="text-gray-800">
            {termsData.p_tag_27}
            </p>

            <h3 className="mb-5">
                {termsData.section_8}
            </h3>
  
            <p className="text-gray-800">
            {termsData.p_tag_28}
            </p>

            <p className="text-gray-800">
            {termsData.p_tag_29}
            </p>

            <h3 className="mb-5">
                {termsData.section_9}
            </h3>
  
            <p className="text-gray-800">
            {termsData.p_tag_30}
            </p>

            <p className="text-gray-800">
            {termsData.p_tag_31}
            </p>

            <h3 className="mb-5">
                {termsData.section_10}
            </h3>
  
            <p className="text-gray-800">
            {termsData.p_tag_32}
            </p>

            <h3 className="mb-5">
              {termsData.section_11}
            </h3>
            
            <p className="text-gray-800">
            {termsData.p_tag_33}
            </p>

            <p className="text-gray-800">
            {termsData.p_tag_34}
            </p>

            <h3 className="mb-5">
                {termsData.section_12}
            </h3>
            
            <p className="text-gray-800">
            {termsData.p_tag_35}
            </p>

            <h3 className="mb-5">
                {termsData.section_13}
            </h3>

            <p className="text-gray-800">
            {termsData.p_tag_36}
            </p>

            <p className="text-gray-800">
            {termsData.p_tag_37}
            </p>

            <p className="text-gray-800">
            {termsData.p_tag_38}
            </p>

            <p className="text-gray-800">
            {termsData.p_tag_39}
            </p>

            <p className="text-gray-800">
            {termsData.p_tag_40}
            </p>

            <h3 className="mb-5">
                {termsData.section_14}
            </h3>

            <p className="text-gray-800">
            {termsData.p_tag_41}
            </p>

            <h3 className="mb-5">
                {termsData.section_15}
            </h3>
            <p className="text-gray-800">
            {termsData.p_tag_42}
            </p>

            <h3 className="mb-5">
                {termsData.section_16}
            </h3>
            <p className="text-gray-800">
            {termsData.p_tag_43}
            </p>

            <p className="text-gray-800">
            {termsData.p_tag_44}
            </p>

            <p className="text-gray-800">
            {termsData.p_tag_45}
            </p>

            <h3 className="mb-5">
                {termsData.section_17}
            </h3>
            <p className="text-gray-800">
            {termsData.p_tag_46}
            </p>

            <p className="text-gray-800">
            {termsData.p_tag_47}
            </p>

            <p className="text-gray-800">
            {termsData.p_tag_48}
            </p>
            
            <h3 className="mb-5">
                {termsData.section_18}
            </h3>
            <p className="text-gray-800">
            {termsData.p_tag_49}
            </p>

            <h3 className="mb-5">
                {termsData.section_19}
            </h3>
            <p className="text-gray-800">
            {termsData.p_tag_50}
            </p>

            <h3 className="mb-5">
                {termsData.section_20}
                
            </h3>
            <p className="text-gray-800">
            {termsData.p_tag_51}
            </p>


          </div>
          <div className="col-12 col-md-4">
            
            <div className="card shadow-light-lg">
              <div className="card-body">
                
                <h4>
                 {termsData.question}
                </h4>

                <p className="font-size-sm text-gray-800 mb-5">
                 {termsData.suggestions}
                </p>

                <h6 className="font-weight-bold text-uppercase text-gray-700 mb-2">
                  {termsData.email_us}
                </h6>

                <p className="font-size-sm mb-0">
                  <a href="mailto:tech@profitpro.io" className="text-reset">{termsData.email}</a>
                </p>

                {/* <h6 className="font-weight-bold text-uppercase text-gray-700 mb-2">
                  Call anytime
                </h6>

                <p className="font-size-sm mb-5">
                  <a href="tel:555-123-4567" className="text-reset">(555) 123-4567</a>
                </p>

               

                <p className="font-size-sm mb-0">
                  <a href="mailto:support@goodthemes.co" className="text-reset">support@goodthemes.co</a>
                </p> */
                }

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


