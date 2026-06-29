import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getLenis } from '../lib/smoothScroll';
import './NavBar.css';

const sections = [
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Navigate to a home-page section. If we're already on the home page,
  // smooth-scroll directly (via Lenis); otherwise route home first.
  const goToSection = (id: string) => {
    setOpen(false);
    if (location.pathname === '/') {
      const lenis = getLenis();
      const el = document.getElementById(id);
      if (lenis && el) lenis.scrollTo(el, { offset: -70 });
      else el?.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', `/#${id}`);
    } else {
      navigate(`/#${id}`);
    }
  };

  const goHome = () => {
    setOpen(false);
    if (location.pathname === '/') {
      const lenis = getLenis();
      if (lenis) lenis.scrollTo(0);
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <header className="nav">
      <div className="nav-inner container">
        <Link to="/" className="nav-logo" onClick={goHome}>
          <span className="nav-logo-mark" aria-hidden="true" />
          Ibrahim Chowdhury
        </Link>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`nav-burger ${open ? 'is-open' : ''}`} />
        </button>

        <nav className={`nav-links ${open ? 'is-open' : ''}`}>
          {sections.map((s) => (
            <button key={s.id} className="nav-link" onClick={() => goToSection(s.id)}>
              {s.label}
            </button>
          ))}
          <button className="nav-link nav-cta" onClick={() => goToSection('contact')}>
            Let’s talk
          </button>
        </nav>
      </div>
    </header>
  );
}
