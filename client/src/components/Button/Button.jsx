import React from 'react';

const Button = ({ onClick, buttonText, className }) => {
    return (
        <div>
            <button className={className} onClick={onClick}>{buttonText}</button>
        </div>
    );
};

export default Button;