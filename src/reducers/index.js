import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import loginRegisterReducer from './loginRegisterReducer';

export default combineReducers({
    loginReducer,
    loginRegisterReducer
})