import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import escuela_js from '@logos/escuela_js.png';
import styles from '@styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer_top}>
        <div>
          <figure>
            <Image src={escuela_js} alt="escuela javascript" width={70} height={70} />
          </figure>
          <div>
            <p>Made for</p>
            <p><a href="https://platzi.com/" target="_blank">Platzi y su Escuela de JavaScript</a></p>
            <p>By Neider Silva</p>
            <div className={styles.Footer_social}>
              <a href="https://twitter.com/neiders28" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className={styles.social_icons} />
              </a>
              <a href="https://github.com/Neider28" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className={styles.social_icons} />
              </a>
              <a href="https://www.linkedin.com/in/neidersilva28/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className={styles.social_icons} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Footer_bottom}>
        <p>Icons made by <a href="https://fontawesome.com/" target="_blank">Font Awesome</a></p>
        <p>Information taken from <a href="https://api.escuelajs.co/docs/" target="_blank">Platzi Fake Store API</a></p>
      </div>
    </footer>
  );
};

export { Footer };