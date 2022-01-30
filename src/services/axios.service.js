import axios from "axios";
import baseURL, {placeholderURL} from "../configs/urls";

export const axiosCarService = axios.create({baseURL});
export const axiosPlaceholderService = axios.create({placeholderURL});