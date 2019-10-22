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
                   <section className="section-border border-primary">
      <div className="container d-flex flex-column">
        <div className="row align-items-center justify-content-center no-gutters min-vh-100">
          <div className="col-8 col-md-6 col-lg-7 offset-md-1 order-md-2 mt-auto mt-md-0 pt-8 pb-4 py-md-11">

            <img src="/production/static/img/illustrations/illustration-1.png" alt="..." className="img-fluid"/>

          </div>
          <div className="col-12 col-md-5 col-lg-4 order-md-1 mb-auto mb-md-0 pb-8 py-md-11">
            
            <h1 className="display-3 font-weight-bold text-center">
              404
            </h1>

            <p className="mb-5 text-center text-muted">
              We ran into an issue, but don’t worry, we’ll take care of it for sure.
            </p>

            <div className="text-center">
              <a className="btn btn-primary" href="/">
                Back to Home
              </a>
            </div>

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


