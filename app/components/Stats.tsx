import Image from 'next/image';
import Link from 'next/link';

const Stats: React.FC = () => {
  return (
    <section className='pt-36' id='stats'>
      <h2 className='text-center text-4xl font-bold text-white mb-8 pt-108 md:mb-12'>
        My GitHub Stats
      </h2>
      <div className='flex flex-row justify-center items-center gap-2 text-white my-6'>
        <Link href='https://github.com/kazvee#-at-a-glance'>
          <Image
            src='https://raw.githubusercontent.com/kazvee/my-github-stats/main/images/kazvee-github-stats.svg'
            alt='GitHub Activity for kazvee'
            width={500}
            height={300}
          />
        </Link>
      </div>
    </section>
  );
};

export default Stats;
