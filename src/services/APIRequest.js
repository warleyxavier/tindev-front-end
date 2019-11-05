import axios from "axios";

const APIRequest = axios.create({
    baseURL: "http://127.0.0.1:3333/"
});

export default APIRequest;