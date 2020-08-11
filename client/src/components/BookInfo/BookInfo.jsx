import React from 'react';

const BookInfo = ({ book }) => {
    return (
        <div>
            <h2>Title: {book.title}</h2>
            <h2>Author: {book.author}</h2>
            <p>Description: {book.description}</p>
            <img src={book.coverURL} alt={`Cover of '${book.title}'`}/>
        </div>
    );
};

export default BookInfo;