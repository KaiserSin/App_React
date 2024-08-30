import axios from 'axios';
import axiosRetry from 'axios-retry';

const baseUrl = "http://31.129.54.67:8080";

axiosRetry(axios, { 
    retries: 10, 
    retryDelay: (retryCount) => {
        return retryCount * 1000; 
    },
    retryCondition: () => {
        return true;
    }
});

const getItems = (first, second) => {
    const params = {
        "from": first, 
        "to": second
    };
    const queryString = new URLSearchParams(params).toString();
    return axios.get(`${baseUrl}/getGoodsCompatByIdInRange?${queryString}`)
        .then(response => response.data)
        .catch(error => {
            console.error('Ошибка при получении элементов:', error);
            throw error;
        });
};

const getSize = () => {
    return axios.get(`${baseUrl}/getGoodsCount`)
        .then(response => response.data)
        .catch(error => {
            console.error('Ошибка при получении размера:', error);
            throw error;
        });
};

export default {
    getItems,
    getSize
};