import axios from 'axios';
import { setAlert } from './alert';
import {
    GET_POSTS,
    POST_ERROR,
    UPDATE_LIKES,
    DELETE_POST,
    ADD_POST,
    GET_POST,
    ADD_COMMENT,
    REMOVE_COMMENT
} from './types';

// Get Tweets
export const getTweets = () => async dispatch => {
    try {
        const res = await axios.get('/api/tweets');

        dispatch({
            type: GET_POSTS,
            payload: res.data
        });
    } catch(err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Add Like
export const addLike = (id) => async dispatch => {
    try {
        const res = await axios.put(`/api/tweets/like/${id}`);

        dispatch({
            type: UPDATE_LIKES,
            payload: { id, likes: res.data}
        });
    } catch(err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Remove Like
export const removeLike = (id) => async dispatch => {
    try {
        const res = await axios.put(`/api/tweets/unlike/${id}`);

        dispatch({
            type: UPDATE_LIKES,
            payload: { id, likes: res.data}
        });
    } catch(err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Delete Like
export const deleteTweet = (id) => async dispatch => {
    try {
        const res = await axios.delete(`/api/tweets/${id}`);

        dispatch({
            type: DELETE_POST,
            payload: id
        });

        dispatch(setAlert('Post Removed', 'success'))
    } catch(err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Add Post
export const addPost = formData => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const res = await axios.post(`/api/tweets/`, formData, config);

        dispatch({
            type: ADD_POST,
            payload: res.data
        });

        dispatch(setAlert('Post Created', 'success'))
    } catch(err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};


// Get Tweet
export const getTweet = (id) => async dispatch => {
    try {
        const res = await axios.get(`/api/tweets/${id}`);

        dispatch({
            type: GET_POST,
            payload: res.data
        });
    } catch(err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};


// Add Reply
export const addReply = (tweetId, formData) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const res = await axios.post(`/api/tweets/reply/${tweetId}`, formData, config);

        dispatch({
            type: ADD_COMMENT,
            payload: res.data
        });

        dispatch(setAlert('Reply Added', 'success'))
    } catch(err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};


// Delete Reply
export const deleteReply = (tweetId, replyId) => async dispatch => {

    try {
        const res = await axios.delete(`/api/tweets/reply/${tweetId}/${replyId}`);

        dispatch({
            type: REMOVE_COMMENT,
            payload: replyId
        });

        dispatch(setAlert('Reply Deleted', 'danger'))
    } catch(err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};
