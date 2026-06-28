import { useState } from 'react';
import PrivacyPolicyModal from './PrivacyPolicyModal';

const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <footer className="footer border z-10 border-t-[#B6688A] border-l-transparent border-r-transparent text-pink-500 text-sm md:text-base">
      <div className="container p-0 md:p-12 flex flex-col md:flex-row justify-between items-center">
        <span className="mb-1">
          Chickadee photo by{' '}
          <a
            className="text-white font-bold"
            href="https://www.pexels.com/photo/black-capped-chickadee-bird-on-a-redcurrant-shrub-19097681/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit the photo of a black-capped chickadee by teyi 徐 on Pexels"
          >
            teyi 徐
          </a>
        </span>
        <span className="mb-1">
          Icons from{' '}
          <a
            className="text-white font-bold"
            href="https://icons8.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Icons8 for icons"
          >
            icons8
          </a>
        </span>
        <span className="mb-1">
          <button
            className="text-white font-bold cursor-pointer"
            onClick={openModal}
            aria-label="View Privacy Policy"
          >
            Privacy Policy
          </button>
        </span>
        <span className="flex flex-row mb-1">
          <a
            href="https://www.linkedin.com/in/kazvee/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
          >
            <img
              src="/images/linkedin-icon.png"
              alt="LinkedIn logo linking to my profile"
            />
          </a>
          <a
            href="https://github.com/kazvee/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
          >
            <img
              src="/images/github-icon.png" 
              alt="GitHub logo linking to my profile" />
          </a>
        </span>
      </div>
      <PrivacyPolicyModal isOpen={isModalOpen} onClose={closeModal} />
    </footer>
  );
};

export default Footer;
