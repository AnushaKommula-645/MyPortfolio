import styles from './Dsa.module.css';
import { SiLeetcode, SiCodechef, SiHackerrank, SiCodeforces } from "react-icons/si";
import { FaUserTie } from "react-icons/fa"; // for InterviewBit

function Dsa() {
    const profileList = [
        { name: "Leetcode", icon: <SiLeetcode />, link: "https://leetcode.com/u/anushakommula_lc/" },
        { name: "CodeChef", icon: <SiCodechef />, link: "https://www.codechef.com/users/anusha_cc645" },
        { name: "HackerRank", icon: <SiHackerrank />, link: "https://www.hackerrank.com/profile/anushakommula645" },
        { name: "InterviewBit", icon: <FaUserTie />, link: "https://www.interviewbit.com/profile/anusha-kommula/" },
        { name: "CodeForces", icon: <SiCodeforces />, link: "https://codeforces.com/profile/anushakommula645" }
    ];

    return (
        <div id="dsa" className={styles.dsaSection}>
            <p>DSA PROFILES</p>
            <div className={styles.dsaContainer}>
                {profileList.map((x, index) => (
                    <div className={styles.profile} key={index} onClick={() => window.open(x.link, "_blank")}>
                        <div className={styles.icon}>{x.icon}</div>
                        <h4>{x.name}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dsa;
