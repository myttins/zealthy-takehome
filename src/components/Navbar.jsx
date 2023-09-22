import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <ul>
        <Link to={'/'}>Home</Link>
        <Link to={'/admin'}>Admin</Link>
    </ul>
  );
};

export default Navbar;
