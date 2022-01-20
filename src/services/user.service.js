import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const userService = {
    getAll: () => axiosService.get(urls.users).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.users}/${id}`).then(value => value.data),
    getAllPostByUserId: (id) => axiosService.get(`${urls.users}/${id}/posts`).then(value => value.data),
    getAllAlbumByUserId: (id) => axiosService.get(`${urls.users}/${id}/albums`).then(value => value.data)
}