import React, { Component } from 'react';
import { connect } from 'react-redux';
 
import SignUp from './product-tour/signup';
import Plan from './product-tour/plan';
import Trial from './product-tour/trail';
import history from '../../history'


class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name:"SignUp",
            currentPage:1
        };
    }
    getHeader = () => {

       console.log('plan',window.location.pathname.indexOf('plan'))
        
        if(window.location.pathname.indexOf('signup')!=-1)
        {
          return 1;
        }
      
        if(window.location.pathname.indexOf('plan')!=-1)
        {
          return 2;
        }
      
        if(window.location.pathname.indexOf('confirm')!=-1)
        {
          return 3;
        }
        return false;
      
      };
    componentWillMount()
    {
        if(this.getHeader()===false)
        {
          window.location.href="/404";
        }
        else
        {
           this.setState({currentPage:this.getHeader()})
        }
  
    }
    componentWillReceiveProps(nextProps){
      console.log(nextProps)

    }

    pageSwitcher(){
      console.log(this.state.currentPage)
      switch(this.props.registerType){
        case 1:
          return ( <SignUp auth={this.props.auth}  />)
          break;
  
        case 2:
          return ( <Plan auth={this.props.auth}  />)
          break;
  
        case 3:
          return ( <Trial  auth={this.props.auth} />)
          break;
  
       
        default:
          return ( <SignUp   />)
          break;
      }
    }
    
     

    render() {

        

        return (
            
            
                 <section className="section">
                         {this.pageSwitcher()}
                </section>
          
      

        );
    }
}

const mapStateToProps = (state) => {
    return {
      initial: state.main.initial,
      registerType: state.main.registerType,
      role: state.main.role
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


