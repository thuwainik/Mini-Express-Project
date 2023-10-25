const express = require("express");
const router = express.Router();
const {
  getAllBooks,
  getOneBook,
  createBook,
  updtBook,
  deleteBook,
} = require("./books.controllers");

router.get("/", getAllBooks);
router.get("/:BookId", getOneBook);
router.post("/", createBook);
router.put("/:BooksId", updtBook);
router.delete("/:BookId", deleteBook);

module.exports = router;
