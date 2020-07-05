import {
    GET_POSTS,
    POST_ERROR
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
        case POST_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }; 
        default:
            return state;
    }
}