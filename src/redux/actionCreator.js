import * as actionTypes from './actionTypes';
import axios from 'axios';
import { baseUrl } from './baseUrl';

export const addComment = (photoId, rating, author, comment) => dispatch => {
    const newComment = {
        photoId: photoId,
        author: author,
        rating: rating,
        comment: comment
    }
    newComment.date = new Date().toISOString();
    
    axios.post(baseUrl + "comments", newComment)
    .then(response => response.data)
    .then(comment => dispatch(commentConcat(comment)))
}

const commentConcat = (comment) => ({
    type: actionTypes.ADD_COMMENT,
    payload: comment
})

const commentLoading = () =>({
    type: actionTypes.COMMENT_LOADING
})

const loadComments = comments => ({
    type: actionTypes.LOAD_COMMENTS,
    payload: comments
})

export const fetchComments = () => dispatch => {
    dispatch(commentLoading());
    axios.get(baseUrl + 'comments')
    .then(response => response.data)
    .then(comments => dispatch(loadComments(comments)));
}


const loadPhotos = photos => ({
    type: actionTypes.LOAD_PHOTOS,
    payload: photos
})

const photosLoading = () => ({
    type: actionTypes.PHOTOS_LOADING,
})

const photosFailed = (errMess) => ({
    type: actionTypes.PHOTOS_FAILED,
    payload: errMess
})

export const fetchPhotos = () => dispatch => {
        dispatch(photosLoading());

        axios.get(baseUrl + "photos")
        .then(response => response.data)
        .then(photos => dispatch(loadPhotos(photos)))
        .catch(error => dispatch(photosFailed(error.message)))
}