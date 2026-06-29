import { profile } from '../data/profile';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-name">
          <span className="footer-mark" aria-hidden="true" /> Ibrahim Chowdhury
        </span>
        <span className="footer-meta">Built with React + TypeScript · Toronto, Canada</span>
        <span className="footer-link">{profile.contact.email}</span>
      </div>
    </footer>
  );
}
