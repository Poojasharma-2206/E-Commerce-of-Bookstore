import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageBook = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4040/all-book")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);

  //delete books
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:4040/books/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {alert("Book is Deleted Successfully!!")
        // setAllBooks(data)
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold text-black">Manage Your Books</h2>

      {/** Table for book data*/}
      <div className="bg-white shadow-lg rounded-lg p-4">
        <table className="lg:w-[1180px] border-collapse">
          {/* Table Head */}
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left text-black p-3">No.</th>
              <th className="text-left text-black p-3">Book Name</th>
              <th className="text-left text-black p-3">Author Name</th>
              <th className="text-left text-black p-3">Genre</th>
              <th className="text-left text-black p-3">Price</th>
              <th className="text-left text-black p-3">Edit or Manage</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {allBooks.map((book, index) => (
              <tr key={book._id} className="border-t hover:bg-gray-50">
                <td className="p-3 text-black">{index + 1}</td>
                <td className="p-3 text-black">{book.title}</td>
                <td className="p-3 text-black">{book.author}</td>
                <td className="p-3 text-black">{book.genre}</td>
                <td className="p-3 text-black">${book.price}</td>
                <td className="p-3">
                  <Link
                    className="text-cyan-600 hover:underline "
                    to={`/admin/dashboard/editBook/${book._id}`} // Correct path
                  >
                    <p>Edit</p>
                  </Link>
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {/* <tr className="border-t hover:bg-gray-50">
              <td className="p-3 text-black">01</td>
              <td className="p-3 text-black">Apple MacBook Pro 17"</td>
              <td className="p-3 text-black">Silver</td>
              <td className="p-3 text-black">Laptop</td>
              <td className="p-3 text-black">$2999</td>
              <td className="p-3">
                <a href="#" className="text-blue-600 hover:underline">
                  Edit
                </a>
              </td>
            </tr>
            <tr className="border-t hover:bg-gray-50">
              <td className="p-3 text-black">Microsoft Surface Pro</td>
              <td className="p-3 text-black">White</td>
              <td className="p-3 text-black">Laptop PC</td>
              <td className="p-3 text-black">$1999</td>
              <td className="p-3">
                <a href="#" className="text-blue-600 hover:underline">
                  Edit
                </a>
              </td>
            </tr>
            <tr className="border-t hover:bg-gray-50">
              <td className="p-3 text-black">Magic Mouse 2</td>
              <td className="p-3 text-black">Black</td>
              <td className="p-3 text-black">Accessories</td>
              <td className="p-3 text-black">$99</td>
              <td className="p-3">
                <a href="#" className="text-blue-600 hover:underline">
                  Edit
                </a>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBook;
