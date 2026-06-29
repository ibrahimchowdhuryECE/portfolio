import PageTransition from '../components/PageTransition';
import Hero from '../sections/Hero';
import SignalPin from '../components/SignalPin';
import ProjectsGrid from '../sections/ProjectsGrid';
import About from '../sections/About';
import Journey from '../sections/Journey';
import Contact from '../sections/Contact';

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <SignalPin />
      <ProjectsGrid />
      <About />
      <Journey />
      <Contact />
    </PageTransition>
  );
}
