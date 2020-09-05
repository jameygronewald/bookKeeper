import React from "react";

const Input = ({ type, placeholder, name, onChangeFunction }) => {
  return (
    <input
      className="input"
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChangeFunction}
    />
  );
};

export default Input;
