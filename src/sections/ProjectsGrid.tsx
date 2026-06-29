import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';
import './ProjectsGrid.css';

export default function ProjectsGrid() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <Reveal className="section-head projects-head">
          <div>
            <span className="eyebrow">Selected work</span>
            <h2 className="section-title">Projects.</h2>
          </div>
          <span className="projects-count">{projects.length} entries</span>
        </Reveal>

        <div className="project-index">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={Math.min(i * 0.06, 0.24)}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
