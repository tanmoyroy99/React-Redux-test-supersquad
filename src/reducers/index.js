import {combineReducers } from 'redux';
import heroReducers from './heroReducers';
import characterReducers from './characterReducers'



export default combineReducers({characterReducers, heroReducers});