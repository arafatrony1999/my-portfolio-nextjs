import axios from "axios";

const API = axios.create({
    baseURL: 'http://portfolioapi.arafatrony.com/api'
    // baseURL: 'http://127.0.0.1:8000/api'
    // baseURL: 'https://portfolio-arafat.000webhostapp.com/api'
})

export default API;