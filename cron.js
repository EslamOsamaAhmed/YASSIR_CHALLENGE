require("dotenv").config();
const cron = require('node-cron');
const axios = require('axios');
const checkAirQuality = async (latitude, longitude) => {
    await axios.post(process.env.SERVER + `v1/api/check_air_quality?lat=${latitude}&lon=${longitude}`);
}

cron.schedule('* * * * *', async () => {
    console.log("***************CRON SCHEDULE STARTED SUCCESSFULLY***************");
    await checkAirQuality(48.856613, 2.352222);
})