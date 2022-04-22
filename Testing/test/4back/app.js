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

app.delete("/delete", (req, res) => {
  const id = req.query._id;
  if (id) {
    Users.deleteOne({ _id: id }).then(() => {
      Users.find().then((result) => {
        res.send({ data: result });
      });
    });
  } else {
    res.status(422).send("Error! Params not correct");
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
