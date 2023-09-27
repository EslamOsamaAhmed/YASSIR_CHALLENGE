const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const airQualitySchema = new Schema({
    ts: { type: String, required: true },
    aqius: { type: Number, required: true },
    mainus: { type: String, required: true },
    aqicn: { type: Number, required: true },
    maincn: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model("airQuality", airQualitySchema);