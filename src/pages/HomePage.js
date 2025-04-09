import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [heading, setHeading] = useState('');

  useEffect(() => {
    const fetchHeading = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/heading');
        if (response.data && response.data.heading) {
          setHeading(response.data.heading);
        }
      } catch (error) {
        console.error('Failed to fetch heading:', error);
      }
    };

    fetchHeading();
  }, []);

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="flex justify-center items-center px-6 py-4 border-b">
        <nav className="space-x-6 text-sm font-medium text-gray-600 flex">
        <a href="#about" className="hover:text-black">About</a>
        <span className="hover:text-black cursor-pointer">Services ▼</span>
        </nav>
      </header>


      {/* Hero Section */}
      <section className="relative bg-white px-6 py-20 md:py-28 overflow-hidden">
        {/* Right background image */}
        <img
          src="/image.png"
          alt="right-decor"
          className="hidden md:block absolute top-0 right-0 h-full max-h-[829px] w-auto z-0 pointer-events-none object-contain"
          />

        {/* Hero content */}
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Hyper boost your{" "}
              <span className="text-yellow-500">Revenue Management, Marketing</span> and<br />
              <span className="text-black">Commercial Functions</span> with<br />
              <span className="text-black">Business Ready AI</span>
            </h1>
            <p className="text-gray-600 mb-6 max-w-xl">
              Powerful AI solutions that go beyond mere data sorting and exploration. Use our array of AI enabled solutions that understand your business and recommend the optimal way forward.
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-3 rounded-md shadow-md font-semibold">
              Get started
            </button>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-20 px-4 bg-white">
      <div className="relative max-w-7xl mx-auto">
    
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 z-0 transform -translate-y-1/2"></div>

      <div className="grid grid-cols-5 gap-6 relative z-10">

      {/* 1 - Bottom: Multi-source data */}
      <div className="flex flex-col-reverse items-center relative">
        <div className="mt-72 bg-white shadow-lg p-4 rounded-lg text-center">
          <div className="text-yellow-500 text-2xl mb-2">🔸</div>
          <h3 className="font-bold text-lg">Multi-source data</h3>
          <p className="text-sm text-gray-600">Our solutions work with old, new, or incomplete datasets, in different formats, and from varied sources.</p>
        </div>
        <div className="absolute top-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow transform -translate-y-1/2 z-10"></div>
      </div>

      {/* 2 - Top: Ready to Go Algos */}
      <div className="flex flex-col items-center relative">
        <div className="mb-72 bg-white shadow-lg p-4 rounded-lg text-center">
          <div className="text-yellow-500 text-2xl mb-2">»</div>
          <h3 className="font-bold text-lg">Ready to Go Algos</h3>
          <p className="text-sm text-gray-600">We have ready accelerators embedded with learnings from hundreds of past projects.</p>
        </div>
        <div className="absolute top-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow transform -translate-y-1/2 z-10"></div>
      </div>

      {/* 3 - Bottom: Stakeholder alignment */}
      <div className="flex flex-col-reverse items-center relative">
        <div className="mt-72 bg-white shadow-lg p-4 rounded-lg text-center">
          <div className="text-yellow-500 text-2xl mb-2">🎯</div>
          <h3 className="font-bold text-lg">Stakeholder alignment</h3>
          <p className="text-sm text-gray-600">No black boxes. Stakeholders understand the “how,” “so what” and “now what.”</p>
        </div>
        <div className="absolute top-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow transform -translate-y-1/2 z-10"></div>
      </div>

      {/* 4 - Top: Internal capability building */}
      <div className="flex flex-col items-center relative">
        <div className="mb-72 bg-white shadow-lg p-4 rounded-lg text-center">
          <div className="text-yellow-500 text-2xl mb-2">🧊</div>
          <h3 className="font-bold text-lg">Internal capability building</h3>
          <p className="text-sm text-gray-600">We productize all our work, enhance them with the latest AI technology, and train your teams.</p>
        </div>
        <div className="absolute top-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow transform -translate-y-1/2 z-10"></div>
      </div>

      {/* 5 - Bottom: Continuous engagement */}
      <div className="flex flex-col-reverse items-center relative">
        <div className="mt-72 bg-white shadow-lg p-4 rounded-lg text-center">
          <div className="text-yellow-500 text-2xl mb-2">🔁</div>
          <h3 className="font-bold text-lg">Continuous engagement</h3>
          <p className="text-sm text-gray-600">We engage long-term to enhance, course-correct, and adopt new models to refine your work.</p>
          </div>
        <div className="absolute top-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow transform -translate-y-1/2 z-10"></div>
      </div>

      </div>
      </div>
      </section>

    </div>
  );
};

export default HomePage;