// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl text-sky-blue font-bold">MyApp</h1>
        <div className="space-x-4">
          <Link to="/" className="text-baby-pink hover:text-sky-blue">Home</Link>
          <Link to="/signup" className="text-baby-pink hover:text-sky-blue">Sign Up</Link>
          <Link to="/login" className="text-baby-pink hover:text-sky-blue">Login</Link>
          <Link to="/profile" className="text-baby-pink hover:text-sky-blue">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
