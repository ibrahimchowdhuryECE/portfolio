import PageTransition from '../components/PageTransition';
import Hero from '../sections/Hero';
import ProjectsGrid from '../sections/ProjectsGrid';
import About from '../sections/About';
import Journey from '../sections/Journey';
import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <ProjectsGrid />
      <About />
      <Journey />
      <Testimonials />
      <Contact />
    </PageTransition>
  );
}
