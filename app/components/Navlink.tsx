import Link from 'next/link';

interface NavlinkProps {
  href: string;
  title: string;
  hoverTextColor: string;
}

const Navlink: React.FC<NavlinkProps> = ({ href, title, hoverTextColor }) => {
  return (
    <Link
      href={href}
      passHref
      className={`block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 ${hoverTextColor}`}>
      {title}
    </Link>
  );
};

export default Navlink;
