import React, { useState } from 'react';
import { registerUser } from '../api/api';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); //
    
    try {
      const response = await registerUser(formData);
      console.log(response.data);
      setMessage(response.message);
      setError('');
    } catch (err) {
      setError('Error registering user');
      setMessage('');
      console.log(err); //
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-sky-blue">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl mb-4 text-baby-pink">Sign Up</h2>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="block w-full p-2 mb-4 border border-gray-300 rounded" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="block w-full p-2 mb-4 border border-gray-300 rounded" />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required className="block w-full p-2 mb-4 border border-gray-300 rounded" />
        <button type="submit" className="bg-baby-pink hover:bg-red-400 w-full p-2 rounded text-white">Register</button>
        {message && <p className="mt-4 text-green-500">{message}</p>}
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default Signup;
