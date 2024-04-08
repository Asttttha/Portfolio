import React from 'react'
import avatar from "../assets/WhatsApp Image 2024-04-07 at 15.46.04_237be2df.jpg"
import { FaLinkedin } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { FaHackerrank } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
    React.useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
    return (
        <div className='home' id='home'>
            <div className='intro'data-aos="fade-left">
                <p className='hi'>Hi, I am</p>
                <p className='homeName'>Astha Samaddar</p>
                <p className='homeDesc'>Code to cope</p>
                <div className='iconDiv'>
                    <a href="https://www.linkedin.com/in/astha-samaddar-228406228/" target="_blank" rel="noopener noreferrer"><FaLinkedin className='icon' /></a>
                    <a href="https://github.com/Asttttha" target="_blank" rel="noopener noreferrer"><VscGithub className='icon' /></a>
                    <a href="https://www.hackerrank.com/profile/asthas2018" target="_blank" rel="noopener noreferrer"><FaHackerrank className='icon' /></a>
                    <a href="https://www.instagram.com/_asthasamaddar/" target="_blank" rel="noopener noreferrer"><FaInstagram className='icon' /></a>
                </div>

            </div>
            <div className='avatar' data-aos="fade-right">
                <img src={avatar} alt="Avatar" className="avatarImg" />
            </div>
        </div>
    )
}

export default Home
