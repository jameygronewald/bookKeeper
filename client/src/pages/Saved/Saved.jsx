import React, { useContext } from "react";
import SavedBook from "../../components/SavedBook/SavedBook";
import Button from "../../components/Button/Button";
import API from "../../utils/API";
import { UserContext } from "../../utils/UserContext";
const { authConfig } = require("../../utils/configHelper");

const Saved = () => {
  const { userInfo, setUserInfo, sessionToken } = useContext(UserContext);
  const savedBooks = userInfo.books;

  const deleteSavedBook = id => {
    console.log(id);
    console.log(authConfig(sessionToken));
    API.deleteBook(id, authConfig(sessionToken))
      .then(response => {
        console.log(response.data.body);
        setUserInfo({ ...response.data.body, isAuthenticated: true })
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      {userInfo.books &&
        savedBooks.map(book => (
          <div key={book._id}>
            <SavedBook bookData={book} />
            <Button
              onClick={e => {
                e.preventDefault();
                deleteSavedBook(book._id);
              }}
              buttonText="Delete Book"
            />
          </div>
        ))}
    </div>
  );
};

export default Saved;
