import React, { Component } from 'react';
import { connect } from 'react-redux';
// Import styles
import './template.css';

import Functions from '../Functions/main.js';
import Data from '../Data/api.js';

 
import Footer from './Components/Layout/footer.js';
import Home from './Components/Home/home.js';

 

class TemplateA extends Component {

    constructor(props) {
        super(props);

        this.state = {
            creative:""
        };
    }

   

   componentWillMount() {
      console.log('Template  Rendering: Version 1.0.0.1');
   }

   
   

    render() {
        return (
            
            <div className="app-container">
                <div className="profitpro-app">
                  
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

export default connect(mapStateToProps, mapDispatchToProps)(TemplateA);


