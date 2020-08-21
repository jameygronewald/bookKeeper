import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

const SearchForm = ({ handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Enter a book title"
        name="search"
        onChangeFunction={handleChange}
      />
      <Button buttonText="Submit" />
    </form>
  );
};

export default SearchForm;
