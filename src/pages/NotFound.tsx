import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import './NotFound.css';

export default function NotFound() {
  return (
    <PageTransition>
      <section className="section notfound">
        <div className="container notfound-inner">
          <span className="notfound-code">404</span>
          <h1 className="notfound-title">Page not found</h1>
          <p className="lead">
            That page doesn’t exist — it may have moved, or the link is off. Let’s get you back.
          </p>
          <Link to="/" className="btn btn-primary">
            Back to home
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
