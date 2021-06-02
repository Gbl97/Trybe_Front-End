import { combineReducers } from 'redux';
import formsReducer from './formsReducer';

const rootReducer = combineReducers({
    formulario: formsReducer
});

export default rootReducer;