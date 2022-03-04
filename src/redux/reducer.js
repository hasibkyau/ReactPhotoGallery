import { combineReducers } from 'redux';
import * as actionTypes from './actionTypes';
import { createForms } from 'react-redux-form';
import { InitialContactForm } from './form';

const INITIAL_STATE = {
    token: null,
    userId: null,
}

export const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                userId: action.payload.userId,
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                token: null,
                userId: null,
            }
        default:
            return state;
    }
}

const photoReducer = (photoState = { isLoading: false, photos: [], errMess: null }, action) => {
    switch (action.type) {
        case actionTypes.PHOTOS_LOADING:
            return {
                ...photoState,
                isLoading: true,
                errMess: null,
                photos: []
            }
        case actionTypes.LOAD_PHOTOS:
            return {
                ...photoState,
                isLoading: false,
                errMess: null,
                photos: action.payload,
            }
        case actionTypes.PHOTOS_FAILED:
            return {
                ...photoState,
                isLoading: false,
                errMess: action.payload,
                photos: []
            }
        default:
            return photoState;
    }
}

const commentReducer = (commentState = { isLoading: true, comments: [] }, action) => {
    switch (action.type) {
        case actionTypes.LOAD_COMMENTS:
            return {
                ...commentState,
                isLoading: false,
                comments: action.payload
            }

        case actionTypes.COMMENT_LOADING:
            return {
                ...commentState,
                isLoading: true,
                comments: []
            }

        case actionTypes.ADD_COMMENT:
            let comment = action.payload;
            return {
                ...commentState,
                comments: commentState.comments.concat(comment)
            }
        default:
            return commentState;
    }
}


const feedbackReducer = (feedbackState = { isLoading: true, feedback: [] }, action) => {
    switch (action.type) {
        case actionTypes.LOAD_FEEDBACK:
            return {
                ...feedbackState,
                isLoading: false,
                feedback: action.payload,
            }

        case actionTypes.FEEDBACK_LOADING:
            return {
                ...feedbackState,
                isLoading: true,
                feedback: []
            }

        default:
            return feedbackState;
    }
}

export const Reducer = combineReducers({
    photos: photoReducer,
    comments: commentReducer,
    ...createForms({
        feedback: InitialContactForm
    }),
    feedback: feedbackReducer,
    auth: authReducer,
});