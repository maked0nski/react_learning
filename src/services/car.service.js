import {axiosService} from "./axios.service";
import {urls} from "../configs";

export const carService = {
    getAll: () => axiosService.get(urls.cars).then(value => value.data),
    create: (car) => axiosService.post(urls.cars, car).then(value => value.data),
    update: (id, car) => axiosService.patch(`${urls.cars}/${id}`, car ).then(value => value.data),
    deleteById: (id)=> axiosService.delete(`${urls.cars}/${id}`)
}