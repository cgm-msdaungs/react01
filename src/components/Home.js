import React from 'react';

const Home = () => {
    return (
        <section id="home" className="pt-24 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 py-16">
                <div className="flex-1 fade-in">
                    <h1 className="text-5xl font-bold mb-4">We Create Beautiful and Functional Websites</h1>
                    <p className="text-xl mb-6">Delivering high-quality web solutions tailored to your business needs.</p>
                    <a href="#contact" className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">Get Started</a>
                </div>
                <div className="flex-1 mb-10 md:mb-0 fade-in delay-200">
                    <img src="https://via.placeholder.com/500x400" alt="Home Image" className="w-full rounded-lg shadow-lg" />
                </div>
            </div>
        </section>
    );
};

export default Home;
