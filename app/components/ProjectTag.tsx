interface ProjectTagProps {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}

const ProjectTag: React.FC<ProjectTagProps> = ({
  name,
  onClick,
  isSelected,
}) => {
  const buttonStyles = isSelected
    ? 'text-white border-pink-500'
    : 'text-[#ADB7BE] border-slate-600 hover:border-purple-500';

  return (
    <button
      onClick={() => onClick(name)}
      className={`border-2 rounded-full px-6 py-3 text-sm md:text-xl cursor-pointer ${buttonStyles}`}>
      {name}
    </button>
  );
};

export default ProjectTag;
