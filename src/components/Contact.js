import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600">Get in touch with us to discuss your project.</p>
        </div>
        <form className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg fade-in delay-600">
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="name">Name</label>
            <input type="text" id="name" className="w-full border border-gray-300 p-2 rounded" placeholder="Your Name" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">Email</label>
            <input type="email" id="email" className="w-full border border-gray-300 p-2 rounded" placeholder="Your Email" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="message">Message</label>
            <textarea id="message" className="w-full border border-gray-300 p-2 rounded" rows="4" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
