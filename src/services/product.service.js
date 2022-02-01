import {axiosProductService} from "./axios.service";
import {prodUrls} from "../configs";


export const productService = {
    getAll: () => axiosProductService
        .get(prodUrls.Products)
        .then(value => value.data),


    getProductById: (id) => axiosProductService
        .get(`${prodUrls.Products}/${id}`)
        .then(value => value.data)
}