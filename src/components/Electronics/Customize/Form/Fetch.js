import axios from "axios";

const {BASE_URL} = require('../../../../config');
const lang = localStorage.getItem('lang') || 'en';

const Fetch = {
    categories: async () => {
        const response = await axios.get(`${BASE_URL}/categories`);
        let dataArr;
        if(lang === 'ar') {
            dataArr = response.data.data.map( item => ({
                id: item.id,
                name: item.name_ar,
            }))
        } else {
            dataArr = response.data.data.map( item => ({
                id: item.id,
                name: item.name,
            }))
        }
        return dataArr;
    },

    products: async (id) => {
        const response = await axios.get(`${BASE_URL}/categories/${id}/products`);
        let dataArr;
        if(lang === 'ar') {
            dataArr = response.data.data.map( item => ({
                id: item.id,
                name: item.name_ar,
            }))
        } else {
            dataArr = response.data.data.map( item => ({
                id: item.id,
                name: item.name,
            }))
        }
        return dataArr;
    }
}

export default Fetch;
