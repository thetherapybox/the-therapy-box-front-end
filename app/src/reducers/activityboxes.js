import {FETCH_BOXES} from "../actions/activityboxes"

const activityBoxesReducer = (state=[], action) => {
    switch(action.type) {
        case FETCH_BOXES: return action.payload
        default: return state
    }
}

export default activityBoxesReducer