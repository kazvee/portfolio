import Image from 'next/image';
import linkedinIcon from '@/public/images/linkedin-icon.png';
import githubIcon from '@/public/images/github-icon.png';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="footer border z-10 border-t-[#B6688A] border-l-transparent border-r-transparent text-pink-500">
      <div className="container p-12 flex justify-between items-center">
        <span>
          Chickadee photo by{' '}
          <Link
            className="text-white font-bold"
            href="https://www.pexels.com/photo/black-capped-chickadee-bird-on-a-redcurrant-shrub-19097681/"
            target="_blank"
            rel="noopener noreferrer">
            teyi 徐
          </Link>
        </span>
        <span>
          Icons from{' '}
          <Link
            className="text-white font-bold"
            href="https://icons8.com/"
            target="_blank"
            rel="noopener noreferrer">
            icons8
          </Link>
        </span>
        <span className="flex flex-row">
          <Link
            href="https://www.linkedin.com/in/kazvee/"
            target="_blank"
            rel="noopener noreferrer">
            <Image src={linkedinIcon} alt="LinkedIn icon" />
          </Link>
          <Link
            href="https://github.com/kazvee/"
            target="_blank"
            rel="noopener noreferrer">
            <Image src={githubIcon} alt="GitHub icon" />
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
