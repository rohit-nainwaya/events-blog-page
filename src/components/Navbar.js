// src/app/components/Navbar.js
import Link from 'next/link'; 
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${styles.navbar}`}>
      <div className="container-fluid">
        <Link href="/" className={`navbar-brand ${styles.logo}`}>
          G-pay Ladoo Event
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className={`navbar-nav ms-auto ${styles.navLinks}`}>
            <li className="nav-item">
              <Link href="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link href="/events" className="nav-link">Events</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}