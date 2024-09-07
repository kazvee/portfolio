import Link from "next/link";
import Image from "next/image";
import projectRepoIcon from "@/public/images/projects/project-repo-icon.png";
import projectDemoIcon from "@/public/images/projects/project-demo-icon.png"; // Adjust the path if needed

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  demoUrl?: string;
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
  demoUrl,
}) => {
  return (
    <div>
      <div
        className="group rounded-t-xl h-52 md:h-72 bg-top-left relative overflow-hidden"
        style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center">
          <div className="flex flex-col items-center space-y-4">
            {demoUrl && demoUrl.trim() !== "" && (
              <Link
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Image
                  src={projectDemoIcon}
                  alt="Demo Icon"
                  className="mr-2"
                />
                <span className="text-2xl font-semibold">Live Demo</span>
              </Link>
            )}
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Image
                src={projectRepoIcon}
                alt="Project Repo Icon"
                className="mr-2"
              />
              <span className="text-2xl font-semibold">View Code</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#170E1B] rounded-b-xl py-6 px-4 text-white">
        <h5 className="font-lg font-semibold">{title}</h5>
        <p className="text-[#B6688A]">{description}</p>
        <p className="text-white">{tools}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
