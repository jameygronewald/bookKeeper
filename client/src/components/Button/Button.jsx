import React from 'react';

const Button = ({ onClick, buttonText, className }) => {
    return (
        <div className={className}>
            <button onClick={onClick}>{buttonText}</button>
        </div>
    );
};

export default Button;