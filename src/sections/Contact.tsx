import { useState } from 'react';
import { profile } from '../data/profile';
import Reveal from '../components/Reveal';
import './Contact.css';

export default function Contact() {
  const c = profile.contact;
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(c.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard access can be blocked (e.g. insecure context); fail quietly.
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal className="contact-card">
          <h2 className="section-title">Get in touch.</h2>
          <p className="lead contact-lead">
            I’m open to co-op, internship, and new-grad opportunities, and happy to share more about
            any of my projects.
          </p>

          <dl className="contact-list">
            <div className="contact-row">
              <dt className="contact-key">GitHub</dt>
              <dd className="contact-val">
                <a href={c.github} target="_blank" rel="noreferrer" className="contact-anchor">
                  {c.githubLabel}
                  <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="none" stroke="currentColor" strokeWidth="2" d="M7 17 17 7m0 0H8m9 0v9" />
                  </svg>
                </a>
              </dd>
            </div>

            <div className="contact-row">
              <dt className="contact-key">LinkedIn</dt>
              <dd className="contact-val">
                <a href={c.linkedin} target="_blank" rel="noreferrer" className="contact-anchor">
                  {c.linkedinLabel}
                  <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="none" stroke="currentColor" strokeWidth="2" d="M7 17 17 7m0 0H8m9 0v9" />
                  </svg>
                </a>
              </dd>
            </div>

            <div className="contact-row">
              <dt className="contact-key">Email</dt>
              <dd className="contact-val contact-email">
                <span>{c.email}</span>
                <button
                  type="button"
                  className={`copy-btn ${copied ? 'is-copied' : ''}`}
                  onClick={copyEmail}
                  aria-label={copied ? 'Email copied' : 'Copy email address'}
                >
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </dd>
            </div>

            <div className="contact-row">
              <dt className="contact-key">Location</dt>
              <dd className="contact-val">{c.location}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
