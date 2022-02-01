import axios from "axios";
import {baseURL, placeholderURL, productURL} from "../configs";

const axiosCarService = axios.create({baseURL: baseURL});

const axiosPlaceholderService = axios.create({baseURL: placeholderURL});

const axiosProductService = axios.create({baseURL: productURL})

export {axiosCarService, axiosProductService}
export default axiosPlaceholderService