
const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./src/routes/index");
const port = 7000;

app.use(cors());
app.use(express.json());

routes(app);

app.listen(port, () => {
  console.log(`Application listening on port: ${port}`);
});