import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Snowfall from './components/Snowfall';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col container mx-auto px-4 md:px-12 py-4'>
      <Snowfall />
      <Navbar />
      <div className='container mt-12 mx-auto px-4 md:px-12 py-4'>
        <Header />
        <About />
        <Projects />
        <Stats />
      </div>
      <Footer />
    </main>
  );
}