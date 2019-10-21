import { GET_USERS } from '../actionTypes/actionTypes';

const initialState = {
    users: []
}

const userReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_USERS:
            return {
                ...state,
                users: payload
            }
    
        default: return state;
    }
}

export default userReducer;