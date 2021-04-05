import axios from "axios";

const {BASE_URL} = require('../../../../config');

const fetchCustomize = async () => {
    const response = await axios.get(`${BASE_URL}/categories`);
    console.log(response)
}
