import React from 'react'
import "./Contact.css"
import Phone from './contactImages/Phone.png'
import Email from './contactImages/Email.png'
import LinkedIn from './contactImages/LinkedIn.png'
import Github from './contactImages/Github.png'

function Contact() {

    const sendto = (link) => {
        window.open(
            link,
            "_blank"
        );
    }

    return (
        <div id='contact'>
            <h1>Contact Me</h1>
            <div>
                <div id="contact-github" className='contactCard' onClick={() => { sendto("https://github.com/Shivampathak124") }}>
                    <img src={Github} alt="" />
                    <h5>Github</h5>
                    <p>Shivampathak124</p>
                </div>
                <div id="contact-linkedin" className='contactCard' onClick={() => { sendto("https://www.linkedin.com/in/shivampathak1915124/") }}>
                    <img src={LinkedIn} alt="LinkedIn" />
                    <h5>Linkedin</h5>
                    <p>Shivampathak</p>
                </div>
                <div id="contact-email" className='contactCard'>
                    <img src={Email} alt="" />
                    <h5>Email</h5>
                    <p>Shivampathak50065@gmail.com</p>
                </div>
                <div id="contact-phone" className='contactCard'>
                    <img src={Phone} alt="" />
                    <h5>Phone</h5>
                    <p>+91 6386348915</p>
                </div>
            </div>
        </div>
    )
}

export default Contact
