import React, { useContext } from "react";
import SavedBook from "../../components/SavedBook/SavedBook";
import API from "../../utils/API";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../utils/UserContext";
const { authConfig } = require("../../utils/configHelper");

const Saved = () => {
  const { userInfo, setUserInfo, sessionToken } = useContext(UserContext);
  const savedBooks = userInfo.books;

  const notifyUserDeleteBook = title =>
    toast.info(`Removed "${title}" from your library!`);

  const deleteSavedBook = (id, title) => {
    API.deleteBook(id, authConfig(sessionToken))
      .then(response => {
        setUserInfo({ ...response.data.body, isAuthenticated: true });
        notifyUserDeleteBook(title);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar />
      {userInfo.books &&
        savedBooks.map(book => (
          <div key={book._id}>
            <SavedBook deleteFunction={deleteSavedBook} bookData={book} />
          </div>
        ))}
    </div>
  );
};

export default Saved;
