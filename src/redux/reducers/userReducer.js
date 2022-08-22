import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE} from "../actions/userActions";

const initialState = {
    loading: false,
    users: [],
    error: ''
}

export default function userReducer(state = initialState, action) {
    switch(action.type){
        case FETCH_USERS_REQUEST: return {
            loading: true
        }

        case FETCH_USERS_SUCCESS: return {
            loading: false,
            users: action.payload
        }

        case FETCH_USERS_FAILURE: return {
            users: [],
            error: action.payload
        }

        default: return state
    }
}