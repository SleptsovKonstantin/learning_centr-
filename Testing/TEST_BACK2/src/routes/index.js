const express = require("express");
const router = express.Router();
const controller = require('../controller/file.controller')

const routes = (app) => {
  router.post('/upload', controller.upload);
  router.post('/files', controller.appendFile);
  router.delete('/files/:name', controller.deleteFile);
  app.use(router);
}

module.exports = routes;