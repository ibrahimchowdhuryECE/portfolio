import { Link } from 'react-router-dom';
import type { Project } from '../types/project';
import MediaSlot from './MediaSlot';
import './ProjectCard.css';

/**
 * A project card: a cover image, the title, and its key skills as bubbles. The
 * whole card links to the project's page. No description, title and skills carry it.
 */
export default function ProjectCard({ project }: { project: Project }) {
  const category = project.tags[0] ?? 'Project';
  const code = category.slice(0, 3).toUpperCase();
  const skills = project.tags.slice(1);

  return (
    <Link to={`/projects/${project.slug}`} className="pcard">
      <div className={`pcard-media ${project.thumbnail ? 'pcard-media--photo' : ''}`}>
        <MediaSlot src={project.thumbnail} ratio="video" label={code} />
      </div>

      <div className="pcard-body">
        <span className="pcard-cat">{category}</span>
        <h3 className="pcard-title">{project.title}</h3>

        <div className="pcard-skills">
          {skills.map((s) => (
            <span key={s} className="bubble">
              {s}
            </span>
          ))}
        </div>

        <span className="pcard-arrow" aria-hidden="true">
          →
        </span>
      </div>
    </Link>
  );
}
