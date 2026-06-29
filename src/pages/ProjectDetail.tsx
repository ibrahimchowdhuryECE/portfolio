import { Link, useParams } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import Reveal from '../components/Reveal';
import MediaSlot from '../components/MediaSlot';
import { getProject } from '../data/projects';
import NotFound from './NotFound';
import './ProjectDetail.css';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);

  // Unknown slug -> show the 404 page.
  if (!project) return <NotFound />;

  const summary = [
    { label: 'Problem', value: project.summary.problem },
    { label: 'My Role', value: project.summary.role },
    { label: 'Tech / Stack', value: project.summary.stack },
    { label: 'Outcome', value: project.summary.outcome },
  ];

  return (
    <PageTransition>
      <article className="section detail">
        <div className="container detail-inner">
          <Link to="/#projects" className="detail-back">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="none" stroke="currentColor" strokeWidth="2" d="M19 12H5m6-6-6 6 6 6" />
            </svg>
            Back to projects
          </Link>

          <Reveal>
            <header className="detail-header">
              <div className="tag-row">
                {project.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <h1 className="detail-title">{project.title}</h1>
              <p className="detail-blurb lead">{project.blurb}</p>

              {project.links && project.links.length > 0 && (
                <div className="detail-links">
                  {project.links.map((l) => (
                    <a key={l.href} className="btn btn-ghost" href={l.href} target="_blank" rel="noreferrer">
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </header>
          </Reveal>

          {/* Cover image / render slot */}
          <Reveal delay={0.04}>
            <div className="detail-cover">
              <MediaSlot src={project.cover} ratio="video" label="Project image / render" />
            </div>
          </Reveal>

          {/* Coles-Notes summary: the 10-second version */}
          <Reveal delay={0.05}>
            <section className="coles-card" aria-label="Quick summary">
              <span className="coles-label">The short version</span>
              <div className="coles-grid">
                {summary.map((s) => (
                  <div key={s.label} className="coles-item">
                    <span className="coles-item-label">{s.label}</span>
                    <p className="coles-item-value">{s.value}</p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          {/* In-depth write-up */}
          <div className="detail-body">
            {project.sections.map((sec, i) => (
              <Reveal key={sec.heading} delay={Math.min(i * 0.05, 0.2)}>
                <section className="detail-section">
                  <h2 className="detail-section-title">{sec.heading}</h2>
                  <p className="detail-section-body">{sec.body}</p>
                </section>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <Link to="/#projects" className="btn btn-primary detail-bottom-cta">
              ← See more projects
            </Link>
          </Reveal>
        </div>
      </article>
    </PageTransition>
  );
}
