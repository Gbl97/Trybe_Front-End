import {
    INPUT,
} from '../action/index';

const INITIAL_STATE = {
    forms: {
      name: '',
      email: '',
      endereco: ''
    }
}

function formsReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case INPUT:
            return {
                ...state,
                forms: {
                  ...state.forms,
                  name: action.payload.name,
                  email: action.payload.email,
                  endereco: action.payload.endereco,
                }
            };
        default:
          return state;
    }
}

export default formsReducer;