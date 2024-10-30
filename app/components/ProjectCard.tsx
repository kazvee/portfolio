import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import viewCodeIcon from "@/public/images/projects/icon-view-code.png";
import liveDemoIcon from "@/public/images/projects/icon-live-demo.png";
import demoVideoIcon from "@/public/images/projects/icon-demo-video.png";
import Modal from "./Modal";


interface ProjectCardProps {
  imgUrl: string;
  title: string;
  liveDemo?: string;
  demoVideo?: string;
  gitUrl: string;
  description: string;
  tools: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgUrl,
  title,
  description,
  tools,
  gitUrl,
  liveDemo,
  demoVideo
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <div
        className="group rounded-t-xl h-52 md:h-72 bg-top-left relative overflow-hidden"
        style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center">
          <div className="flex flex-col items-left">
            {liveDemo && liveDemo.trim() !== "" && (
              <Link
                href={liveDemo}
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
                <span className="text-base md:text-xl font-semibold">Live Demo</span>
              </Link>
            )}
            {demoVideo && demoVideo.trim() !== "" && (
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
                <span className="text-base md:text-xl font-semibold">Demo Video</span>
              </button>
            )}
            <Link
              href={gitUrl}
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
              <span className="text-base md:text-xl font-semibold">View Code</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#170E1B] rounded-b-xl py-6 px-4 text-white">
        <h5 className="text-base md:text-lg font-semibold">{title}</h5>
        <p className="text-[#B6688A] text-sm md:text-base">{description}</p>
        <p className="text-white text-sm md:text-base">{tools}</p>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} videoUrl={demoVideo!} title={title} />
    </div>
  );
};

export default ProjectCard;
