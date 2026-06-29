import PageTransition from '../components/PageTransition';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Journey from '../sections/Journey';
import ProjectsGrid from '../sections/ProjectsGrid';
import Contact from '../sections/Contact';

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <About />
      <Journey />
      <ProjectsGrid />
      <Contact />
    </PageTransition>
  );
}
