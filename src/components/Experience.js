import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 fade-in">
                    <h2 className="text-4xl font-bold">Experience</h2>
                    <p className="mt-4 text-lg text-gray-600">We offer a wide range of Experience to meet your web development needs.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Service 1 */}
                    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition fade-in delay-200">
                        <div class="mb-4">
                            <svg class="w-12 h-12 text-indigo-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 7h18M3 12h18M3 17h18"></path>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-semibold mb-2 text-center">Web Development</h3>
                        <p className="text-gray-600 text-center">Building responsive and dynamic websites tailored to your business needs.</p>
                    </div>
                    {/* Service 2 */}
                    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition fade-in delay-400">
                        <div class="mb-4">
                            <svg class="w-12 h-12 text-indigo-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 4v16m8-8H4"></path>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-semibold mb-2 text-center">Graphic Design</h3>
                        <p className="text-gray-600 text-center">Creating visually stunning designs that effectively communicate your brand message.</p>
                    </div>
                    {/* Service 3 */}
                    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition fade-in delay-400">
                        <div class="mb-4">
                            <svg class="w-12 h-12 text-indigo-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 12h3m6 0h3m6 0h3M4 6h16M4 18h16"></path>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-semibold mb-2 text-center">SEO Optimization</h3>
                        <p className="text-gray-600 text-center">Enhancing your website's visibility on search engines to attract more visitors.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
