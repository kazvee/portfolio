import Link from 'next/link';

interface Post {
    id: number;
    title: string;
    description: string;
    url: string;
}

interface BlogProps {
    posts: Post[];
}

const BlogTitle: React.FC = () => (
    <section className='p-4 md:pt-32' id='blog'>
        <h2 className='text-center text-4xl font-bold text-white mb-4'>
            Latest Blog Posts
        </h2>
    </section>
);

const BlogEmpty: React.FC = () => (
    <section className='p-4 md:pt-32' id='blog'>
        <h2 className='text-center text-4xl font-bold text-white mb-4'>
            Latest Blog Posts
        </h2>
        <p className='text-center text-white'>Coming soon!</p>
    </section>
);

const BlogPost: React.FC<{ post: Post }> = ({ post }) => {
    return (
        <div key={post.id} className='my-4 w-full md:w-3/5'>
            <div className='flex flex-col p-4 border border-purple-600 rounded-lg'>
                <h3 className='text-2xl font-bold text-pink-500 mb-2'>{post.title}</h3>
                <p className='text-xl mb-2'>{post.description}</p>
                <p className='text-xl mb-2 flex justify-end text-white'>Read the full article:</p>
                <div className='flex justify-end'>
                    <Link
                        href={post.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={`Read the full article about ${post.title}`}
                        className='text-transparent font-bold text-xl bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500'>
                        {post.title}
                    </Link>
                </div>
            </div>
        </div>
    );
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
    return (
        <>
            <BlogTitle />
            {posts?.length ? (
                <div className='flex flex-col justify-center items-center text-white my-2'>
                    {posts.map((post) => (
                        <BlogPost key={post.id} post={post} />
                    ))}
                </div>
            ) : (
                <BlogEmpty />
            )}
        </>
    );
};

export default Blog;