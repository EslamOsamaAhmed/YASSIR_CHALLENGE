const integrationApi = require('../service/integration');
const queryParamsConverter = require("../helpers/queryParamsConverter")
const apiResponse = require("../helpers/apiResponse");

const airQualityModel = require("../models/airQuality");
const logsModel = require("../models/logs");

exports.airQualityChecker = async (req, res) => {
    try{
        const queryParams = queryParamsConverter.queryParamsConverter({
            key: process.env.AIR_VISUAL_API_KEY,
            lon: req.query.lon,
            lat: req.query.lat
        });

        await integrationApi.integrationApi(process.env.API_URL, 'nearest_city', queryParams).then(async (response) => {
            let pollutionData = response.data?.data?.current?.pollution;
            pollutionData['longitude'] = req.query.lon;
            pollutionData['latitude'] = req.query.lat;

            await airQualityModel.create(pollutionData).catch((e) => {
                logsModel.create({processName: 'CHECKING_AIR_QUALITY',
                    processStatus: false,
                    processReason: e.toString()})
            });

            return apiResponse.successResponseWithData(res, 'Fetched & Stored Data Successfully', {"Result": pollutionData});
        });
    } catch(e){
        return apiResponse.ErrorResponse(res, e.toString());
    }
}

exports.fetchMostPollutedPoint = async (req, res) => {
    const mostPollutedPoint = await airQualityModel.aggregate(
        [
            {
                $project:
                    {
                        _id: "$_id",
                        longitude: "$longitude",
                        latitude: "$latitude",
                        ts: "$ts",
                        createdAt: "$createdAt",
                        airQualityIndex: { $max: { $sum: [ "$aqius", "$aqicn" ] } }
                    }
            },
            {$sort:{airQualityIndex: -1}},
            {$limit:1}
        ]
    )
    return apiResponse.successResponseWithData(res, 'Fetched & Stored Data Successfully', mostPollutedPoint[0]);
}