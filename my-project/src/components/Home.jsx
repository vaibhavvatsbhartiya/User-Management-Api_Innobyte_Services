// src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-sky-blue text-white">
      <h1 className="text-5xl font-bold mb-4">Welcome to MyApp</h1>
      <p className="text-xl mb-4">Your journey starts here.</p>
      <div className="space-x-4">
        <a href="/signup" className="bg-baby-pink px-4 py-2 rounded text-white hover:bg-white hover:text-baby-pink">Sign Up</a>
        <a href="/login" className="bg-baby-pink px-4 py-2 rounded text-white hover:bg-white hover:text-baby-pink">Login</a>
      </div>
    </div>
  );
};

export default Home;
