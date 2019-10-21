import {RESTORE_NAME, CHANGE_NAME} from '../actionTypes/actionTypes';

const initialState = {
    name: "John Doe"
}

const reducer = (state = initialState, action) => {
    const { type, name } = action;
    switch (type) {
        case CHANGE_NAME:
            return {
                ...state,
                name: name
            }
        case RESTORE_NAME:
            return {
                ...state,
                name: name
            }
    
        default: return state;
    }
}

export default reducer;