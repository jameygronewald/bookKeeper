import React from "react";
import "./SavedBook.css";

const SavedBook = ({ bookData }) => {
  return (
    <div className="bookContainer">
      <div className="row">
        <div className="bold">{bookData.title}</div>
        <div className="bold">By: {bookData.author}</div>
      </div>
      <div className="row">
        <img
          src={bookData.coverURL}
          alt={`Cover of '${bookData.title}'`}
        />
        <p className="column">{bookData.description}</p>
      </div>
    </div>
  );
};

export default SavedBook;
