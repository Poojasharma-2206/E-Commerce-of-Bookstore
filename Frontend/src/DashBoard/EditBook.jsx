import React from "react";
import { Textarea, Button } from "flowbite-react";
import { useLoaderData, useParams } from "react-router-dom";

const EditBook = () => {
  const { id } = useParams();
  const { title, author, imageurl, genre, bookDescription, bookPdfUrl } =
    useLoaderData();

  const bookgenre = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Firction",
    "Fantasy",
    "Historical",
    "Horror",
    "Bibiliography",
    "AuthoBiography",
    "History",
    "Self-help",
    "Memoir",
    "Bussiness",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design",
  ];

  const [selectedBookGenre, setselectedBookGenre] = useState(bookgenre[0]);

  const handleChangeSelectedValue = (e) => {
    console.log(e.target.value);
    setselectedBookGenre(e.target.value);
  };

  //handle book submission
  const handleBookSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const author = form.author.value;
    const imageurl = form.imageurl.value;
    const genre = form.genre.value;
    const bookDecscription = form.bookDescription.value;
    const booksPdfUrl = form.booksPdfUrl.value;

    const bookobj = {
      title,
      author,
      imageurl,
      genre,
      bookDecscription,
      booksPdfUrl,
    };

    console.log(bookobj);

    //send data to DB
    fetch("http://localhost:4040/upload-book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookobj),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book Uploaded Successfully!!!!");
        form.reset();
      });
  };
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload A Book</h2>

      <form
        onSubmit={handleBookSubmit}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        {/*1st Row */}
        <div className="flex gap-8">
          <div className="lg:w1/2">
            <div className="mb-2 block">
              <label
                htmlFor="title"
                value="title"
                className="text-sm font-medium text-black"
              >
                Book Title
              </label>
            </div>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Book Name"
              required
              className="block text-gray-700 w-[600px] p-2.5 border focus:border-l-teal-600 focus:ring-teal-500 border-gray-200 rounded-lg"
            />
          </div>

          {/*Author name */}
          <div className="lg:w1/2">
            <div className="mb-2 block">
              <label
                htmlFor="author"
                value="author"
                className="text-sm font-medium text-black"
              >
                Book Author
              </label>
            </div>
            <input
              id="author"
              name="author"
              type="text"
              placeholder="Author Name"
              required
              className="block text-gray-700 w-[600px] p-2.5 border focus:border-l-teal-600 focus:ring-teal-500 border-gray-200 rounded-lg"
            />
          </div>
        </div>
        {/*2nd Row */}
        {/*imageurl */}
        <div className="flex gap-8">
          <div className="lg:w1/2">
            <div className="mb-2 block">
              <label
                htmlFor="imageurl"
                value="imageurl"
                className="text-sm font-medium text-black"
              >
                Book Image URL
              </label>
            </div>
            <input
              id="imageurl"
              name="imageurl"
              type="text"
              placeholder="Book Image"
              required
              className="block text-gray-700 w-[600px] p-2.5 border focus:border-l-teal-600 focus:ring-teal-500 border-gray-200 rounded-lg"
            />

            {/*genre name */}
          </div>
          <div className="lg:w1/2">
            <div className="mb-2 block">
              <label
                htmlFor="inputState"
                value="genre"
                className="text-sm font-medium text-black "
              >
                Book Genre
              </label>
            </div>
            <select
              name="genre"
              id="inputState"
              className="block text-gray-700 w-[600px] p-2.5 border focus:border-l-teal-600 focus:ring-teal-500 border-gray-200 rounded-lg"
              value={selectedBookGenre}
              onChange={handleChangeSelectedValue}
            >
              {bookgenre.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/**book description */}
        <div>
          <div className="mb-2 block">
            <label
              htmlFor="bookDescription"
              value="bookDecsription"
              className="text-sm font-medium text-black"
            >
              Book Decsription
            </label>
          </div>

          <Textarea
            id="bookDescription"
            name="bookDescription"
            placeholder="Write Your Book Description....."
            type="text"
            required
            rows={5}
            className="w-full rounded-lg border font-medium border-gray-200 bg-white p-2.5 !text-gray-700 focus:border-l-teal-500 focus:ring-teal-500"
          />
        </div>

        {/* boom pdf links */}

        <div>
          <div className="mb-2 block">
            <label
              htmlFor="booksPdfUrl"
              value="booksPdfUrl"
              className="text-sm font-medium text-black"
            >
              Book PDF URL
            </label>
          </div>
          <input
            id="booksPdfUrl"
            name="booksPdfUrl"
            type="text"
            placeholder="book pdf url"
            required
            className="block text-gray-700 w-full p-2.5 border focus:border-l-teal-600 focus:ring-teal-500 border-gray-200 rounded-lg"
          />
        </div>
        <Button
          type="submit"
          className="bg-teal-900 mt-5 flex items-center justify-center text-white font-medium py-1 hover:bg-teal-700 rounded-lg"
        >
          Upload Book
        </Button>
      </form>
    </div>
  );
};

export default EditBook;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const EditBook = () => {
//   const { id } = useParams();
//   const [book, setBook] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBook = async () => {
//       try {
//         const response = await fetch(`http://localhost:4040/single-book/${id}`);
//         const data = await response.json();
//         setBook(data);
//       } catch (error) {
//         console.error("Error fetching book:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBook();
//   }, [id]);

//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

//   if (!book) {
//     return <h2>Book not found!</h2>;
//   }

//   return (

//     <div className="mt-28 px-4 lg:px-24">
//       edit
//       {/* <p>Author: {book.author}</p> */}
//       {/* <p>{book.bookDecsription}</p> */}
//       {/* Image Display */}
//       {book.imageurl && (
//         <img
//           src={book.imageurl}
//           alt={book.title}
//           // style={{ width: "300px", borderRadius: "10px" }}
//           className="h-96"
//         />
//       )}
//       <h1>{book.title}</h1>
//     </div>
//   );
// };

// export default EditBook;
