import React from 'react';

const Additional = () => {
  return (
    <section id="additional" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl font-bold">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-gray-600">Hear from our satisfied clients who love our work.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 fade-in delay-200">
            <p className="text-gray-600">"Candycode did an amazing job on our website! They were professional, responsive, and delivered on time."</p>
            <h4 className="font-semibold mt-4">Client Name</h4>
            <p className="text-sm text-gray-500">Position, Company</p>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 fade-in delay-200">
            <p className="text-gray-600">"I highly recommend Candycode for their expertise and creativity. They transformed our online presence."</p>
            <h4 className="font-semibold mt-4">Client Name</h4>
            <p className="text-sm text-gray-500">Position, Company</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Additional;
