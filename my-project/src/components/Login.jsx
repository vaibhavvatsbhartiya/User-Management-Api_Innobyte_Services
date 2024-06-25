import React, { useState } from 'react';
import { loginUser } from '../api/api';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(credentials);
      localStorage.setItem('token', response.token);
      setError('');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-sky-blue">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl mb-4 text-baby-pink">Login</h2>
        <input type="email" name="email" value={credentials.email} onChange={handleChange} placeholder="Email" required className="block w-full p-2 mb-4 border border-gray-300 rounded" />
        <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Password" required className="block w-full p-2 mb-4 border border-gray-300 rounded" />
        <button type="submit" className="bg-baby-pink w-full p-2 rounded text-white">Login</button>
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
