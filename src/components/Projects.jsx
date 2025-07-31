import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800" data-aos="zoom-in">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-yellow-300 mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-white dark:bg-gray-700 rounded shadow p-6" data-aos="fade-up">
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-yellow-300">Sports Website</h3>
            <p className="text-gray-700 dark:text-yellow-300 mb-4">
              this website is basically tells above the sportes events and the varies kinds of sports occures in the Karantaka government polytechnic college and also about the sports glory of the KPT college. if you want to know more about  it .click on the view project.
            </p>
            <div className="flex gap-4">
              <a
                href="https://sports-website-two-jade.vercel.app/gallery"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                view project
              </a>
              
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white dark:bg-gray-700 rounded shadow p-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-yellow-300">School Website</h3>
            <p className="text-gray-700 dark:text-yellow-300 mb-4">
              I developed an official website for Government Junior Technical School, Mangalore to provide students, parents, and staff with easy access to essential information. The site includes key sections like About the School, Courses Offered, Faculty Details, Facilities, Photo Gallery, and Contact Information. The modern, mobile-responsive design ensures accessibility and a user-friendly experience across all devices.
            </p>
            <div className="flex gap-4">
              <a
                href="https://jr-technical-school.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                view project
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
