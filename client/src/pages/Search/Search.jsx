import React, { useState } from "react";
import Form from "../../components/Form/Form";
import API from "../../utils/API";
import BookInfo from "../../components/BookInfo/BookInfo";
import Button from "../../components/Button/Button";

const Search = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  const handleChange = ({ target: { value } }) => {
    setSearch(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    API.getBook(search)
      .then(response => {
        const bookArray = response.data.items;
        console.log(bookArray);
        setBooks(bookArray);
        setSearch("");
      })
      .catch(err => {
        console.log(err);
      });
  };

  const addNewBook = book => {
    const bookObject = {
      id: book.id,
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors[0],
      description: book.volumeInfo.description,
      coverURL: book.volumeInfo.imageLinks.thumbnail
    };
    API.saveBook(bookObject)
      .then(response => {
        console.log(`Successfully saved ${response}.`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="formRow">
        <div className="formCol">
          <Form
            className="form"
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
        <div className="col">
          {books.map(book => (
            <div key={book.id} className="searchResultRow">
              {books && <BookInfo book={book.volumeInfo} />}
              {books && (
                <Button
                  onClick={e => {
                    e.preventDefault();
                    addNewBook(book);
                  }}
                  buttonText="Save book"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
