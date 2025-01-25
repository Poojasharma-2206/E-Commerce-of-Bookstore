const express = require("express");
const app = express();
const port = 4040;
const cors = require("cors");
require("./Models/01db");
const Books = require("./Models/02books");

//mongoose is important when we are using pathch
const mongoose = require('mongoose')

//middleware
app.use(cors());
app.use(express.json());

app.post("/upload-book", async (req, res) => {
  try {
    // Step 1: Request body se data lena
    const newBook = new Books(req.body);

    // Step 2: Data save karna (await required)
    const savedBook = await newBook.save();

    // Step 3: Response send karna
    res.status(201).json(savedBook);
  } catch (err) {
    console.error("Error saving book:", err.message); 3333
    res.status(400).json({ message: err.message });
  }
});

//get all the books from the database
app.get("/all-books", async (req, res) => {
  try {
    const books = await Books.find();
    res.status(200).json(books);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch books", error: err.message });
  }
});

//updates a book data : patch or update
app.patch("/books/:id", async (req, res) => {
  try {
    const id = req.params.id; // URL se id extract karo
    const updateData = req.body; // Body se updated data lo

    // Check if the ID is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    // Update the book
    const updatedBook = await Books.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(updatedBook); // Updated book return karo
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to update book", error: err.message });
  }
});

app.get("/", (req, res) => {
  res.send("helllllllooooo");
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
