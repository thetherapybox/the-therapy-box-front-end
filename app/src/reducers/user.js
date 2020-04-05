import {SET_USER_TOKEN} from "../actions/user"

const userReducer = (state={}, action) => {
    switch(action.type){
        case SET_USER_TOKEN: return {...state, token: action.token}
        default: return {...state}
    }
}

export default userReducer