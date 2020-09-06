import React from "react";

const BookInfo = ({ book }) => {
  return (
    <div className="foundBook">
      <h2 className="foundTitle">Title: {book.title}</h2>
      {book.authors && <h2 className="foundAuthor">Author: {book.authors[0]}</h2>}
      {book.imageLinks && <img src={book.imageLinks.thumbnail} alt={`Cover of '${book.title}'`} />}
      <p className="bookDesc">Description: {book.description}</p>
    </div>
  );
};

export default BookInfo;
