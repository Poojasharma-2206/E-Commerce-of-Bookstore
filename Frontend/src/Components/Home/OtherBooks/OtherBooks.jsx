import React, { useEffect, useState } from "react";
import BookCard from "../../BooksCard/BookCard";

const OtherBooks = () => {
  const [books, setbooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4040/all-books")
      .then((res) => res.json())
      .then((data) => setbooks(data.slice(0, 6)));
  }, []);

  return (
    <div>
      <BookCard books={books} headline="Other Books" />
    </div>
  );
};

export default OtherBooks;
