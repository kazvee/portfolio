interface NavlinkProps {
  href: string;
  title: string;
  hoverTextColor: string;
}

const Navlink: React.FC<NavlinkProps> = ({ href, title, hoverTextColor }) => {
  const externalLink = href.startsWith('http');

  return (
    <a
      href={href}
      className={`block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 ${hoverTextColor}`}
      target={externalLink ? "_blank" : undefined}
      rel={externalLink ? "noopener noreferrer" : undefined}
      aria-label={externalLink ? `External link to ${title}` : title}
    >
      {title}
    </a>
  );
};

export default Navlink;
