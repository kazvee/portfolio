import githubIcon from '@/public/images/github-icon.png';
import linkedinIcon from '@/public/images/linkedin-icon.png';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="footer border z-10 border-t-[#B6688A] border-l-transparent border-r-transparent text-pink-500">
      <div className="container p-0 md:p-12 flex justify-between items-center">
        <span>
          Chickadee photo by{' '}
          <Link
            className="text-white font-bold"
            href="https://www.pexels.com/photo/black-capped-chickadee-bird-on-a-redcurrant-shrub-19097681/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit the photo of a black-capped chickadee by teyi 徐 on Pexels"
          >
            teyi 徐
          </Link>
        </span>
        <span>
          Icons from{' '}
          <Link
            className="text-white font-bold"
            href="https://icons8.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Icons8 for icons"
          >
            icons8
          </Link>
        </span>
        <span className="flex flex-row">
          <Link
            href="https://www.linkedin.com/in/kazvee/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
          >
            <Image src={linkedinIcon} alt="LinkedIn logo linking to my profile" />
          </Link>
          <Link
            href="https://github.com/kazvee/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
          >
            <Image src={githubIcon} alt="GitHub logo linking to my profile" />
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
