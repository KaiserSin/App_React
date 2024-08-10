import axios from 'axios';

const baseUrl = "http://127.0.0.1:8000/items";

const getItems = (first, second) => {
    const request = axios.get(baseUrl, { params: { "first": first, "second": second } });
    return request.then(response => response.data);
}

const getSize = () => {
    const request = axios.get(`${baseUrl}/size`); 
    return request.then(response => response.data);
}

export default {
    getItems,
    getSize
};