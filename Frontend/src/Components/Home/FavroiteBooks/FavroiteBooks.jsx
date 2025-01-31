import React, { useEffect, useState } from "react";
import BookCard from "../../BooksCard/BookCard";

const FavroiteBooks = () => {
  const [books, setbooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4040/all-books")
      .then((res) => res.json())
      .then((data) => setbooks(data));
  }, []);

  return <div>
    <BookCard books={books} headline="Best Saller Books"/>
  </div>;
};

export default FavroiteBooks;
