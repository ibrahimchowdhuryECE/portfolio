import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import type { Project } from '../types/project';
import './ProjectCard.css';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }}>
      <Link to={`/projects/${project.slug}`} className="project-card">
        <div className="project-card-thumb">
          {project.thumbnail ? (
            <img src={project.thumbnail} alt="" />
          ) : (
            <span className="project-card-thumb-mark">{'</>'}</span>
          )}
        </div>
        <div className="project-card-body">
          <h3 className="project-card-title">{project.title}</h3>
          <p className="project-card-blurb">{project.blurb}</p>
          <div className="tag-row">
            {project.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
          <span className="project-card-cta">
            View project
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="none" stroke="currentColor" strokeWidth="2" d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
