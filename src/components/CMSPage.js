import React, { useState } from 'react';
import axios from 'axios';

const CMSPage = () => {
  const [heading, setHeading] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/api/heading', {
        heading: heading,
      });

      if (response.status === 200 || response.status === 201) {
        setMessage('✅ Heading saved successfully!');
        setHeading('');
      }
    } catch (error) {
      console.error('Error saving heading:', error);
      setMessage('❌ Failed to save heading. Make sure the backend is running.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">CMS - Update Heading</h2>
      <form onSubmit={handleSubmit}>
        <label className="block text-gray-700 mb-2" htmlFor="heading">Heading Text:</label>
        <input
          type="text"
          id="heading"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter heading"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Save
        </button>
      </form>
      {message && <p className="mt-4 text-sm">{message}</p>}
    </div>
  );
};

export default CMSPage;