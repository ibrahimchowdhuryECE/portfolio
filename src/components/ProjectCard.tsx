import { Link } from 'react-router-dom';
import type { Project } from '../types/project';
import './ProjectCard.css';

/**
 * A single row in the project index — reads like an engineer's catalog entry.
 */
export default function ProjectCard({ project }: { project: Project }) {
  const category = project.tags[0] ?? 'Project';

  return (
    <Link to={`/projects/${project.slug}`} className="prow">
      <span className="prow-cat">[{category}]</span>

      <div className="prow-main">
        <h3 className="prow-title">{project.title}</h3>
        <p className="prow-blurb">{project.blurb}</p>
        <div className="prow-tags tag-row">
          {project.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>

      <span className="prow-arrow" aria-hidden="true">
        →
      </span>
    </Link>
  );
}
