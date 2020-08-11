import React, { useEffect, useState } from "react";
import BookInfo from "../../components/BookInfo/BookInfo";
import API from "../../utils/API";

const Saved = () => {
  const [savedBooks, setSavedBooks] = useState([]);
  useEffect(() => {
    API.getSavedBooks()
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  });

  return (
    <div>
      <BookInfo />
    </div>
  );
};

export default Saved;
