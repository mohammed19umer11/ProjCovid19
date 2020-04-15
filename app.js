const express = require("express");
const app = express();
const PORT = require("./utils/port").PORT;
const LOGGER = require("./utils/logger");
const logger = require("morgan");
const host = "localhost";








app.listen(PORT, error => {
    if (error) {
        return LOGGER.error(error.meesage);
    }
    LOGGER.appStarted(PORT, host);
  });