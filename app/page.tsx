import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container mx-auto px-12 py-4">
      <Navbar />
      <div className="container mt-12 mx-auto px-12 py-4">
        <Header />
        <About />
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
