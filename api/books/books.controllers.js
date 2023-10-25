const Books = require("../../models/Books");

exports.getAllBooks = async (req, res) => {
  try {
    const allBooks = await Books.find({});
    res.status(200).json({ allBooks });
  } catch (error) {
    res.status(500).json({ error: "error" });
  }
};
exports.getOneBook = async (req, res) => {
  try {
    const { BookId } = req.params;
    const OneBook = await Books.findById(BookId);
    OneBook
      ? res.status(200).json({ OneBook })
      : res.status(404).json({ error: "Book not found!!!" });
  } catch (error) {
    res.status(500).json({ error: "error" });
  }
};
exports.createBook = async (req, res) => {
  try {
    const newBook = await Books.create(req.body);
    res.status(201).json({ newBook });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.updtBook = async (req, res) => {
  try {
    const { BookId } = req.params;
    const OneBook = await Books.findById(BookId);
    if (OneBook) OneBook.updateOne(req.body);
    OneBook
      ? res.status(200)
      : res.status(404).json({ error: "Book not found!!!" });
  } catch (error) {
    res.status(500).json({ error: "error" });
  }
};
exports.deleteBook = async (req, res) => {
  try {
    const { BookId } = req.params;
    const OneBook = await Books.findById(BookId);
    if (OneBook) OneBook.deleteOne(req.body);
    OneBook
      ? res.status(200)
      : res.status(404).json({ error: "Book not found!!!" });
  } catch (error) {
    res.status(500).json({ error: "error" });
  }
};
