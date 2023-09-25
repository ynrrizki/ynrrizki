import axios from "axios";
import constant from "./constant";

const http = axios.create({
    headers: {
        "Content-type": "application/json",
        "api-key": constant.key
    }
});

export default http;