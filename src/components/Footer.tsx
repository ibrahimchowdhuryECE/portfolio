import { profile } from '../data/profile';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-name">
          <span className="footer-mark">{'</>'}</span> {profile.name}
        </span>
        <span className="footer-meta">
          Built with React + TypeScript · {profile.role.split('@')[1]?.trim() || 'Waterloo'}
        </span>
        <a className="footer-link" href={`mailto:${profile.contact.email}`}>
          {profile.contact.email}
        </a>
      </div>
    </footer>
  );
}
