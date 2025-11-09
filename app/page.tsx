import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Snowfall from './components/Snowfall';
import Blog from './components/Blog';

interface Post {
  id: number;
  title: string;
  description: string;
  url: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch('https://dev.to/api/articles?username=kazvee');
  const posts: Post[] = await res.json();
  return posts;
};

const Home = async () => {
  const posts = await fetchPosts();

  return (
    <main className='flex min-h-screen flex-col container mx-auto px-4 md:px-12 py-4'>
      <Snowfall />
      <Navbar />
      <div className='container mt-12 mx-auto px-4 md:px-12 py-4'>
        <Header />
        <section id='about'><About /></section>
        <section id='projects'><Projects /></section>
        <section id='stats'><Stats /></section>
        <section id='blog'><Blog posts={posts} /></section>
        <section id='contact'><Contact /></section>
      </div>
      <Footer />
    </main>
  );
}

export default Home;