import Link from 'next/link';

interface NavlinkProps {
  href: string;
  title: string;
  hoverTextColor: string;
}

const Navlink: React.FC<NavlinkProps> = ({ href, title, hoverTextColor }) => {
  const externalLink = href.startsWith('http');

  return (
    <>
      {externalLink ? (
        <a
          href={href}
          className={`block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 ${hoverTextColor}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`External link to ${title}`}
        >
          {title}
        </a>
      ) : (
        <Link href={href} passHref>
          <span
            role="link"
            tabIndex={0}
            className={`block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 ${hoverTextColor}`}
            aria-label={title}
          >
            {title}
          </span>
        </Link>
      )}
    </>
  );
};

export default Navlink;
