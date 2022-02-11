import * as actionTypes from './actionTypes';

export const addComment = (dishId, rating, author, comment) =>({
        type: actionTypes.ADD_COMMENT,
            payload: {
                dishId: dishId,
                author: author,
                rating: rating,
                comment: comment,
            }
})