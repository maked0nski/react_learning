import axiosPlaceholderService from "./axios.service";
import {urls} from "../configs";


export const placeholderService = {
    getAllUsers: () => axiosPlaceholderService
        .get(urls.users)
        .then(value => value.data),
    getUserById: (id) => axiosPlaceholderService.get(`${urls.users}/${id}`).then(value => value.data),
    getAllPosts: () => axiosPlaceholderService.get(urls.posts).then(value => value.data),
    getPostById: (id) => axiosPlaceholderService.get(`${urls.posts}/${id}`).then(value => value.data),
    getAllComments: () => axiosPlaceholderService.get(urls.comments).then(value => value.data),
}