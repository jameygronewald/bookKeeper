import React, { useContext } from "react";
import SavedBook from "../../components/SavedBook/SavedBook";
import { UserContext } from "../../utils/UserContext";

const Saved = () => {
  const { userInfo } = useContext(UserContext);
  const savedBooks = userInfo.books;
  // const [savedBooks, setSavedBooks] = useState([]);
  // useEffect(() => {
  //   API.getSavedBooks()
  //     .then(response => {
  //       setSavedBooks(response.data.data);
  //       console.log(response.data.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div>
      {userInfo.books && savedBooks.map(book => (
        <SavedBook key={book._id} bookData={book} />
      ))}
    </div>
  );
};

export default Saved;
