import styles from './Skills.module.css'
import Clogo from '../assets/C.jpeg'
import javaLogo from '../assets/java.png'
import pythonLogo from '../assets/python.png'
import htmlLogo from '../assets/html.png'
import cssLogo from '../assets/css.png'
import jsLogo from '../assets/js.png'
import reactLogo from '../assets/react.png'
import sqlLogo from '../assets/sql.png'
import gitLogo from '../assets/git1.png'
import nodeLogo from '../assets/node.png'
import expressLogo from '../assets/express.png'
import mongodbLogo from '../assets/mongodb.png'
function Skills() {
    const list = [
        {name: "C", logo: Clogo},
        {name: "Java", logo: javaLogo},
        {name: "Python", logo: pythonLogo},
        {name: "HTML", logo: htmlLogo},
        {name: "CSS", logo: cssLogo},
        {name: "JavaScript", logo: jsLogo},
        {name: "React", logo: reactLogo},
        {name: "Node", logo: nodeLogo},
        {name: "express", logo: expressLogo},
        {name: "MongoDB", logo: mongodbLogo},
        {name: "SQL", logo: sqlLogo},
        {name: "Git", logo: gitLogo},
    ]
    const skillsDisplay = list.map((x, index) =>(
                                    <div key={index}>
                                        <div className={styles.skill}>
                                            <img src={x.logo} />
                                        </div>
                                        <p className={styles.title}>{x.name}</p>
                                    </div>
                                                                       
                                )
    );
    return(
        <>
            <div id="skills" className={styles.background}>
                <h1>skills</h1>
                <div className={styles.container}>
                    {skillsDisplay}
                </div>
            </div>
        </>
    );
}

export default Skills