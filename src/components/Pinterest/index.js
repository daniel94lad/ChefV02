import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as pinterestActions from '../../actions/pinterestActions';


class Pinterest extends Component{
    componentDidMount()
    {
        console.log(this.props.buscar())
    }
    render(){
        return (
            <div>
                <h1>Pinterst</h1>
            </div>
        )
    }
}
const mapStateToProps = (reducers)=>{
    return reducers.pinterestReducer;
}
export default  connect(mapStateToProps,pinterestActions)(Pinterest);