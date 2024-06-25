import React, { useState, useEffect } from 'react';
import { getUserProfile, updateUserProfile } from '../api/api';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
  });
  const [token] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profile = await getUserProfile(token);
        setProfileData(profile);
      } catch (err) {
        console.error('Error fetching profile', err);
      }
    };
    fetchProfile();
  }, [token]);

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedProfile = await updateUserProfile(profileData, token);
      setProfileData(updatedProfile);
    } catch (err) {
      console.error('Error updating profile', err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-sky-blue">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl mb-4 text-baby-pink">Profile</h2>
        <input type="text" name="name" value={profileData.name} onChange={handleChange} placeholder="Name" required className="block w-full p-2 mb-4 border border-gray-300 rounded" />
        <input type="email" name="email" value={profileData.email} onChange={handleChange} placeholder="Email" required className="block w-full p-2 mb-4 border border-gray-300 rounded" />
        <button type="submit" className="bg-baby-pink w-full p-2 rounded text-white">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
