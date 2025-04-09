// src/components/MainContent.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MainContent = () => {
  const [heading, setHeading] = useState("Loading...");

  useEffect(() => {
    axios.get('http://localhost:8081/api/heading')
      .then(response => setHeading(response.data.heading))
      .catch(error => setHeading("Error fetching heading"));
  }, []);

  return (
    <main className="text-center py-20">
      <h2 className="text-4xl font-semibold mb-4">{heading}</h2>
      <p className="text-gray-600">Welcome to the official website of Company ABC.</p>
    </main>
  );
};

export default MainContent;
