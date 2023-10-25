const { Schema, model } = require("mongoose");
// const myImage = require("../src/img/quebpng.png");
// const express = require("express");
// const Books = express();
// Books.use(express.static("public"));
// Books.use('src\img\quebpng.png',)

const BookSchema = Schema({
  BookTitle: { type: String, required: true },
  BookAuthor: { type: String, required: true },
  BookPrice: { type: Number, default: 5 },
  BookImage: {
    data: Buffer,
    contentType: String,
    // default: myImage,
  },
});

module.exports = model("Books", BookSchema);
