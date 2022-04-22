const express = require("express");
const router = express.Router();
const controller = require("../controller/file.controller");
const middleWare = require("../middleware/upload");

const routes = (app) => {
  router.post("/save", middleWare, controller.save);
  app.use(router);
};

module.exports = routes;
