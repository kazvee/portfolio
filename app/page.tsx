import fs from 'fs';
import path from 'path';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Snowfall from './components/Snowfall';
import Blog from './components/Blog';
import type { Post } from './components/Blog';

const fetchPosts = async (): Promise<Post[]> => {
  const filePath = path.join(process.cwd(), 'data/posts.json');
  if (!fs.existsSync(filePath)) return [];
  const raw = fs.readFileSync(filePath, 'utf-8');
  const posts: Post[] = JSON.parse(raw);

  // Keep only the last 3 posts
  const lastPosts = posts.slice(-3).reverse(); // newest first

  return lastPosts.map((p) => ({
    ...p,
    description: p.description?.trim() || '',
    truncatedContent: p.truncatedContent?.trim() || '',
  }));
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