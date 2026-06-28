import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Stats from '../components/Stats';
import Snowfall from '../components/Snowfall';
import Blog from '../components/Blog';

import postsData from '../data/posts.json';
import type { Post } from '../components/Blog';

export default function Home() {
    const posts: Post[] = postsData;

    // Keep latest 3 posts
    const lastPosts = posts.slice(0, 3).map((p) => ({
        ...p,
        description: p.description?.trim() || '',
    }));

    return (
        <main className="flex min-h-screen flex-col container mx-auto px-4 md:px-12 py-4">
            <Snowfall />
            <Navbar />

            <div className="container mt-12 mx-auto px-4 md:px-12 py-4">
                <Header />

                <section id="about">
                    <About />
                </section>

                <section id="projects">
                    <Projects />
                </section>

                <section id="stats">
                    <Stats />
                </section>

                <section id="blog">
                    <Blog posts={lastPosts} />
                </section>

                <section id="contact">
                    <Contact />
                </section>
            </div>

            <Footer />
        </main>
    );
}