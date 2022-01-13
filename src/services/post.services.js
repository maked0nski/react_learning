import {patch} from "../config/urls";

const getAll = () => {
    return fetch(patch.posts)
        .then(value => value.json())
};

const getById = (id) => {
    return fetch(`${patch.posts}/${id}`)
        .then(value => value.json())
};

const getByUserId = (userId) => {
    return fetch(`${patch.posts}?userId=${userId}`)
        .then(value => value.json())
}

export const postService ={
    getAll,
    getById,
    getByUserId
}