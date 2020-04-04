import { GET_PROFILE,GET_PROFILES, PROFILE_LOADING, CLEAR_CURRENT_PROFILE } from '../actions/types';

const initialState = {
    profile: null,
    loading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_LOADING:
            return {
                ...state,
                loading: true
            };

        case GET_PROFILE:
            return {
                ...state,
                profile: action.payload,
                loading: false
            };

        case CLEAR_CURRENT_PROFILE:
            return {
                ...state,
                profile: null
            };

        case GET_PROFILES:
            return {
                ...state,
                profiles: action.payload,
                loading: false
            };
        default:
            return state;
    }
};