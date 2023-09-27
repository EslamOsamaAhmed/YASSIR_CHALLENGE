const axiosCall = require('axios');

exports.integrationApi = async (api_url, route, data) => {
    const axios = axiosCall.create({
        baseURL: api_url,
    });

    return await axios.get(`/${route}?${data}`);
}