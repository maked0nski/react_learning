import {patch} from "../config/urls";


const getAll = () => {
    return fetch(patch.comments)
        .then(value => value.json())
}
const getByPostId = (postId) => {
    return fetch(`${patch.comments}?postId=${postId}`)
        .then(value => value.json())
}

export const commentsService = {
    getAll,
    getByPostId
}