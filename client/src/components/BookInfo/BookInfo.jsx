import React from "react";

const BookInfo = ({ book }) => {
  return (
    <div>
      <h2>Title: {book.title}</h2>
      <h2>Author: {book.authors[0]}</h2>
      <p className="bookDesc">Description: {book.description}</p>
      <img src={book.imageLinks.thumbnail} alt={`Cover of '${book.title}'`} />
    </div>
  );
};

export default BookInfo;
