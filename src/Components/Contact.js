import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Aos from "aos";
import "aos/dist/aos.css";
import toast, { Toaster } from 'react-hot-toast';

function Contact() {
    React.useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_s560ysa', 'template_izvhzse', form.current, {
                publicKey: 'OYfA6nGjUP7MzG--T',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success('Your message has been sent successfully!');
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error('Failed to send message. Please try again later.');
                }
            );
    };

    return (

        <div className='contactForm' data-aos="fade-up" id='contact' >
            <h1 style={{ color: 'blue' }}>Contact me</h1>
            <div className='contactDiv' data-aos="flip-right">
                <form className='formDiv' ref={form} onSubmit={sendEmail} >
                    <div className='field'>
                        <label>Name</label>
                        <input type='text' placeholder='your name' className='inputField' required name='from_name'></input>
                    </div>
                    <div className='field'>
                        <label>Phone number (optional)</label>
                        <input type='number' className='inputField' name='from_phone'></input>
                    </div>
                    <div className='field'>
                        <label>Email address</label>
                        <input type='text' placeholder='yourmail@gmail.com' className='inputField' required name='from_email'></input>
                    </div>
                    <div className='field'>
                        <label >Write your message</label>
                        <textarea rows={4} className='inputField' placeholder='your message...' required name="message"></textarea>
                    </div>
                    <div className='field'>
                        <button type="submit" value="Send">send</button>
                    </div>
                </form>
                <div><Toaster /></div>
            </div>

        </div>
    )
}

export default Contact;
