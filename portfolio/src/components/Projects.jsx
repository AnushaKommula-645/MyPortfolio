import styles from './Projects.module.css'
import semesterImg from '../assets/semestertext.png'
import svecwImg from '../assets/svecwechoes.png'
import rentImg from '../assets/rentease.jpg'
import nexa from '../assets/nexa.png'
import edututor from '../assets/edututor.png'
function Projects() {

    const project = [
        {
            img: edututor,
            name: "EduTutor AI", tech: ["HTML", "CSS", "JavaScript", "Python", "FastAPI"],
            desc: "EduTutor is an AI-powered educational platform designed to learn through intelligent tools like Chatbot, RAG, and Quiz generation dynamically.",
            link: "https://github.com/AnushaKommula-645/EduTutor.git",
            live: "https://edututor-49hb.onrender.com"
        },
        {
            img: nexa,
            name: "Nexa Know", tech: ["Python", "Streamlit", "Gemini Api"],
            desc: "This RAG application allows users to input a URL and ask questions directly about its content, providing instant, accurate answers.",
            link: "https://github.com/AnushaKommula-645/NexaKnow.git",
            live: "https://nexaknow-43twagbpe9uysadp8nxpxa.streamlit.app/"
        },
        {
            img: rentImg,
            name: "Rent Ease", tech: ["ReactNative", "Node", "Express", "MongoDB"],
            desc: "Rent ease is an app that allows users to post their property for rent and can search for houses, shops, lands and parking slots",
            link: "https://github.com/AnushaKommula-645/RentEaseApp.git",
            live: ""
        }, 
        {
            img: svecwImg,
            name: "SVECW Echoes", tech: ["MERN Stack"],
            desc: "A college blog spot for posting events, announcements and interview experiences by the students and teachers",
            link: "https://github.com/AnushaKommula-645/SVECW-Echoes.git",
            live: ""
        },               
        {
            img: semesterImg,
            name: "Semester Text", tech:["HTML", "CSS", "PHP", "MySQL"],
            desc: "Semester Text is a web application for students to upload their notes and can view and download notes from it.",
            link: "https://github.com/AnushaKommula-645/Semester-Text.git",
            live: ""
        }
    ];

    const displayProjects = project.map((x, index) => (
        <div className={styles.prjContainer} key={index}>
            <div className={styles.prjImg}>
                <img src={x.img} alt="project image" />
            </div>
            <div className={styles.prjDesc}>
                <h3>{x.name}</h3>
                {x.desc}
            </div>
            <div className={styles.prjTech}>
                {x.tech.map((y, index) => (
                    <div className={styles.lang} key={index}>
                        {y}
                    </div>
                ))}
            </div>
            <div className={styles.btnContainer}>
                <button onClick={() => window.open(x.link, '_blank')}>GitHub</button>
                
                {x.live && x.live.length > 0 ? (
                    <a href={x.live} target="_blank" rel="noopener noreferrer" className={styles.liveBtn}>Live</a>

                ) : null}
            </div>
        </div>
    ));

    
    return(
        <div id="projects">
            <h1>Projects</h1>
            <div className={styles.container}>
                {displayProjects}
            </div>
        </div>
    );
}

export default Projects