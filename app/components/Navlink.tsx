import Link from 'next/link';

interface NavlinkProps {
  href: string;
  title: string;
  textColor: string;
}

const Navlink: React.FC<NavlinkProps> = ({ href, title, textColor }) => {
  return (
    <Link
      href={href}
      className={`block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 hover:text-${textColor}-500`}>
      {title}
    </Link>
  );
};

export default Navlink;
