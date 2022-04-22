const express = require("express");
const router = express.Router();
const controller = require("../controller/file.controller");
const middleWare = require("../middleware/upload");

const routes = (app) => {
  router.post("/registration", middleWare, controller.registration);
  router.post("/autorization", controller.autorization);
  app.use(router);
};

module.exports = routes;
