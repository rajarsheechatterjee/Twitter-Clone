import {
    GET_PROFILE,
    PROFILE_ERROR,
    CLEAR_PROFILE,
    GET_PROFILES,
    UPDATE_FOLLOWING
} from "../actions/types";

const initialState = {
    profile: null,
    profiles: [],
    profileLoading: true,
    error: {}
};

export default function (state = initialState, action) {
    const {
        type,
        payload
    } = action;

    switch (type) {
        case GET_PROFILE:
            return {
                ...state,
                profile: payload,
                    profileLoading: false
            };
        case GET_PROFILES:
            return {
                ...state,
                profiles: payload,
                    profileLoading: false
            };
        case PROFILE_ERROR:
            return {
                ...state,
                error: payload,
                    profileLoading: false
            };
        case UPDATE_FOLLOWING:
            return {
                ...state,
                profiles: state.profiles.map(profile => profile._id === payload.id ? {
                        ...profile,
                        following: payload.following
                    } : profile),
                    profileLoading: false
            };
        case CLEAR_PROFILE:
            return {
                ...state,
                profile: null,
                    profileLoading: false
            };
        default:
            return state;
    }
}