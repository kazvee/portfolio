import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import rawProjects from '../data/projects.json';

interface Project {
  id: number;
  title: string;
  livedemo: string;
  demovideo: string;
  giturl: string;
  description: string;
  tools: string;
  imgurl: string;
  tags: string[];
}

const Projects: React.FC = () => {
  const [tag, setTag] = useState('View All');

  const projectsData: Project[] = rawProjects as Project[];

  const filteredProjects =
    tag === 'View All'
      ? projectsData
      : projectsData.filter((project) =>
        project.tags.includes(tag)
      );

  return (
    <section className="pt-2 md:pt-10" id="projects">
      <h2 className="text-center text-4xl font-bold text-white mb-4">
        My Projects
      </h2>

      <p className="text-[#B6688A] text-center text-sm md:text-base">
        Some of my favourite projects are highlighted below. Hover over the
        images to view the code or demos. To see more, check out my{' '}
        <a
          className="text-white hover:text-pink-500 hover:underline"
          href="https://github.com/kazvee?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{' '}
        account!
      </p>

      <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
        <ProjectTag
          name="View All"
          onClick={setTag}
          isSelected={tag === 'View All'}
        />
        <ProjectTag
          name="Full Stack"
          onClick={setTag}
          isSelected={tag === 'Full Stack'}
        />
        <ProjectTag
          name="Quick Concepts"
          onClick={setTag}
          isSelected={tag === 'Quick Concepts'}
        />
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tools={project.tools}
            imgurl={project.imgurl}
            livedemo={project.livedemo}
            demovideo={project.demovideo}
            giturl={project.giturl}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;