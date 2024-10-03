'use client';
import Link from 'next/link';
import { useState } from 'react';

const TAB_DATA = [
  {
    title: 'Frontend',
    id: 'frontend',
    content: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Ruby',
      'HTML',
      'CSS',
      'Sass',
      'Tailwind CSS',
    ],
    gradient: 'bg-gradient-to-r from-red-500 via-pink-500 to-yellow-500',
  },
  {
    title: 'Backend',
    id: 'backend',
    content: [
      'Node.js',
      'Express',
      'Python',
      'Java',
      'Flask',
      'Rails',
      'API',
    ],
    gradient: 'bg-gradient-to-r from-orange-500 via-green-500 to-blue-500',
  },
  {
    title: 'Database & Testing',
    id: 'db-testing',
    content: [
      'PostgreSQL',
      'MongoDB',
      'Supabase',
      'Cypress',
      'Jest',
      'Mocha',
      'Chai',
      'Selenium',
    ],
    gradient: 'bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-500',
  },
];

const About: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState('');

  return (
    <section className="text-white pt-20" id="about">
      <div className="md:grid md:grid-cols-1 gap-8 items-center py-8 px-0 lg:px-4 xl:gap-16 sm:py-16 xl:px-2">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-xl">
            I am a full stack web developer with a background in telecoms and
            technical support. Friendly and collaborative, I enjoy overcoming
            challenges with a combination of cheerful determination, grit, and
            resilience gained through an established work ethic. I would love to
            explore opportunities to contribute to meaningful projects and
            conversations, so please feel free to{' '}
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500">
              reach out to me on{' '}
              <span className="text-blue-500">
                <Link
                  href="https://www.linkedin.com/in/kazvee/"
                  target="_blank"
                  rel="noopener noreferrer">
                  LinkedIn
                </Link>
              </span>
            </span>
            {' '}🙂
          </p>

          <div className="mt-8 flex flex-col items-center">
            <div className="flex space-x-8 mb-4">
              {TAB_DATA.map((tab) => (
                <h3
                  key={tab.id}
                  className={`text-lg lg:text-xl font-bold transition duration-500 ${hoveredCategory === tab.id
                    ? 'bg-clip-text text-transparent ' + tab.gradient
                    : 'text-pink-500'}`}
                  onMouseEnter={() => setHoveredCategory(tab.id)}
                  onMouseLeave={() => setHoveredCategory('')}>
                  {tab.title}
                </h3>
              ))}
            </div>

            <div className="flex flex-col w-1/2 items-start">
              {TAB_DATA.map((tab) => (
                <ul
                  key={tab.id}
                  className={`flex-wrap justify-start space-x-4 transition-colors duration-500 inline-flex p-2 rounded ${hoveredCategory === tab.id ? tab.gradient : ''}`}>
                  {tab.content.map((skill) => (
                    <li
                      key={skill}
                      className={`transition-colors duration-500 ${hoveredCategory === tab.id ? 'text-black' : 'text-white'} hover:text-pink-500`}>
                      {skill}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;