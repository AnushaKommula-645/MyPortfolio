import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer() {
    return(
        <>
            <footer className={styles.footer}>
                <p>© 2025 Anusha Kommula</p>
                <div className={styles.links}>
                    <a href="mailto:anushakommula645@gmail.com"><FaEnvelope /></a>
                    <a href="https://github.com/AnushaKommula-645" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/anusha-kommula-313068338" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </div>
                <p className={styles.tagline}>Powered by code & passion..💜</p>
            </footer>
        </>
    );
}

export default Footer