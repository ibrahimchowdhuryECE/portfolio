import PageTransition from '../components/PageTransition';
import Hero from '../sections/Hero';
import SignalLoader from '../components/SignalLoader';
import ProjectsGrid from '../sections/ProjectsGrid';
import About from '../sections/About';
import Journey from '../sections/Journey';
import Contact from '../sections/Contact';

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <SignalLoader />
      <ProjectsGrid />
      <About />
      <Journey />
      <Contact />
    </PageTransition>
  );
}
