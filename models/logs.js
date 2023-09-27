const mongoose = require("mongoose");
const {bool} = require("joi");

const Schema = mongoose.Schema;

const logsSchema = new Schema({
    processName: { type: String, required: true },
    processStatus: { type: Boolean, required: true },
    processReason: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("logs", logsSchema);