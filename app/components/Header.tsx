import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-extrabold">
            Hi there, I&apos;m Karen! 😀
          </h1>
          <p className="text-base sm:text-lg mb-6 lg:text-xl">
            Human ~ Global Digital Citizen ~ Lifelong Learner ~ Full Stack Software Developer 👩‍💻
          </p>
          <div>
            <Link
              href="https://www.linkedin.com/in/kazvee/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full text-white mt-3">
              <span className="block bg-pink-900 hover:bg-pink-700 rounded-full px-5 py-2">
                Connect with me on LinkedIn
              </span>
            </Link>
            <Link
              href="https://github.com/kazvee/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full text-white mt-3">
              <span className="block bg-pink-900 hover:bg-pink-700 rounded-full px-5 py-2">
                Visit my GitHub page
              </span>
            </Link>
          </div>
        </div>
        <div className="col-span-4 place-self-center mt-8 ml-8 sm:mt-2 sm:ml-0">
          <div className="rounded-full bg-pink-900 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/header-image.png"
              alt="black-capped chickadee bird sitting on a redcurrant shrub"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={380}
              height={380}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
