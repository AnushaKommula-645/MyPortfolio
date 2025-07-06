import styles from './Header.module.css'
import { useState } from 'react'

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return(<>
        <nav>
            <div className={styles.name}>
                <p>A n u s h a<span style={{color: '#716ff7'}}> . .</span></p>
            </div>

            <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
                &#9776;
            </div>
            <div className={`${styles.links} ${isOpen ? styles.showMenu: ''}`}>
                <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
                <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
                <a href="#dsa" onClick={() => setIsOpen(false)}>DSA</a>
                <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
            </div>
        </nav>
    </>);
}

export default Header