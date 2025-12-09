'use client';
import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import Link from 'next/link';
import loadingImage from '@/public/images/projects-loading.jpg';
import Image from 'next/image';

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
  const [projectsData, setProjectsData] = useState<Project[]>([]);
  const [tag, setTag] = useState('View All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        if (!response.ok) {
          throw new Error('Failed to fetch projects data ☹️');
        }
        const data = await response.json();
        setProjectsData(data.projects || []);
      } catch (err: any) {
        setError(err.message || 'Error fetching data ☹️');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleTagChange = (newTag: string) => setTag(newTag);

  const filteredProjects = Array.isArray(projectsData)
    ? projectsData.filter((project) => project.tags.includes(tag))
    : [];

  return (
    <section className='pt-2 md:pt-10' id='projects'>
      <h2 className='text-center text-4xl font-bold text-white mb-4'>
        My Projects
      </h2>
      <p className='text-[#B6688A] text-center text-sm md:text-base'>
        Some of my favourite projects are highlighted below. Hover over 
        (desktop) or tap (mobile) the images to view the code or demos. To see more, check out my{' '}
        <Link
          className='text-white hover:text-pink-500 hover:underline'
          href='https://github.com/kazvee?tab=repositories'
          target='_blank'
          rel='noopener noreferrer'
        >
          GitHub
        </Link>{' '}
        account!
      </p>

      <div className='flex flex-row justify-center items-center gap-2 text-white my-6'>
        <ProjectTag
          name='View All'
          onClick={handleTagChange}
          isSelected={tag === 'View All'}
        />
        <ProjectTag
          name='Full Stack'
          onClick={handleTagChange}
          isSelected={tag === 'Full Stack'}
        />
        <ProjectTag
          name='Quick Concepts'
          onClick={handleTagChange}
          isSelected={tag === 'Quick Concepts'}
        />
      </div>

      {loading ? (
        <div className='flex flex-col items-center justify-center'>
          <Image
            src={loadingImage}
            alt="Raccoon 'and now we wait' meme"
            className='w-96 rounded-lg'
          />
        </div>
      ) : (
        <div
          role='region'
          aria-labelledby='projects-header'
          className='grid md:grid-cols-3 gap-8 md:gap-12'
        >
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
      )}

      {error && <p className='text-4xl text-center text-red-500'>{error}</p>}
    </section>
  );
};

export default Projects;