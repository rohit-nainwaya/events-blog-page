import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={`d-flex flex-column flex-md-row justify-content-between align-items-center ${styles.footer}`}>
      <p className="mb-0">&copy; 2024 Ladoo Event. All rights reserved.</p>
      <ul className={`list-inline ${styles.socialLinks}`}>
        <li className="list-inline-item"><a href="#">Facebook</a></li>
        <li className="list-inline-item"><a href="#">Twitter</a></li>
        <li className="list-inline-item"><a href="#">Instagram</a></li>
      </ul>
    </footer>
  );
}