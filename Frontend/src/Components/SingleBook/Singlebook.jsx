import React from "react";
import { useLoaderData } from "react-router-dom";

const Singlebook = () => {
  const { _id, title, author }  = useLoaderData(); // ✅ Loader se data fetch kar raha hai


  return (
    <div>
      SingleBook:{_id}
    </div>
  );
};

export default Singlebook;
