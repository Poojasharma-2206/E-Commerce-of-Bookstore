import React from "react";

const UploadBook = () => {
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload A Book</h2>

      <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        <div>
          <div className="mb-2 block">
            <label
              htmlFor="email1"
              className="text-sm font-medium text-gray-700"
            >
              Your email
            </label>
          </div>
          <input
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required
            className="block w-full p-2.5 border border-gray-300 rounded-lg"
          />
        </div>
        {/* <div>
          <div className="mb-2 block">
            <label
              htmlFor="password1"
              className="text-sm font-medium text-gray-700"
            >
              Your password
            </label>
          </div>
          <input
            id="password1"
            type="password"
            required
            className="block w-full p-2.5 border border-gray-300 rounded-lg"
          />
        </div> */}
        {/* <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="remember"
            className="h-4 w-4 border-gray-300"
          />
          <label
            htmlFor="remember"
            className="text-sm font-medium text-gray-700"
          >
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="w-full py-2.5 mt-4 bg-teal-900 text-white hover:bg-teal-700 rounded-lg "
        >
          Submit
        </button> */}
      </form>
    </div>
  );
};

export default UploadBook;
