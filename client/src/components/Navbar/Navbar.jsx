import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navRow'>
            <h1>BookKeeper</h1>
            <Link to={'/saved'}>View Saved Books</Link>
            <Link to={'/search'}>Search for Books</Link>
        </div>
    );
};

export default Navbar;