import axios from "axios";
import {baseURL, placeholderURL} from "../configs/urls";

const axiosCarService = axios.create({baseURL:baseURL});


const axiosPlaceholderService = axios.create({baseURL: placeholderURL});

export {axiosCarService}
export default axiosPlaceholderService