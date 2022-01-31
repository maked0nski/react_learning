import axiosPlaceholderService from "./axios.service";
import {urls} from "../configs/urls";


export const placeholderService = {
    getAllUsers: () => axiosPlaceholderService.get(urls.users).then(value => value.data),
    getAllPosts: () => axiosPlaceholderService.get(urls.users).then(value => value.data),
    getAllComments: () => axiosPlaceholderService.get(urls.users).then(value => value.data),
}