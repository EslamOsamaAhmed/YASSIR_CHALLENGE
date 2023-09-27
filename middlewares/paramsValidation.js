const validation = require('../validators/validationSchema');
const apiResponse = require("../helpers/apiResponse");

exports.validate = async (req, res, next) => {
    const { error } = validation.schema.validate(req.query);

    if (error) {
        return apiResponse.ErrorResponse(res, error.details[0].message);
    }

    next();
}