import { combineReducers } from 'redux';
import producto from './reducerMercado';
import productos from './reducerMercado';

export default combineReducers({
    productos,
});