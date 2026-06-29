import { profile } from '../data/profile';
import Reveal from '../components/Reveal';
import './Contact.css';

type LinkItem = { label: string; href: string; external?: boolean };

export default function Contact() {
  const c = profile.contact;

  // Only show links that have actually been filled in.
  const links: LinkItem[] = [
    { label: 'Email', href: `mailto:${c.email}` },
    c.github ? { label: 'GitHub', href: c.github, external: true } : null,
    c.linkedin ? { label: 'LinkedIn', href: c.linkedin, external: true } : null,
    c.resume ? { label: 'Résumé', href: c.resume, external: true } : null,
  ].filter(Boolean) as LinkItem[];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal className="contact-card">
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">Let’s build something.</h2>
          <p className="lead contact-lead">
            Open to co-op, internships, and new-grad opportunities — and always happy to talk shop.
            The fastest way to reach me is email.
          </p>

          <div className="contact-links">
            {links.map((l) => (
              <a
                key={l.label}
                className="contact-link"
                href={l.href}
                {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                {l.label}
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="none" stroke="currentColor" strokeWidth="2" d="M7 17 17 7m0 0H8m9 0v9" />
                </svg>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
