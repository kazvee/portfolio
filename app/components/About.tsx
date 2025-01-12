'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import mapleLeafIcon from '@/public/images/maple-leaf-icon.png';

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
  const [iconSpinning, setIconSpinning] = useState(false);

  const handleIconClick = () => {
    setIconSpinning(true);
    setTimeout(() => {
      setIconSpinning(false);
    }, 3000);
  };

  return (
    <section className="text-white pt-2" id="about">
      <div className="md:grid md:grid-cols-1 gap-8 items-center">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center">
            About Me
            <span className="ml-2 flex items-center">
              <Image
                src={mapleLeafIcon}
                alt="Maple Leaf icon"
                width={48}
                height={48}
                className={`maple-leaf ${iconSpinning ? 'spin' : ''}`}
                onClick={handleIconClick}
                style={{ transformOrigin: 'center', cursor: 'pointer' }} />
            </span>
            <span
              className={`text-xs font-normal text-pink-300 ${iconSpinning ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
              wheeeeeeee
            </span>
          </h2>
          <p className="text-base lg:text-xl">
            Based in <span className="text-pink-500">Canada</span>, I&apos;m an experienced IT professional with a background in software development, technical writing, and customer-focused tech support. Friendly and collaborative, I enjoy overcoming challenges with a combination of cheerful determination, grit, and resilience gained through an established work ethic. I&apos;d love to explore opportunities to contribute to meaningful projects and conversations, so please feel free to{' '}
            <Link
              href="https://www.linkedin.com/in/kazvee/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with me on LinkedIn"
              className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500">
              connect with me on{' '}
              <span className="text-blue-500">LinkedIn</span>
            </Link>
            {' '}🙂
          </p>

          <div className="mt-8 flex flex-col items-center">
            <h3 className="text-4xl font-bold text-white mb-4">Skills</h3>
            <div className="mb-4 md:hidden flex flex-col w-full items-start">
              {SKILLS_DATA.map((category) => (
                <div key={category.id} className="w-full mb-4">
                  <h4 className="text-lg font-bold text-pink-500 mb-1">{category.title}</h4>
                  <ul className="flex flex-col space-y-1" role="list">
                    {category.content.map((skill) => (
                      <li key={skill} className="text-white">{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="space-x-8 mb-4 hidden md:flex">
              {SKILLS_DATA.map((category) => (
                <button
                  key={category.id}
                  className={`text-lg lg:text-xl font-bold transition duration-500 ${hoveredCategory === category.id
                    ? 'bg-clip-text text-transparent ' + category.gradient
                    : 'text-pink-500'
                    }`}
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory('')}
                  onKeyDown={(e) => e.key === 'Enter' && setHoveredCategory(category.id)}
                  aria-label={`View skills in ${category.title}`}
                >
                  {category.title}
                </button>
              ))}
            </div>

            <div className="flex-col w-2/3 items-center hidden md:flex">
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