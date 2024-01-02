import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-extrabold">
            Hi there, I&apos;m Karen! 😀
          </h1>
          <p className="text-lg lg:text-xl">
            Human ~ Global Digital Citizen ~ Lifelong Learner ~ Full Stack
            Software Developer 👩‍💻
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
      </div>
    </section>
  );
};

export default Header;
