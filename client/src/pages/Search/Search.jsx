import React, { useState } from 'react';
import Form from '../../components/Form/Form';
import API from "../../utils/API";

const Search = () => {
    
    const [search, setSearch] = useState("");
    
    const handleSubmit = event => {
        event.preventDefault();
        API.getBook(search)
          .then(response => {
            const bookInfo = response.data.items[0].volumeInfo;
            const bookObj = {
              title: bookInfo.title,
              author: bookInfo.authors[0],
              description: bookInfo.description,
              cover: bookInfo.imageLinks.thumbnail,
            };
            console.log(bookObj);
          })
          .catch(err => {
            console.log(err);
          });
      };
    
    return (
        <div>
            <Form setSearch={setSearch} handleSubmit={handleSubmit}/>
        </div>
    );
};

export default Search;