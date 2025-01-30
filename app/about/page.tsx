import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 py-10 px-5">
      <div className="max-w-4xl text-center bg-white rounded-lg shadow-lg p-6 space-y-4">
        <h1 className="text-3xl font-bold text-blue-600">About News Aggregator</h1>
        <p className="text-xl text-gray-700">
          Welcome to our News Aggregator! This is a web application that collects and displays the latest news articles from various sources, categorized by different topics. You can explore the latest trends in categories like sports, technology, business, and more.
        </p>
        <p className="text-lg text-gray-600">
          This app uses a clean and user-friendly interface to help you stay updated with the latest news. With the power of APIs, we bring you news from credible sources and allow you to filter the news based on your interests.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800">Features:</h2>
        <ul className="list-disc pl-6 text-lg text-gray-600">
          <li>Real-time news updates</li>
          <li>Categories like Sports, Business, Technology, etc.</li>
          <li>Simple and clean user interface</li>
          <li>Responsive design for mobile and desktop</li>
        </ul>
        <p className="text-lg text-gray-600">
          This project was built using <span className="font-semibold text-blue-600">Next.js</span>, <span className="font-semibold text-blue-600">React</span>, and <span className="font-semibold text-blue-600">Tailwind CSS</span>. It fetches data from trusted news APIs to provide you with fresh and up-to-date content.
        </p>
        <p className="text-lg text-gray-600">
          If you have any questions or feedback, feel free to reach out to us!
        </p>

        {/* Back to Home Button */}
        <div className="mt-6">
          <Link href="/"className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-500 transition duration-300 ease-in-out">
              Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
