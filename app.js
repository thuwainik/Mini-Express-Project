const express = require("express");
const connectDB = require("./database");
const booksRoutes = require("./api/books/books.routes");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const path = require("path");

connectDB();
app.use(express.json());
app.use("/src/img", express.static(path.resolve(__dirname, "./src/img")));

app.use("/books", booksRoutes);

// app.use((req, res, next) => {
//     console.log("i am being called in this path", req.path);
//     next();
//   });

app.listen(PORT, () => {
  console.log(`Connected to port:${PORT}`);
});
