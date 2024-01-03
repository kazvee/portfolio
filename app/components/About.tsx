'use client';
import TabButton from './TabButton';
import { SetStateAction, useState, useTransition } from 'react';

const TAB_DATA = [
  {
    title: 'Frontend',
    id: 'frontend',
    content: (
      <div className="flex justify-center">
        <ul className="list-none text-base lg:text-lg text-left">
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Ruby</li>
          <li>HTML</li>
          <li>CSS (& Sass)</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Backend',
    id: 'backend',
    content: (
      <div className="flex justify-center">
        <ul className="list-none text-base lg:text-lg text-left">
          <li>Node</li>
          <li>Express</li>
          <li>Rails</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Database & Testing',
    id: 'db-testing',
    content: (
      <div className="flex justify-center">
        <ul className="list-none text-base lg:text-lg text-left">
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>DynamoDB</li>
          <li>Supabase</li>
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
      <div className="md:grid md:grid-cols-1 gap-8 items-center py-8 px-0 lg:px-4 xl:gap-16 sm:py-16 xl:px-2">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-xl">
            I am a full stack web developer with a background in telecoms and
            technical support. Friendly and collaborative, I overcome challenges
            with a combination of cheerful determination, grit, and resilience
            gained through an established work ethic. I enjoy exploring
            opportunities to collaborate and contribute to meaningful projects
            and conversations.
          </p>

          <div className="flex flex-row justify-center lg:text-2xl mt-8">
            <TabButton
              selectTab={() => handleTabChange('frontend')}
              active={tab === 'frontend'}
              id="frontend">
              {' '}
              Frontend{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('backend')}
              active={tab === 'backend'}
              id="backend">
              {' '}
              Backend
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('db-testing')}
              active={tab === 'db-testing'}
              id="db-testing">
              {' '}
              Database & Testing
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
