'use client';
import headerImage from '@/public/images/header-image.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header: React.FC = () => {
  const [isInfoSlideVisible, setIsInfoSlideVisible] = useState(false);

  return (
    <header className="mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="lg:mb-6 mb-2 text-4xl md:text-5xl lg:text-6xl font-extrabold">
            Hi there, I&apos;m{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
              Karen!
            </span>
          </h1>
          <p className="text-[#B6688A] text-base mb-4 sm:text-lg lg:text-xl">
            Global Digital Citizen ~ Lifelong Learner
          </p>
          <p className="text-base mb-1 sm:text-lg lg:text-2xl">
            Full Stack Software Developer 👩‍💻
          </p>

          <div className="max-w-lg min-h-[40px] flex flex-col justify-end text-left">
            <p
              className={`text-sm lg:text-xl text-pink-400 
                ${
                  isInfoSlideVisible
                    ? 'opacity-100 visible translate-y-0 transition-all duration-800 ease-in'
                    : 'opacity-0 invisible -translate-y-4 transition-all duration-150 ease-out'
                } hidden sm:block`}
              aria-hidden={!isInfoSlideVisible}
            >
              Visit my interactive chatbot to learn more about me!
            </p>
          </div>

          <div className="mb-4">
            <Link
              href="https://kazvee.zapier.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with K-Bot"
              className="inline-block w-full sm:w-fit rounded-full mt-3 mr-4"
            >
              <span
                onMouseEnter={() => setIsInfoSlideVisible(true)}
                onMouseLeave={() => setIsInfoSlideVisible(false)}
                className="block bg-gradient-to-br from-pink-900 to-pink-700 hover:from-pink-700 hover:to-pink-900 rounded-full px-5 py-2 text-white"
              >
                Chat with K-bot 🤖
              </span>
            </Link>

            <Link
              href="https://github.com/kazvee/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub page"
              className="inline-block w-full sm:w-fit rounded-full mt-3 mr-4"
            >
              <span className="block bg-gradient-to-br from-pink-900 to-pink-700 hover:from-pink-700 hover:to-pink-900 rounded-full px-5 py-2 text-white">
                Visit my GitHub page
              </span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/kazvee/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with me on LinkedIn"
              className="inline-block w-full sm:w-fit rounded-full mt-3"
            >
              <span className="block bg-gradient-to-br from-pink-900 to-pink-700 hover:from-pink-700 hover:to-pink-900 rounded-full px-5 py-2 text-white">
                Connect with me on LinkedIn
              </span>
            </Link>
          </div>
        </div>

        <div className="col-span-4 place-self-center mt-8 lg:ml-8 sm:mt-2 sm:ml-0">
          <div className="rounded-full bg-pink-900 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative flex items-center justify-center">
            <Image
              src={headerImage}
              alt="A black-capped chickadee bird sitting on a redcurrant shrub"
              className="w-[95%] h-auto border-4 border-pink-900 rounded-full"
              priority={true}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
