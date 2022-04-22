const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const port = 4000;

app.use(cors());

const { Schema } = mongoose;
const book = new Schema({
  year: String,
  autor: String,
  title: String,
  publishing: String,
});

const Bookbase = mongoose.model("books", book);

const uri =
  "mongodb+srv://SleptsovKonstantin:sleptsov123321@cluster0.omltj.mongodb.net/Todolist?retryWrites=true&w=majority";
mongoose.connect(uri);

app.use(express.json());

app.get("/book", (req, res) => {
  Bookbase.find().then((result) => {
    res.send({ data: result });
  });
});

app.post("/createBook", (req, res) => {
  const newBook = new Bookbase(req.body);
  newBook.save().then((result) => {
    Bookbase.find().then((result) => {
      res.send({ data: result });
    });
  });
});

app.delete("/delBook", (req, res) => {
  const id = req.query._id;
  if (id) {
    Bookbase.deleteOne({ _id: id }).then(() => {
      Bookbase.find().then((result) => {
        res.send({ data: result });
      });
    });
  } else {
    res.status(422).send("Error! Params not correct");
  }
});

app.patch("/updateBook", (req, res) => {
  const body = req.body;
  const { id } = body;
  Bookbase.updateOne({ _id: id }, body).then(() => {
    Bookbase.find().then((result) => {
      res.send({ data: result });
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
