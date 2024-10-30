'use client';
import Link from 'next/link';
import { useState } from 'react';

const SKILLS_DATA = [
  {
    title: 'Frontend',
    id: 'frontend',
    content: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
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
      'Axios',
      'Python',
      'Flask',
      'Java',
      'Spring',
      'Spring Boot',
      'Ruby',
      'Ruby on Rails',
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
    <section className="text-white pt-2" id="about">
      <div className="md:grid md:grid-cols-1 gap-8 items-center">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-xl">
            I am a full stack web developer with a background in telecoms and
            technical support. Friendly and collaborative, I enjoy overcoming
            challenges with a combination of cheerful determination, grit, and
            resilience gained through an established work ethic. I would love to
            explore opportunities to contribute to meaningful projects and
            conversations, so please feel free to{' '}
            <Link
              href="https://www.linkedin.com/in/kazvee/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with me on LinkedIn"
              className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500">
              reach out to me on{' '}
              <span className="text-blue-500">LinkedIn</span>
            </Link>
            {' '}🙂
          </p>

          <div className="mt-8 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-white m-4">Skills</h2>
            <div className="mb-4 md:hidden flex flex-col w-full items-start">
              {SKILLS_DATA.map((category) => (
                <div key={category.id} className="w-full mb-4">
                  <h3 className="text-lg font-bold text-pink-500 mb-1">{category.title}</h3>
                  <ul className="flex flex-col space-y-1">
                    {category.content.map((skill) => (
                      <li key={skill} className="text-white">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="space-x-8 mb-4 hidden md:flex">
              {SKILLS_DATA.map((category) => (
                <h3
                  key={category.id}
                  className={`text-lg lg:text-xl font-bold transition duration-500 ${hoveredCategory === category.id
                    ? 'bg-clip-text text-transparent ' + category.gradient
                    : 'text-pink-500'}`}
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory('')}>
                  {category.title}
                </h3>
              ))}
            </div>

            <div className="flex-col w-1/2 items-start hidden md:flex">
              {SKILLS_DATA.map((category) => (
                <ul
                  key={category.id}
                  className={`flex-wrap justify-start space-x-4 transition-colors duration-500 inline-flex p-2 rounded ${hoveredCategory === category.id ? category.gradient : ''}`}>
                  {category.content.map((skill) => (
                    <li
                      key={skill}
                      className={`transition-colors duration-500 ${hoveredCategory === category.id ? 'text-black' : 'text-white'} hover:text-pink-500`}>
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