import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl font-bold">Our Skills</h2>
          <p className="mt-4 text-lg text-gray-600">Take a look at some of our recent projects.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Skills Item 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden fade-in delay-200">
            <img src="https://via.placeholder.com/600x400" alt="Project 1" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Project One</h3>
              <p className="text-gray-600">A brief description of Project One showcasing its features and technologies used.</p>
              <a href="#" className="text-indigo-600 hover:underline mt-4 inline-block">View Details</a>
            </div>
          </div>
          {/* Skills Item 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden fade-in delay-200">
            <img src="https://via.placeholder.com/600x400" alt="Project 2" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Project Two</h3>
              <p className="text-gray-600">A brief description of Project Two showcasing its features and technologies used.</p>
              <a href="#" className="text-indigo-600 hover:underline mt-4 inline-block">View Details</a>
            </div>
          </div>
          {/* Skills Item 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden fade-in delay-200">
            <img src="https://via.placeholder.com/600x400" alt="Project 3" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Project Three</h3>
              <p className="text-gray-600">A brief description of Project Three showcasing its features and technologies used.</p>
              <a href="#" className="text-indigo-600 hover:underline mt-4 inline-block">View Details</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
