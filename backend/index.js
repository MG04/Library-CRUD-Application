import express from "express";
import cors from "cors";
import book from "./book.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/books", async (req, res) => {
  try {
    const books = await book.findAll();
    res.json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching books" });
  }
});

app.post("/books", async (req, res) => {
  try {
    const newBook = await book.create({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price ? parseFloat(req.body.price) : null, // Handle optional price
      cover: req.body.cover,
    });
    res.json(newBook);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating book" });
  }
});

app.delete("/books/:id", async (req, res) => {
  try {
    const bookId = parseInt(req.params.id); // Ensure ID is parsed as an integer
    const deletedBook = await book.destroy({
      where: { id: bookId },
    });
    if (deletedBook) {
      res.json({ message: "Book deleted successfully" });
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error deleting book" });
  }
});

app.put("/books/:id", async (req, res) => {
  try {
    const bookId = parseInt(req.params.id); // Ensure ID is parsed as an integer

    const updatedBook = await book.findByPk(bookId);
    updatedBook.title = req.body.title;
    updatedBook.description = req.body.description;
    updatedBook.price = req.body.price;
    updatedBook.cover = req.body.cover;
    await updatedBook.save();

    if (updatedBook) {
      res.json(updatedBook);
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating book" });
  }
});

app.listen(8800, () => {
  console.log("Connected to backend.");
});
