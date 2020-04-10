import {SET_USER_TOKEN} from "../actions/user"

import {getCookie} from "../components/cookie"

const defaultState = {
    token: getCookie('token')
}

const userReducer = (state=defaultState, action) => {
    switch(action.type){
        case SET_USER_TOKEN: return {...state, token: action.token}
        default: return {...state}
    }
}

export default userReducer