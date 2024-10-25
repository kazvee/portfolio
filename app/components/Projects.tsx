'use client';
import { SetStateAction, useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectsData = [

  {
    id: 15,
    title: '📅 Coffee Calendar Events Scheduler',
    demoVideo: '/images/demos/Coffee_Calendar_Events_Scheduler_Demo_Video.mp4',
    gitUrl: 'https://github.com/kazvee/coffee-calendar-events-scheduler/#readme',
    description: '☕ Console-based planning app that generates an upcoming events schedule based on user input.',
    tools: '⚙️ Java',
    image: '/images/projects/project-15.png',
    tag: ['All', 'Quick Concepts'],
  },
  {
    id: 14,
    title: '🐍 Snake Bytes Dinner Planner',
    liveDemo: 'https://kazvee.pythonanywhere.com/',
    demoVideo: '/images/demos/Snake_Bytes_Demo_Video.mp4',
    gitUrl: 'https://github.com/kazvee/snake-bytes/#readme',
    description: '🍝 A revamped Python dinner planner built with Flask',
    tools: '⚙️ Python, Flask, Virtual Environment',
    image: '/images/projects/project-14.png',
    tag: ['All', 'Quick Concepts'],
  },
  {
    id: 13,
    title: '💻 Console-based Dinner Planner',
    demoVideo: '/images/demos/Console_Dinner_Planner_Demo_Video.mp4',
    gitUrl: 'https://github.com/kazvee/snake-bytes-console/#readme',
    description: '🍽️ Console app that generates a weekly meal plan based on user input',
    tools: '⚙️ Python',
    image: '/images/projects/project-13.png',
    tag: ['All', 'Quick Concepts'],
  },
  {
    id: 12,
    title: '🐰 Bestie Squad',
    liveDemo: 'https://kazvee.github.io/bestie-squad/',
    demoVideo: '/images/demos/Bestie_Squad_Demo_Video.mp4',
    gitUrl: 'https://github.com/kazvee/bestie-squad/#readme',
    description: '🐰 Redux application that enables users to create and manage a list of their best friends',
    tools: '⚙️ Redux (Reducers, Actions, Store), React, Yarn',
    image: '/images/projects/project-12.png',
    tag: ['All',],
  },
  {
    id: 11,
    title: '🖼️ Meme Maker',
    demoVideo: '/images/demos/Meme_Maker_Demo_Video.mp4',
    gitUrl: 'https://github.com/kazvee/meme-maker/#readme',
    description: 'Redux application that enables users to create custom memes',
    tools: '⚙️ Redux (Reducers, Actions, Store), React, Thunk, API, Bootstrap',
    image: '/images/projects/project-11.png',
    tag: ['All', 'Quick Concepts'],
  },
  {
    id: 10,
    title: '👩‍💻 Portfolio (this website)',
    liveDemo: 'https://kazvee.com/',
    gitUrl: 'https://github.com/kazvee/portfolio/#readme',
    description: 'Full-stack Web Developer Portfolio Site',
    tools: '⚙️ Next.js, TypeScript, NodeJS, Tailwind CSS',
    image: '/images/projects/project-10.png',
    tag: ['All',],
  },
  {
    id: 9,
    title: '🐾 PawTrackr',
    liveDemo: 'https://pawtrackr.netlify.app/',
    demoVideo: '/images/demos/PawTrackr_Demo_Video.mp4',
    gitUrl: 'https://github.com/kazvee/PawTrackr/#readme',
    description: 'Full-stack Pet Care Management app (Group Project)',
    tools: '⚙️ React, NodeJS, Express, Axios, Bootstrap, PostgreSQL',
    image: '/images/projects/project-9.png',
    tag: ['All', 'Full Stack'],
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
    tag: ['All', 'Full Stack'],
  },
  {
    id: 7,
    title: '📅 Interview Scheduler',
    demoVideo: '/images/demos/Interview_Scheduler_Demo_Video.mp4',
    gitUrl: 'https://github.com/kazvee/scheduler/#readme',
    description: 'Full-stack Meeting Booking app',
    tools:
      '⚙️ React, NodeJS, Axios, Dotenv, Cypress, Jest, TDD (Test Driven Development), SPA (Single Page Application), Railway, CircleCI (CI/CD), Netlify',
    image: '/images/projects/project-7.png',
    tag: ['All', 'Full Stack'],
  },
  {
    id: 6,
    title: '🖼️ PhotoLabs',
    demoVideo: '/images/demos/PhotoLabs_Demo_Video.mp4',
    gitUrl: 'https://github.com/kazvee/photolabs/#readme',
    description: 'Stock Photo browsing app',
    tools:
      '⚙️ React, Express, PostgreSQL, API, Babel, Dotenv, SPA (Single Page Application)',
    image: '/images/projects/project-6.png',
    tag: ['All'],
  },
  {
    id: 5,
    title: '🧮 Two Player Math Game',
    gitUrl: 'https://github.com/kazvee/two_player_game/#readme',
    description: 'Terminal based Math Game',
    tools: '⚙️ Ruby, OOP (Object Oriented Programming)',
    image: '/images/projects/project-5.png',
    tag: ['All', 'Ruby'],
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
    tag: ['All'],
  },
  {
    id: 3,
    title: '📚 Resource Wall (Group Project)',
    gitUrl: 'https://github.com/kazvee/resource-wall/#readme',
    description: 'Full-stack Resource Sharing Site for internet links, blogs, or videos',
    tools: '⚙️ JavaScript, NodeJS, Express, PostgreSQL, CSS, SASS, EJS',
    image: '/images/projects/project-3.png',
    tag: ['All', 'Full Stack'],
  },
  {
    id: 2,
    title: '🍛 Recipe Rank',
    liveDemo: 'https://kazvee.github.io/recipe-rank/',
    demoVideo: '/images/demos/Recipe-Rank_Demo_Video.mp4',
    gitUrl: 'https://github.com/kazvee/recipe-rank/#readme',
    description:
      'Full-stack Recipe Sharing Site enabling users to vote on recipes',
    tools: '⚙️ React, Supabase, Netlify',
    image: '/images/projects/project-2.png',
    tag: ['All', 'Full Stack'],
  },
  {
    id: 1,
    title: '🐒 Monkey Duck Game',
    liveDemo: 'https://kazvee.github.io/monkey-duck-game/',
    demoVideo: '/images/demos/Monkey_Duck_Game_Demo_Video.mp4',
    gitUrl: 'https://github.com/kazvee/monkey-duck-game/#readme',
    description:
      'Ask the monkeys to shuffle colourful emojis, get ducks in a row, and WIN!',
    tools: '⚙️ React, Surge, SPA (Single Page Application)',
    image: '/images/projects/project-1.png',
    tag: ['All', 'Quick Concepts'],
  },
];

const Projects: React.FC = () => {
  const [tag, setTag] = useState('All');

  const filteredProjects = projectsData
    .filter((project) => project.tag.includes(tag))
    .sort((a, b) => b.id - a.id);

  const handleTagChange = (newTag: SetStateAction<string>) => {
    setTag(newTag);
  };

  return (
    <section className="pt-36" id="projects">
      <h2 className="text-center text-4xl font-bold text-white mb-8 pt-108 md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
        <ProjectTag
          name="View All"
          onClick={handleTagChange}
          isSelected={tag === 'All'}
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
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
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
