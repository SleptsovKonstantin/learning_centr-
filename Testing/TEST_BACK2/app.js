// const fs = requeire('fs');

const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./src/routes/index");
const port = 8080;

global.__basedir = __dirname;

app.use(cors());
app.use(express.json());

routes(app);

app.listen(port, () => {
  console.log(`Application listening on port: ${port}`);
});