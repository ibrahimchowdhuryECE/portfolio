import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';
import './ProjectsGrid.css';

export default function ProjectsGrid() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Projects</span>
          <h2 className="section-title">Things I’ve built.</h2>
          <p className="lead">
            A mix of biomedical hardware, digital logic, and software. Click any project for the
            full story — problem, approach, and results.
          </p>
        </Reveal>

        <div className="project-grid">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
