import React from 'react';

const Button = ({ onClick, buttonText }) => {
    return (
        <div>
            <button onClick={onClick}>{buttonText}</button>
        </div>
    );
};

export default Button;