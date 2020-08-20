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
        // setBook({
        //   title: bookInfo.title,
        //   author: bookInfo.authors[0],
        //   description: bookInfo.description,
        //   coverURL: bookInfo.imageLinks.thumbnail,
        // });
        setSearch("");
      })
      .catch(err => {
        console.log(err);
      });
  };

  // const addNewBook = event => {
  //   event.preventDefault();
  //   console.log("clicked");
  //   API.saveBook(book)
  //     .then(response => {
  //       console.log(`Successfully saved ${response}.`);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  return (
    <div>
      <div className='formRow'>
        <div className='formCol'>
          <Form
            className="form"
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
        {/* <div className='col'>
          {book.title && <BookInfo book={book} />}
          {book.title && <Button onClick={addNewBook} buttonText="Save book" />}
        </div> */}
      </div>
    </div>
  );
};

export default Search;
