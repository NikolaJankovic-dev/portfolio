import React from "react";
import style from './Contact.module.css'

const Contact = () => {
    return (
        <div>
            <h4>CONTACT</h4>
            <div>If you like what you see, don't be shy, let's get in touch! Be free to contact me at any time, I'll try to respond as soon as possible.</div>
            <ul>
                <li><a href="https://www.linkedin.com/in/nikola-jankovic-bbb7a9220/" target="_blank" className={style.link}>Linkedin</a></li>
                <li><a href="https://github.com/NikolaJankovic-dev" target="_blank" className={style.link}>GitHub</a></li>
                <li><a href="mailto:dzoni6usb@gmail.com" target="_blank" className={style.link}>E-mail</a></li>
            </ul>
        </div>
    )
}
export default Contact