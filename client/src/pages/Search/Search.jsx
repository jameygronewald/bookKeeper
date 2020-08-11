import React, { useState } from "react";
import Form from "../../components/Form/Form";
import API from "../../utils/API";
import BookInfo from "../../components/BookInfo/BookInfo";
import Button from "../../components/Button/Button";

const Search = () => {
  const [search, setSearch] = useState("");
  const [book, setBook] = useState({});

  const handleChange = ({ target: { value } }) => {
    setSearch(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    API.getBook(search)
      .then(response => {
        const bookInfo = response.data.items[0].volumeInfo;
        setBook({
          title: bookInfo.title,
          author: bookInfo.authors[0],
          description: bookInfo.description,
          coverURL: bookInfo.imageLinks.thumbnail,
        });
        setSearch("");
      })
      .catch(err => {
        console.log(err);
      });
  };

  const addNewBook = (event) => {
    event.preventDefault();
    console.log('clicked')
    API.saveBook(book)
      .then(response => {
        console.log(`Successfully saved ${response}.`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <Form handleChange={handleChange} handleSubmit={handleSubmit} />
      {book.title && <BookInfo book={book} />}
      {book.title && <Button onClick={addNewBook} buttonText="Save book" />}
    </div>
  );
};

export default Search;
