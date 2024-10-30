'use client';
import { SetStateAction, useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import Link from 'next/link';

const projectsData = [

  {
    id: 15,
    title: '📅 Coffee Calendar Events Scheduler',
    demoVideo: '/images/demos/Coffee_Calendar_Events_Scheduler_Demo_Video.mp4',
    gitUrl: 'https://github.com/kazvee/coffee-calendar-events-scheduler/#readme',
    description: 'Console-based planning app that generates an upcoming events schedule based on user input.',
    tools: '⚙️ Java, CLI (Command Line Interface)',
    image: '/images/projects/project-15.png',
    tag: ['View All', 'Quick Concepts'],
  },
  {
    id: 14,
    title: '🐍 Snake Bytes Dinner Planner',
    liveDemo: 'https://kazvee.pythonanywhere.com/',
    demoVideo: '/images/demos/Snake_Bytes_Demo_Video.mp4',
    gitUrl: 'https://github.com/kazvee/snake-bytes/#readme',
    description: 'A revamped Python dinner planner built with Flask',
    tools: '⚙️ Python, Flask, Virtual Environment',
    image: '/images/projects/project-14.png',
    tag: ['View All', 'Quick Concepts'],
  },
  {
    id: 13,
    title: '💻 Console-based Dinner Planner',
    demoVideo: '/images/demos/Console_Dinner_Planner_Demo_Video.mp4',
    gitUrl: 'https://github.com/kazvee/snake-bytes-console/#readme',
    description: 'Console app that generates a weekly meal plan based on user input',
    tools: '⚙️ Python, CLI (Command Line Interface)',
    image: '/images/projects/project-13.png',
    tag: ['View All', 'Quick Concepts'],
  },
  {
    id: 12,
    title: '🐰 Bestie Squad',
    liveDemo: 'https://kazvee.github.io/bestie-squad/',
    demoVideo: '/images/demos/Bestie_Squad_Demo_Video.mp4',
    gitUrl: 'https://github.com/kazvee/bestie-squad/#readme',
    description: 'Redux application that enables users to create and manage a list of their best friends',
    tools: '⚙️ Redux (Reducers, Actions, Store), JavaScript, React, Yarn, GitHub Pages',
    image: '/images/projects/project-12.png',
    tag: ['View All',],
  },
  {
    id: 11,
    title: '🖼️ Meme Maker',
    demoVideo: '/images/demos/Meme_Maker_Demo_Video.mp4',
    gitUrl: 'https://github.com/kazvee/meme-maker/#readme',
    description: 'Redux application that enables users to create custom memes',
    tools: '⚙️ Redux (Reducers, Actions, Store), JavaScript, React, Thunk, API, Bootstrap',
    image: '/images/projects/project-11.png',
    tag: ['View All', 'Quick Concepts'],
  },
  {
    id: 10,
    title: '👩‍💻 Portfolio (this website)',
    liveDemo: 'https://kazvee.com/',
    gitUrl: 'https://github.com/kazvee/portfolio/#readme',
    description: 'Full-stack Web Developer Portfolio Site',
    tools: '⚙️ Next.js, JavaScript, TypeScript, NodeJS, Tailwind CSS',
    image: '/images/projects/project-10.png',
    tag: ['View All',],
  },
  {
    id: 9,
    title: '🐾 PawTrackr',
    liveDemo: 'https://pawtrackr.netlify.app/',
    demoVideo: '/images/demos/PawTrackr_Demo_Video.mp4',
    gitUrl: 'https://github.com/kazvee/PawTrackr/#readme',
    description: 'Full-stack Pet Care Management app (Group Project)',
    tools: '⚙️ React, JavaScript, NodeJS, Express, Axios, Bootstrap, PostgreSQL, Netlify',
    image: '/images/projects/project-9.png',
    tag: ['View All', 'Full Stack'],
  },
  {
    id: 8,
    title: '🪴 Jungle',
    demoVideo: '/images/demos/Jungle_Demo_Video.mp4',
    gitUrl: 'https://github.com/kazvee/jungle_rails/#readme',
    description: 'Full-stack e-commerce Plant Shop',
    tools:
      '⚙️ Ruby on Rails, MVC pattern, Active Record ORM, Bootstrap, PostgreSQL, Bcrypt, Stripe, Rspec, Cypress',
    image: '/images/projects/project-8.png',
    tag: ['View All', 'Full Stack'],
  },
  {
    id: 7,
    title: '📅 Interview Scheduler',
    demoVideo: '/images/demos/Interview_Scheduler_Demo_Video.mp4',
    gitUrl: 'https://github.com/kazvee/scheduler/#readme',
    description: 'Full-stack Meeting Booking app',
    tools:
      '⚙️ React, JavaScript, NodeJS, Axios, Dotenv, Cypress, Jest, TDD (Test Driven Development), SPA (Single Page Application), Railway, CircleCI (CI/CD), Netlify',
    image: '/images/projects/project-7.png',
    tag: ['View All', 'Full Stack'],
  },
  {
    id: 6,
    title: '🖼️ PhotoLabs',
    demoVideo: '/images/demos/PhotoLabs_Demo_Video.webm',
    gitUrl: 'https://github.com/kazvee/photolabs/#readme',
    description: 'Stock Photo browsing app',
    tools:
      '⚙️ React, JavaScript, Express, PostgreSQL, API, Babel, Dotenv, SPA (Single Page Application)',
    image: '/images/projects/project-6.png',
    tag: ['View All'],
  },
  {
    id: 5,
    title: '🧮 Two Player Math Game',
    gitUrl: 'https://github.com/kazvee/two_player_game/#readme',
    description: 'Terminal based Math Game',
    tools: '⚙️ Ruby, OOP (Object Oriented Programming), CLI (Command Line Interface)',
    image: '/images/projects/project-5.png',
    tag: ['View All', 'Ruby'],
  },
  {
    id: 4,
    title: '🐦 Tweeter',
    demoVideo: '/images/demos/Tweeter_Demo_Video.mp4',
    gitUrl: 'https://github.com/kazvee/tweeter/#readme',
    description: 'Single-page Social Media app',
    tools:
      '⚙️ JavaScript, NodeJS, Express, HTML, CSS, SASS, jQuery, AJAX, SPA (Single Page Application)',
    image: '/images/projects/project-4.png',
    tag: ['View All'],
  },
  {
    id: 3,
    title: '📚 Resource Wall (Group Project)',
    gitUrl: 'https://github.com/kazvee/resource-wall/#readme',
    description: 'Full-stack Resource Sharing Site for internet links, blogs, or videos',
    tools: '⚙️ JavaScript, NodeJS, Express, PostgreSQL, CSS, SASS, EJS',
    image: '/images/projects/project-3.png',
    tag: ['View All', 'Full Stack'],
  },
  {
    id: 2,
    title: '🍛 Recipe Rank',
    liveDemo: 'https://kazvee.github.io/recipe-rank/',
    demoVideo: '/images/demos/Recipe-Rank_Demo_Video.mp4',
    gitUrl: 'https://github.com/kazvee/recipe-rank/#readme',
    description:
      'Full-stack Recipe Sharing Site enabling users to vote on recipes',
    tools: '⚙️ React, JavaScript, Supabase, GitHub Pages (Previously Netlify)',
    image: '/images/projects/project-2.png',
    tag: ['View All', 'Full Stack'],
  },
  {
    id: 1,
    title: '🐒 Monkey Duck Game',
    liveDemo: 'https://kazvee.github.io/monkey-duck-game/',
    demoVideo: '/images/demos/Monkey_Duck_Game_Demo_Video.mp4',
    gitUrl: 'https://github.com/kazvee/monkey-duck-game/#readme',
    description:
      'Ask the monkeys to shuffle colourful emojis, get ducks in a row, and WIN!',
    tools: '⚙️ React, JavaScript, GitHub Pages (Previously Surge), SPA (Single Page Application)',
    image: '/images/projects/project-1.png',
    tag: ['View All', 'Quick Concepts'],
  },
];

const Projects: React.FC = () => {
  const [tag, setTag] = useState('View All');

  const filteredProjects = projectsData
    .filter((project) => project.tag.includes(tag))
    .sort((a, b) => b.id - a.id);

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  return (
    <section className="pt-2 md:pt-10" id="projects">
      <h2 className="text-center text-4xl font-bold text-white mb-4">
        My Projects
      </h2>
      <p className="text-[#B6688A] text-center text-sm md:text-base">
        Some of my favourite projects are highlighted below. If you&apos;d like to see more, take a peek at my {' '}
        <Link
          className="text-white hover:text-pink-500 hover:underline"
          href="https://github.com/kazvee?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>{' '}account!</p>
      <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
        <ProjectTag
          name="View All"
          onClick={handleTagChange}
          isSelected={tag === 'View All'}
        />
        <ProjectTag
          name="Full Stack"
          onClick={handleTagChange}
          isSelected={tag == 'Full Stack'}
        />
        <ProjectTag
          name="Quick Concepts"
          onClick={handleTagChange}
          isSelected={tag == 'Quick Concepts'}
        />
      </div>
      <div role="region" aria-labelledby="projects-header" className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tools={project.tools}
            imgUrl={project.image}
            liveDemo={project.liveDemo}
            demoVideo={project.demoVideo}
            gitUrl={project.gitUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;