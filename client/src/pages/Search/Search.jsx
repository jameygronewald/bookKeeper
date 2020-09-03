import React, { useState, useContext } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import API from "../../utils/API";
import BookInfo from "../../components/BookInfo/BookInfo";
import Button from "../../components/Button/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../utils/UserContext";
const { authConfig } = require('../../utils/configHelper');

const Search = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  const { sessionToken, setUserInfo } = useContext(UserContext);

  const handleChange = ({ target: { value } }) => {
    setSearch(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    API.getBooks(search)
      .then(response => {
        const bookArray = response.data.items;
        setBooks(bookArray);
        setSearch("");
      })
      .catch(err => {
        console.log(err);
      });
  };

  const notifyUserSaveBook = title => toast.info(`Added "${title}" to your library!`);

  const addNewBook = book => {
    const bookObject = {
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors[0],
      description: book.volumeInfo.description,
      coverURL: book.volumeInfo.imageLinks.thumbnail,
    };
    API.saveBook(bookObject, authConfig(sessionToken))
      .then(response => {
        const updatedUserData = response.data.body;
        setUserInfo({ ...updatedUserData, isAuthenticated: true });
        notifyUserSaveBook(bookObject.title);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar />
      <div className="formRow">
        <div className="formCol">
          <SearchForm
            className="form"
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
        <div className="col">
          {books.length > 0 && books.map(book => (
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
