import React, { useState, useEffect } from "react";
import { Textarea, Button } from "flowbite-react";
import { useParams } from "react-router-dom";

const EditBook = () => {
  const { id } = useParams();
  const [bookData, setBookData] = useState(null);
  const [selectedBookGenre, setSelectedBookGenre] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:4040/single-book/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setBookData(data);
          setSelectedBookGenre(data.genre || "Fiction");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching book data:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-center text-lg font-semibold">Loading...</p>;
  }

  if (!bookData) {
    return (
      <p className="text-center text-lg font-semibold text-red-500">
        Book not found
      </p>
    );
  }

  const bookGenres = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Historical",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design",
  ];

  const handleChangeSelectedValue = (e) => {
    setSelectedBookGenre(e.target.value);
  };

  const handleBookSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedBook = {
      title: form.title.value,
      author: form.author.value,
      imageurl: form.imageurl.value,
      genre: selectedBookGenre,
      bookDescription: form.bookDescription.value,
      bookPdfUrl: form.bookPdfUrl.value,
    };

    fetch(`http://localhost:4040/books/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBook),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Book Updated Successfully!");
      })
      .catch((error) => console.error("Error updating book:", error));
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Edit Book</h2>
      <form
        onSubmit={handleBookSubmit}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <label htmlFor="title" className="text-sm font-medium text-black">
              Book Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              defaultValue={bookData.title}
              required
              className="block text-gray-700 w-full p-2.5 border border-gray-200 rounded-lg"
            />
          </div>

          <div className="lg:w-1/2">
            <label htmlFor="author" className="text-sm font-medium text-black">
              Book Author
            </label>
            <input
              id="author"
              name="author"
              type="text"
              defaultValue={bookData.author}
              required
              className="block text-gray-700 w-full p-2.5 border border-gray-200 rounded-lg"
            />
          </div>
        </div>

        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <label
              htmlFor="imageurl"
              className="text-sm font-medium text-black"
            >
              Book Image URL
            </label>
            <input
              id="imageurl"
              name="imageurl"
              type="text"
              defaultValue={bookData.imageurl}
              required
              className="block text-gray-700 w-full p-2.5 border border-gray-200 rounded-lg"
            />
          </div>

          <div className="lg:w-1/2">
            <label
              htmlFor="inputState"
              className="text-sm font-medium text-black"
            >
              Book Genre
            </label>
            <select
              name="genre"
              id="inputState"
              className="block text-gray-700 w-full p-2.5 border border-gray-200 rounded-lg"
              value={selectedBookGenre}
              onChange={handleChangeSelectedValue}
            >
              {bookGenres.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="bookDescription"
            className="text-sm font-medium text-black"
          >
            Book Description
          </label>
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

        <div>
          <label
            htmlFor="bookPdfUrl"
            className="text-sm font-medium text-black"
          >
            Book PDF URL
          </label>
          <input
            id="bookPdfUrl"
            name="bookPdfUrl"
            type="text"
            defaultValue={bookData.bookPdfUrl}
            required
            className="block text-gray-700 w-full p-2.5 border border-gray-200 rounded-lg"
          />
        </div>

        <Button
          type="submit"
          className="bg-teal-900 mt-5 text-white font-medium py-1 rounded-lg"
        >
          Update Book
        </Button>
      </form>
    </div>
  );
};

export default EditBook;

