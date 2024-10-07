import React from 'react';

const Education = () => {
  return (
    <section id="education" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl font-bold">Education</h2>
          <p className="mt-4 text-lg text-gray-600">We are a team of passionate developers and designers committed to building exceptional digital experiences.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="md:w-1/2 fade-in delay-400">
            <img src="https://via.placeholder.com/500x400" alt="Education Image" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 fade-in delay-600">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-4">To empower businesses by creating innovative and effective web solutions that drive growth and success.</p>
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600">To be a leading web development agency recognized for our creativity, reliability, and excellence in delivering top-notch digital products.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
