import React from "react";
import "./SavedBook.css";
import Button from "../Button/Button";

const SavedBook = ({ bookData, deleteFunction }) => {
  return (
    <div className="bookContainer">
      <div className="row">
        <div className="bold">{bookData.title}</div>
        <div className="bold">By: {bookData.author}</div>
      </div>
      <div className="row">
        <img src={bookData.coverURL} alt={`Cover of '${bookData.title}'`} />
        <p className="column">{bookData.description}</p>
      </div>
      <Button
        onClick={e => {
          e.preventDefault();
          deleteFunction(bookData._id, bookData.title);
        }}
        buttonText="Delete Book"
      />
    </div>
  );
};

export default SavedBook;
