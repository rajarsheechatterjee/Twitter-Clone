import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import tweet from './tweet';


export default combineReducers({
    alert,
    auth,
    tweet,
    profile
});