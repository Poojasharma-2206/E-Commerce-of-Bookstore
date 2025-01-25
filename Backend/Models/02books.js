//DataBase Connection

const mongoose = require("mongoose"); //mngs ki helps se scheema bnayenge, jo mdb ke coll se conn rhga, or opr perform honge

const bookSchema = new mongoose.Schema({}, { strict: false });

const Book = mongoose.model("bookstore", bookSchema);

module.exports = Book;
