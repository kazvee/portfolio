import Link from 'next/link';

const Contact: React.FC = () => {
    return (
        <section className='p-4 md:pt-32' id='contact'>
            <h2 className='text-center text-4xl font-bold text-white mb-4'>
                Contact Me
            </h2>
            <div className='flex flex-col justify-center items-center text-white my-2'>
                <p className='text-base text-center lg:text-xl my-2'>
                    The best way to get in touch with me is through{' '}
                    <Link
                        className='text-blue-500 font-bold hover:text-blue-600'
                        href='https://www.linkedin.com/in/kazvee/'
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='Visit my LinkedIn profile'>
                        LinkedIn
                    </Link>
                </p>
                <p className='text-base text-center lg:text-xl'>
                    I&apos;d be happy to connect and chat about exciting projects or new challenges. Please don&apos;t hesitate to reach out! {' '}🙂
                </p>
            </div>
        </section>
    );
};

export default Contact;