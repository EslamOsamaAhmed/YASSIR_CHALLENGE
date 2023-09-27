const express = require("express");
const paramsValidation = require('../middlewares/paramsValidation')
const postController = require("../controllers/postController");

const router = express.Router();

router.post("/check_air_quality",paramsValidation.validate ,postController.airQualityChecker);
router.get("/check_most_polluted_point" ,postController.fetchMostPollutedPoint);

module.exports = router;