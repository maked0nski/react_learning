import {axiosService} from "./axios.service";
import {urls} from "../settings/urls";


export const imageService = {
    getImage: () => axiosService.get(urls.cat).then(value => value.data)
}