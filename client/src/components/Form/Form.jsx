import React from "react";
import Button from "../Button/Button";

const Form = ({ handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a book title"
        name="search"
        onChange={handleChange}
      />
      <Button buttonText="Submit" />
    </form>
  );
};

export default Form;
