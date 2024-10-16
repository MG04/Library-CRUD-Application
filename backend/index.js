import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/books", async (req, res) => {
  try {
    const books = await prisma.books.findMany();
    res.json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching books" });
  }
});

app.post("/books", async (req, res) => {
  try {
    const newBook = await prisma.books.create({
      data: {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price ? parseFloat(req.body.price) : null, // Handle optional price
        cover: req.body.cover,
      },
    });
    res.status(200).json({ message: "Success - Book created" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating book" });
  }
});

app.delete("/books/:id", async (req, res) => {
  try {
    const bookId = parseInt(req.params.id); // Ensure ID is parsed as an integer
    const deletedBook = await prisma.books.delete({
      where: { id: bookId },
    });
    if (deletedBook) {
      res.json({ message: "Book deleted successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error deleting book OR Book not found" });
  }
});

app.put("/books/:id", async (req, res) => {
  try {
    const bookId = parseInt(req.params.id); // Ensure ID is parsed as an integer

    const updatedBook = await prisma.books.update({
      where: { id: bookId },
      data: {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        cover: req.body.cover,
      },
    });

    if (updatedBook) {
      res.status(200).json({ message: "Book updated successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating book OR Book not found" });
  }
});

app.listen(8800, () => {
  console.log("Connected to backend.");
});
