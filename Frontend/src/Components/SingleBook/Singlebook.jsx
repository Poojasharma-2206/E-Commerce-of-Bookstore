import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Singlebook = () => {
  const { id } = useParams(); // URL se book ka ID le rahe hain
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`http://localhost:4040/single-book/${id}`);
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error("Error fetching book:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!book) {
    return <h2>Book not found!</h2>;
  }

  return (
    <div className="mt-28 px-4 lg:px-24">
      {/* <p>Author: {book.author}</p> */}
      {/* <p>{book.bookDecsription}</p> */}

      {/* Image Display */}
      {book.imageurl && (
        <img
          src={book.imageurl}
          alt={book.title}
          // style={{ width: "300px", borderRadius: "10px" }}
          className="h-96"
        />
      )}
      <h1>{book.title}</h1>
    </div>
  );
};

export default Singlebook;
