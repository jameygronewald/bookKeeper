import React, { useState } from "react";
import Button from "../Button/Button";

const Form = ({ setSearch, handleSubmit }) => {

  const handleChange = ({ target: { value } }) => {
    setSearch(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a book title"
        name="search"
        onChange={handleChange}
      />
      <Button buttonText="Search" />
    </form>
  );
};

export default Form;
