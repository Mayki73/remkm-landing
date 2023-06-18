const express = require("express");
const requestController = require("../controllers/request.controllers");
const requestRouter = express.Router();

requestRouter.post("/api/email", requestController.sendEmail);

module.exports = requestRouter;
