import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import * as loginActions from '../../actions/loginActions';
import Content from './Content';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';

class Login extends Component{
    ponerContenido = ()=>
    {
        if(this.props.cargando){
            return <Spinner/>
        }
        if(this.props.error)
        {
            return <Fatal mensaje ={this.props.error}/>
        }
        return <Content/>
    }
    render(){
        return(
            <div>
                {this.ponerContenido()}
            </div>
        )
    }
}

const mapStateToProps = (reducers)=>{
    return reducers.loginReducer;
}
export default  connect(mapStateToProps,loginActions)(Login);