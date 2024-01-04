'use client';
import { SetStateAction, useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectsData = [
  {
    id: 1,
    title: '🐾 PawTrackr',
    gitUrl: 'https://github.com/kazvee/PawTrackr/#readme',
    description: 'Full-stack Pet Care Management (Group Project)',
    tools: '⚙️ React, NodeJS, Express, Axios, Bootstrap, PostgreSQL',
    image: '/images/projects/project-1.png',
    tag: ['All', 'Full Stack'],
  },
  {
    id: 2,
    title: '🪴 Jungle',
    gitUrl: 'https://github.com/kazvee/jungle_rails/#readme',
    description: 'Full-stack e-commerce Plant Shop',
    tools:
      '⚙️ Ruby on Rails, MVC pattern, Active Record ORM, Bootstrap, PostgreSQL, Bcrypt, Stripe, Rspec, Cypress',
    image: '/images/projects/project-2.png',
    tag: ['All', 'Full Stack'],
  },
  {
    id: 3,
    title: '📅 Interview Scheduler',
    gitUrl: 'https://github.com/kazvee/scheduler/#readme',
    description: 'Full-stack Meeting Booking app',
    tools:
      '⚙️ React, NodeJS, Axios, Dotenv, Cypress, Jest, TDD (Test Driven Development), SPA (Single Page Application), Railway, CircleCI (CI/CD), Netlify',
    image: '/images/projects/project-3.png',
    tag: ['All', 'Full Stack'],
  },
  {
    id: 4,
    title: '🖼️ PhotoLabs',
    gitUrl: 'https://github.com/kazvee/photolabs/#readme',
    description: 'Stock photo browsing app',
    tools:
      '⚙️ React, Express, PostgreSQL, API, Babel, Dotenv, SPA (Single Page Application)',
    image: '/images/projects/project-4.png',
    tag: ['All'],
  },
  {
    id: 5,
    title: '🧮 Two Player Math Game',
    gitUrl: 'https://github.com/kazvee/two_player_game/#readme',
    description: 'Terminal based math game',
    tools: '⚙️ Ruby, OOP (Object Oriented Programming)',
    image: '/images/projects/project-5.png',
    tag: ['All', 'Ruby'],
  },
  {
    id: 6,
    title: '🐦 Tweeter',
    gitUrl: 'https://github.com/kazvee/tweeter/#readme',
    description: 'Single-page social media app',
    tools:
      '⚙️ JavaScript, NodeJS, Express, HTML, CSS, SASS, jQuery, AJAX, SPA (Single Page Application)',
    image: '/images/projects/project-6.png',
    tag: ['All'],
  },
  {
    id: 7,
    title: '📚 Resource Wall (Group Project)',
    gitUrl: 'https://github.com/kazvee/resource-wall/#readme',
    description: 'Resource sharing site for internet links, blogs, or videos',
    tools: '⚙️ JavaScript, NodeJS, Express, PostgreSQL, CSS, SASS, EJS',
    image: '/images/projects/project-7.png',
    tag: ['All', 'Full Stack'],
  },
  {
    id: 8,
    title: '🍛 Recipe Rank',
    gitUrl: 'https://github.com/kazvee/recipe-rank/#readme',
    description:
      'Full-stack Recipe Sharing site enabling users to vote on recipes',
    tools: '⚙️ React, Supabase, Netlify',
    image: '/images/projects/project-8.png',
    tag: ['All', 'Full Stack'],
  },
  {
    id: 9,
    title: '🐒 Monkey Duck Game',
    gitUrl: 'https://github.com/kazvee/monkey-duck-game/#readme',
    description:
      'Ask the monkeys to shuffle colourful emojis, get ducks in a row, and WIN!',
    tools: '⚙️ React, Surge, SPA (Single Page Application)',
    image: '/images/projects/project-9.png',
    tag: ['All', 'React'],
  },
];
const Projects: React.FC = () => {
  const [tag, setTag] = useState('All');

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

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
          name="All"
          onClick={handleTagChange}
          isSelected={tag === 'All'}
        />
        <ProjectTag
          name="Full Stack"
          onClick={handleTagChange}
          isSelected={tag == 'Full Stack'}
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
            gitUrl={project.gitUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
