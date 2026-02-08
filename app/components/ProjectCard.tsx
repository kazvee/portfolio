import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import viewCodeIcon from '@/public/images/projects/icon-view-code.png';
import liveDemoIcon from '@/public/images/projects/icon-live-demo.png';
import demoVideoIcon from '@/public/images/projects/icon-demo-video.png';
import Modal from './Modal';

interface ProjectCardProps {
  imgurl: string;
  title: string;
  livedemo?: string;
  demovideo?: string;
  giturl: string;
  description: string;
  tools: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imgurl,
  giturl,
  tools,
  livedemo,
  demovideo,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="border border-pink-500 rounded-xl flex flex-col max-h-[500px]">
      <div
        className="group rounded-t-xl h-52 md:h-72 bg-top-left relative overflow-hidden"
        style={{ backgroundImage: `url(${imgurl})`, backgroundSize: 'cover' }}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center">
          <div className="flex flex-col items-left">
            {livedemo && (
              <Link
                href={livedemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
                aria-label={`View live demo for ${title}`}
              >
                <Image
                  src={liveDemoIcon}
                  alt="Live Demo Icon"
                  className="mr-2 w-12 h-12 md:w-16 md:h-16"
                />
                <span className="text-base md:text-xl font-semibold">
                  Live Demo
                </span>
              </Link>
            )}
            {demovideo && (
              <button
                onClick={openModal}
                className="flex items-center"
                aria-label={`View demo video for ${title}`}
              >
                <Image
                  src={demoVideoIcon}
                  alt="Demo Icon"
                  className="mr-2 w-12 h-12 md:w-16 md:h-16"
                />
                <span className="text-base md:text-xl font-semibold">
                  Demo Video
                </span>
              </button>
            )}
            <Link
              href={giturl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
              aria-label={`View GitHub repository for ${title}`}
            >
              <Image
                src={viewCodeIcon}
                alt="Project Repo Icon"
                className="mr-2 w-12 h-12 md:w-16 md:h-16"
              />
              <span className="text-base md:text-xl font-semibold">
                View Code
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#170E1B] rounded-b-xl py-6 px-4 text-white flex-grow">
        <span className="text-base md:text-lg font-semibold">{title}</span>
        <p className="text-[#B6688A] text-sm md:text-base">{description}</p>
        <p className="text-white text-sm md:text-base">{tools}</p>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        videoUrl={demovideo!}
        title={title}
      />
    </div>
  );
};

export default ProjectCard;
