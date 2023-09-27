require('dotenv').config()

const apiRouter = require("./api_routes/routes");
const express = require('express');
const cors = require("cors");
const app = express();
const mongoose = require("mongoose").default;
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

mongoose.connect(process.env.MONGODB_URL).then(() => {
    if (process.env.NODE_ENV !== "test") {
        console.log("Connected to %s", process.env.MONGODB_URL);
        console.log("App is running ... \n");
    }
 }).catch(err => {
    console.error("App starting error:", err.message);
    process.exit(1);
});

app.use(express.json());

// For allowing cross-origin requests
app.use(cors());

app.use(express.urlencoded({ extended: false }));

//Route Prefixes
app.use("/api/v1", apiRouter);
const options = {
    explorer: true
};

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

app.listen(process.env.SERVER_PORT, () => console.log(`Example app is listening on port ${process.env.SERVER_PORT}.`));
