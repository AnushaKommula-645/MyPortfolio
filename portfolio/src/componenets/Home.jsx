import styles from './Home.module.css'
import anusha from '../assets/anushakommula.jpg'


function Home() {
    return(
        <>            
            <main id="home">
                <section >
                    <p className={styles.hello}><i>Hello...</i></p>
                    <h1 className={styles.name}>I'm <span className={styles.gradientText}>Anusha Kommula</span></h1>
                    <p className={styles.skill}>Full-Stack Developer & Programmer</p>
                    <p className={styles.about}>I thrive on building elegant digital solutions that connect design with functionality. My focus lies in crafting seamless interfaces and efficient logic that enhance user engagement across devices. Energized by challenges and emerging tools, I continuously refine my skills to deliver meaningful and high-quality web experiences.</p>
                </section>
                <aside>
                    <div className={styles.imageWrapper}>
                        <div className={styles.circleBg}>
                            <img src={anusha} alt="profile" />
                        </div>
                    </div>
                </aside>
            </main>
        </>
    );
}

export default Home