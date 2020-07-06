import {
    GET_POSTS,
    POST_ERROR,
    UPDATE_LIKES,
    DELETE_POST,
    ADD_POST
} from '../actions/types';

const initialState = {
    tweets: [],
    tweet: null,
    loading:true,
    error: {}
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_POSTS:
            return {
                ...state,
                tweets: payload,
                loading: false
            };
        case ADD_POST:
            return {
                ...state,
                tweets: [payload, ...state.tweets],
                loading: false
            };
        case DELETE_POST:
            return {
                ...state,
                tweets: state.tweets.filter(tweet => tweet._id !== payload),
                loading: false
            };
        case POST_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        case UPDATE_LIKES:
            return {
                ...state,
                tweets: state.tweets.map(tweet => tweet._id === payload.id ? { ...tweet, likes : payload.likes } : tweet ),
                loading: false
            };
        default:
            return state;
    }
}