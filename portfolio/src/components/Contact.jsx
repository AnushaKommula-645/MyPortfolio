import { useState } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './Contact.module.css';

function Contact() {
    const [isSending, setisSending] = useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setisSending(true);
        const formData = {
            name: e.target.name.value,
            mail: e.target.mail.value,
            msg: e.target.msg.value,
        };

        try {
            const response = await fetch("/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const text = await response.text();
            alert(text);
            e.target.reset();
            setisSending(false) ;
        } catch (error) {
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <div id="contact" className={styles.container}>
            <p>CONTACT ME</p>
            <div className={styles.details}>
                <div>
                    <FaEnvelope color="#aad4ac" size={29}/><p>anushakommula645@gmail.com</p>
                </div>
                <div>
                    <FaPhone color="#aad4ac" size={29} /><p>+91 7680906656</p>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/anusha-kommula-313068338" target="_blank" rel="noopener roreferer">
                        <FaLinkedin color="#aad4ac" size={29} />
                    </a>
                    <a href="https://github.com/AnushaKommula-645" target="_blank" rel="noopener roreferer">
                        <FaGithub color="#aad4ac" size={29} />
                    </a>
                </div>
            </div>            
            {/* <form onSubmit={handleSubmit}> 
                <h3 className={styles.msg}>Leave a message here</h3>
                <input type="text" name="name" placeholder="Your name" required />
                <input type="email" name="mail" placeholder="Your email" required />
                <textarea name="msg" placeholder="Your message" required />
                <button type="submit" disabled={isSending}>{isSending ? 'Sending..' : 'Submit'}</button>
            </form> */}
        </div>
    );
}

export default Contact;
