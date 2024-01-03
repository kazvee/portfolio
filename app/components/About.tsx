'use client';
import Image from 'next/image';
import aboutImage from '@/public/images/about-image.jpg';
import TabButton from './TabButton';
import { SetStateAction, useState, useTransition } from 'react';

const TAB_DATA = [
  {
    title: 'Languages',
    id: 'languages',
    content: (
      <div className="flex justify-center">
        <ul className="list-none text-xl text-left">
          <li>JavaScript</li>
          <li>Ruby</li>
          <li>SQL</li>
          <li>HTML</li>
          <li>CSS (& Sass)</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Frameworks / Libraries / Environments',
    id: 'frameworks-libraries-environments',
    content: (
      <div className="flex justify-center">
        <ul className="list-none text-xl text-left">
          <li>React</li>
          <li>Next.js</li>
          <li>Node</li>
          <li>Express</li>
          <li>Rails</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Systems / Databases',
    id: 'systems-databases',
    content: (
      <div className="flex justify-center">
        <ul className="list-none text-xl text-left">
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>DynamoDB</li>
          <li>Supabase</li>
          <li>Git (& GitHub)</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Testing',
    id: 'testing',
    content: (
      <div className="flex justify-center">
        <ul className="list-none text-xl text-left">
          <li>Cypress</li>
          <li>Jest</li>
          <li>Mocha</li>
          <li>Chai</li>
          <li>Selenium</li>
        </ul>
      </div>
    ),
  },
];

const About: React.FC = () => {
  const [tab, setTab] = useState('frontend');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: SetStateAction<string>) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-2">
        <Image
          src={aboutImage}
          alt="close up shot of a computer keyboard under purple lighting"
          width={500}
          height={500}
          className="rounded-2xl"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a background in telecoms and
            technical support. Friendly and collaborative, I overcome challenges
            with a combination of cheerful determination, grit, and resilience
            gained through an established work ethic. I enjoy exploring
            opportunities to collaborate and contribute to meaningful projects
            and conversations.
          </p>
          <div className="flex flex-row justify-start mt-8 lg:text-xl align-start">
            <TabButton
              selectTab={() => handleTabChange('languages')}
              active={tab === 'languages'}
              id="languages">
              {' '}
              Languages{' '}
            </TabButton>
            <TabButton
              selectTab={() =>
                handleTabChange('frameworks-libraries-environments')
              }
              active={tab === 'frameworks-libraries-environments'}
              id="frameworks-libraries-environments">
              {' '}
              Frameworks
              <br />
              Libraries
              <br />
              Environments{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('systems-databases')}
              active={tab === 'systems-databases'}
              id="systems-databases">
              {' '}
              Systems
              <br />
              Databases{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('testing')}
              active={tab === 'testing'}
              id="testing"
            >
              {' '}
              Testing{' '}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
