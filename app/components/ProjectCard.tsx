import Link from 'next/link';

interface ProjectCardProps {
  imgUrl: string;
  title: string;
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
}) => {
  return (
    <div>
      <div
        className="group rounded-t-xl h-52 md:h-72 bg-top-left relative overflow-hidden"
        style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover' }}>
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center">
          <Link href={gitUrl} target="_blank" rel="noopener noreferrer">
            Click for Project Details
          </Link>
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
