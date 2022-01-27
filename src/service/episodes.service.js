import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const episodesService = {
    getAll: ()=> axiosService(urls.episode).then(value => value.data),
    getByPathname: (pathname)=> axiosService(`${pathname}`).then(value => value.data),
    getCharacterById: (id)=> axiosService(`${urls.character}/${id}`).then(value => value.data),
    getByNumberPage: (page)=> axiosService(`${urls.episode}?page=${page}`).then(value => value.data),
}