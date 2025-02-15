'use client';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import Link from 'next/link';

const projectsData = [

  {
    id: 17,
    title: '🌞 Heliopolis',
    liveDemo: 'https://heliopolis.helioho.st/',
    demoVideo: '/images/demos/Heliopolis_Demo_Video.mp4',
    gitUrl: 'https://github.com/kazvee/heliopolis/#readme',
    description: 'Cute browser-based exploration game where players can wander freely and interact with in-game elements to discover hidden details.',
    tools: '⚙️ JavaScript, Kaplay, Vite, CSS, HTML',
    image: '/images/projects/project_17.png',
    tag: ['View All',],
  },
  {
    id: 16,
    title: '🍛 Provisioning',
    liveDemo: 'https://provisioning.kazvee.com/',
    gitUrl: 'https://github.com/kazvee/provisioning/#readme',
    description: 'Online recipe collection with category browsing and quick search features, designed for easy lookup and seamless sharing with friends and family.',
    tools: '⚙️ React, Docusaurus, Lunr Search, Markdown, JavaScript, CSS, HTML',
    image: '/images/projects/project_16.png',
    tag: ['View All',],
  },
  {
    id: 15,
    title: '🪶 ezReply',
    liveDemo: 'https://kazvee.com/ezreply/',
    demoVideo: '/images/demos/ezReply_Demo_Video.mp4',
    gitUrl: 'https://github.com/kazvee/ezReply/#readme',
    description: 'Flask-based web app that streamlines customer support by dynamically generating pre-written responses to common queries.',
    tools: '⚙️ Python, Flask, HTML, CSS, Virtual Environment',
    image: '/images/projects/project_15.png',
    tag: ['View All', 'Full Stack'],
  },
  {
    id: 14,
    title: '✅ Follow Check',
    gitUrl: 'https://github.com/kazvee/follow-check/#readme',
    description: 'Web app for managing GitHub following relationships.',
    tools: '⚙️ JavaScript, Node.js, Express, Axios, Dotenv, HTML, CSS',
    image: '/images/projects/project_14.png',
    tag: ['View All', 'Quick Concepts'],
  },
  {
    id: 13,
    title: '📅 Coffee Calendar Events Scheduler',
    demoVideo: '/images/demos/Coffee_Calendar_Events_Scheduler_Demo_Video.mp4',
    gitUrl: 'https://github.com/kazvee/coffee-calendar-events-scheduler/#readme',
    description: 'Console-based planning app that generates an upcoming events schedule based on user input.',
    tools: '⚙️ Java, CLI (Command Line Interface)',
    image: '/images/projects/project_13.png',
    tag: ['View All', 'Quick Concepts'],
  },
  {
    id: 12,
    title: '🐍 Snake Bytes Dinner Planner',
    liveDemo: 'https://kazvee.pythonanywhere.com/',
    demoVideo: '/images/demos/Snake_Bytes_Demo_Video.mp4',
    gitUrl: 'https://github.com/kazvee/snake-bytes/#readme',
    description: 'A revamped Python dinner planner built with Flask.',
    tools: '⚙️ Python, Flask, HTML, CSS, Virtual Environment',
    image: '/images/projects/project_12.png',
    tag: ['View All', 'Quick Concepts'],
  },
  {
    id: 11,
    title: '💻 Console-based Dinner Planner',
    demoVideo: '/images/demos/Console_Dinner_Planner_Demo_Video.mp4',
    gitUrl: 'https://github.com/kazvee/snake-bytes-console/#readme',
    description: 'Console app that generates a weekly meal plan based on user input.',
    tools: '⚙️ Python, CLI (Command Line Interface)',
    image: '/images/projects/project_11.png',
    tag: ['View All', 'Quick Concepts'],
  },
  {
    id: 10,
    title: '🐰 Bestie Squad',
    liveDemo: 'https://kazvee.github.io/bestie-squad/',
    demoVideo: '/images/demos/Bestie_Squad_Demo_Video.mp4',
    gitUrl: 'https://github.com/kazvee/bestie-squad/#readme',
    description: 'Redux application that enables users to create and manage a list of their best friends.',
    tools: '⚙️ Redux (Reducers, Actions, Store), JavaScript, React, HTML, CSS, Yarn, GitHub Pages',
    image: '/images/projects/project_10.png',
    tag: ['View All',],
  },
  {
    id: 9,
    title: '🖼️ Meme Maker',
    demoVideo: '/images/demos/Meme_Maker_Demo_Video.mp4',
    gitUrl: 'https://github.com/kazvee/meme-maker/#readme',
    description: 'Redux application that enables users to create custom memes.',
    tools: '⚙️ Redux (Reducers, Actions, Store), JavaScript, React, HTML, CSS, Thunk, API, Bootstrap',
    image: '/images/projects/project_9.png',
    tag: ['View All', 'Quick Concepts'],
  },
  {
    id: 8,
    title: '👩‍💻 Portfolio (this website)',
    liveDemo: 'https://kazvee.com/',
    demoVideo: '/images/readme/Snow_Portfolio_Video.mp4', // File already exists in ReadMe folder
    gitUrl: 'https://github.com/kazvee/portfolio/#readme',
    description: 'Full Stack Web Developer Portfolio Site.',
    tools: '⚙️ Next.js, JavaScript, TypeScript, Node.js, HTML, CSS, Tailwind CSS',
    image: '/images/projects/project_8.png',
    tag: ['View All',],
  },
  {
    id: 7,
    title: '🪴 Jungle',
    demoVideo: '/images/demos/Jungle_Demo_Video.mp4',
    gitUrl: 'https://github.com/kazvee/jungle_rails/#readme',
    description: 'Full Stack e-commerce Plant Shop.',
    tools:
      '⚙️ Ruby on Rails, HTML, CSS, SCSS, ERB (Embedded Ruby), MVC (Model-View-Controller) Architecture, Active Record ORM (Object-Relational Mapping), Bootstrap, PostgreSQL, Bcrypt, Stripe, RSpec, Cypress',
    image: '/images/projects/project_7.png',
    tag: ['View All', 'Full Stack'],
  },
  {
    id: 6,
    title: '📅 Interview Scheduler',
    demoVideo: '/images/demos/Interview_Scheduler_Demo_Video.mp4',
    gitUrl: 'https://github.com/kazvee/scheduler/#readme',
    description: 'Full Stack Meeting Booking app.',
    tools:
      '⚙️ React, JavaScript, HTML, CSS, SCSS, Node.js, Axios, Dotenv, Cypress, Jest, TDD (Test Driven Development), SPA (Single Page Application), Railway, CircleCI (CI/CD), Netlify',
    image: '/images/projects/project_6.png',
    tag: ['View All', 'Full Stack'],
  },
  {
    id: 5,
    title: '🖼️ PhotoLabs',
    demoVideo: '/images/demos/PhotoLabs_Demo_Video.webm',
    gitUrl: 'https://github.com/kazvee/photolabs/#readme',
    description: 'Stock Photo browsing app.',
    tools:
      '⚙️ React, JavaScript, HTML, CSS, SCSS, Express, PostgreSQL, API, Babel, Dotenv, SPA (Single Page Application)',
    image: '/images/projects/project_5.png',
    tag: ['View All'],
  },
  {
    id: 4,
    title: '🧮 Two Player Math Game',
    gitUrl: 'https://github.com/kazvee/two_player_game/#readme',
    description: 'Terminal based Math Game.',
    tools: '⚙️ Ruby, OOP (Object Oriented Programming), CLI (Command Line Interface)',
    image: '/images/projects/project_4.png',
    tag: ['View All', 'Ruby'],
  },
  {
    id: 3,
    title: '🐦 Tweeter',
    demoVideo: '/images/demos/Tweeter_Demo_Video.mp4',
    gitUrl: 'https://github.com/kazvee/tweeter/#readme',
    description: 'Single-page Social Media app.',
    tools:
      '⚙️ JavaScript, Node.js, Express, HTML, CSS, SASS, jQuery, AJAX, SPA (Single Page Application)',
    image: '/images/projects/project_3.png',
    tag: ['View All'],
  },
  {
    id: 2,
    title: '🍛 Recipe Rank',
    liveDemo: 'https://kazvee.github.io/recipe-rank/',
    demoVideo: '/images/demos/Recipe-Rank_Demo_Video.mp4',
    gitUrl: 'https://github.com/kazvee/recipe-rank/#readme',
    description:
      'Full Stack Recipe Sharing Site enabling users to vote on recipes.',
    tools: '⚙️ React, JavaScript, HTML, CSS, Supabase, GitHub Pages, Netlify',
    image: '/images/projects/project_2.png',
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
    tools: '⚙️ React, JavaScript, HTML, CSS, GitHub Pages, Surge, SPA (Single Page Application)',
    image: '/images/projects/project_1.png',
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