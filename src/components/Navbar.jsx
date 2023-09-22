import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to={'/'} className="m-2 p-4">
        Home
      </Link>
      <Link to={'/admin'} className="m-2 p-2">
        Admin
      </Link>
    </div>
  );
};

export default Navbar;
