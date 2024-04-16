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
          target='_blank'
          rel='noopener noreferrer'
        >
          {title}
        </a>
      ) : (
        <Link href={href} passHref>
          <span
            className={`block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 ${hoverTextColor}`}
          >
            {title}
          </span>
        </Link>
      )}
    </>
  );
};

export default Navlink;
