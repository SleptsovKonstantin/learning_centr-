const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const port = 4000;

app.use(cors());

const { Schema } = mongoose;

const userName = new Schema({
  fullName: String,
  email: String,
  password: String,
});

const Users = mongoose.model("user", userName);

const uri =
  "mongodb+srv://SleptsovKonstantin:sleptsov123321@cluster0.omltj.mongodb.net/Todolist?retryWrites=true&w=majority";
mongoose.connect(uri);

app.use(express.json());

app.patch("/change", (req, res) => {
  const body = req.body;
  const { id } = body;
  Users.updateOne({ _id: id }, body).then(() => {
    Users.find().then((result) => {
      res.send({ data: result });
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
