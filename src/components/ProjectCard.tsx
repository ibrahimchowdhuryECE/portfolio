import { Link } from 'react-router-dom';
import type { Project } from '../types/project';
import MediaSlot from './MediaSlot';
import './ProjectCard.css';

/**
 * A single row in the project index — reads like an engineer's catalog entry,
 * with an icon/image slot you can fill with a render, photo, or icon later.
 */
export default function ProjectCard({ project }: { project: Project }) {
  const category = project.tags[0] ?? 'Project';
  const code = category.slice(0, 3).toUpperCase();

  return (
    <Link to={`/projects/${project.slug}`} className="prow">
      <div className="prow-thumb">
        <MediaSlot src={project.thumbnail} ratio="square" label={code} />
      </div>

      <div className="prow-main">
        <span className="prow-cat">[{category}]</span>
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
