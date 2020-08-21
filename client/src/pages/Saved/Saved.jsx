import React, { useEffect, useState } from "react";
import SavedBook from "../../components/SavedBook/SavedBook";
import API from "../../utils/API";

const Saved = () => {
  const [savedBooks, setSavedBooks] = useState([]);
  useEffect(() => {
    API.getSavedBooks()
      .then(response => {
        setSavedBooks(response.data.data);
        console.log(response.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {savedBooks.map(book => (
        <SavedBook key={book._id} bookData={book} />
      ))}
    </div>
  );
};

export default Saved;
