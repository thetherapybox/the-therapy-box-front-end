import { FETCH_HOMEPAGE } from "../actions/homepage";

const homepageReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_HOMEPAGE:
            return action.payload;
        default:
            return state;
    }
};

export default homepageReducer;