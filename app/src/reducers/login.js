import {TOGGLE} from "../actions/login"

const loginReducer = (state="login", action) => {
    switch(action.type){
        case TOGGLE: return state === "login" ? "registration" : "login"
        default: return "login"
    }
}

export default loginReducer