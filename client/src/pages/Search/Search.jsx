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

  const addNewBook = event => {
    event.preventDefault();
    console.log("clicked");
    // API.saveBook(book)
    //   .then(response => {
    //     console.log(`Successfully saved ${response}.`);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
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
        {books.map(book => (
          <div key={book.id} className="col">
            {books && <BookInfo book={book.volumeInfo} />}
            {books && <Button onClick={addNewBook} buttonText="Save book" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
