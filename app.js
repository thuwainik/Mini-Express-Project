const express = require("express");
const connectDB = require("./database");
const booksRoutes = require("./api/books/books.routes");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/books", booksRoutes);

connectDB();
app.listen(PORT, () => {
  console.log(`Connected to port:${PORT}`);
});
