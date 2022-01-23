import axios from 'axios';
import baseURL from "../settings/urls";

const axiosService = axios.create({baseURL});

export {axiosService}