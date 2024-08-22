import axios from 'axios';

const baseUrl = "http://31.129.54.67:8080";

const getItems = (first, second) => {
    const params = {
        "from": first, 
        "to": second
    }
    const queryString = new URLSearchParams(params).toString();
    const request = axios.get(`${baseUrl}/getGoodsCompatByIdInRange?${queryString}` );
    return request.then(response => response.data);
}


const getSize = () => {
    const request = axios.get(`${baseUrl}/getGoodsCount`); 
    return request.then(response => response.data);
}

export default {
    getItems,
    getSize
};