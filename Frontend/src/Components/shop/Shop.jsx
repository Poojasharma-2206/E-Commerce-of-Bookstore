import React, { useState } from "react";
import { useEffect } from "react";
import { Card } from "flowbite-react";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4040/all-book")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:4040/all-book")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("Fetched Books:", data);  // ✅ Debugging log
  //       setBooks(data);
  //     })
  //     .catch((error) => console.error("Error fetching books:", error));
  // }, []);
  
  return (
    <div className="mt-28 px4 lg:px-24">
      <h2 className="text-5xl font-bold text-center">All Books Are Here</h2>

      <div className=" grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {books.map(book => (
          <Card className="mt-12 bg-white p-6 shadow-lg rounded-xl hover:shadow-2xl transition duration-300">
            <img src={book.imageurl} alt={book.title} className="h-96"/>
            <div className="mb-4">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>{book.title}</p>
            </h5>
            <p className="font-normal text-black dark:text-green-400">
              <p>
                Here are the biggest enterprise technology acquistion of 2021 so
                for, in reverse chronologyical order
              </p>
            </p>
            </div>

            <button className="bg-blue-700 font-semibold text-white py-2 rounded">Buy NOw</button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
