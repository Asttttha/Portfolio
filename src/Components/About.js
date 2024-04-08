import React from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import cv from '../assets/Astha Samaddar CV.pdf'

function About() {
    React.useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);

    const onButtonClick = () => {
     
        fetch(cv).then((response) => {
            response.blob().then((blob) => {
             
                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);

                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "AsthaSamaddarCV.pdf";
                alink.click();
            });
        });
    };
    return (
        <div className='head' data-aos="fade-up" id='about'>
            <h1 style={{color:'blue'}}>Know me</h1>
            <div className='aboutDiv' >
                <div className='About1'>
                    <p className='aboutParagraph'>
                        Hey there, tech-savvy world! Astha Samaddar here, on a wild ride pursuing my BTech in IT from Maulana Abul Kalam Azad University of Technology, West Bengal. Picture me as your friendly neighborhood coding wizard, armed with a keyboard and a penchant for puns.👾
                        <br></br>
                        <br></br>
                        I'm not your average IT student – I'm like the Mario of development and design, jumping through hoops and smashing bugs like they are Goombas. 👩🏻‍💻 I'm so dedicated, I once debugged in my sleep (true story).
                        <br></br>
                        <br></br>
                        Now, I'm itching to take my skills on a joyride through the fast lane of the tech world . Ready to bring practical solutions and a whole lot of enthusiasm to any organization ready to ride the wave of success with me 🏇🏻. Let us code our way to success and have a laugh while we are at it!
                    </p>
                </div>
                <div className='About2' >
                    <div className='subAb'>

                        <p className='aboutParagraph'>
                            <strong> Involvements</strong>
                            <br></br>
                            🐛  GirlScript Summer of Code [Contributor]
                            <br></br>
                            🐛  HacktoberFest-2022 [Contributor]
                            <br></br>
                            🐛  REPL Devs (READ EVAL PRINT LOOP) [Head member of a development community in
                            the university]
                            <br></br>
                            🐛  GDSC MAKAUT [GOOGLE DEVELOPER STUDENT CLUB] [Design and UI/UX Lead]
                            [AY- 2023-2024]
                            <br></br>
                            🐛  Member of the Student Grievance Redressal Committee at MAKAUT-In house</p>
                    </div>
                    <div className='subAb'>

                        <p className='aboutParagraph'>
                            <strong>Work experience</strong>
                            <br></br>
                            🍵 Try The Menu [Junior Frontend Engineer (Intern)]
                            <br></br>
                            🍵 Napft [Frontend Engineer]
                        </p>
                    </div>
                </div>
            </div>
            <button className='downloadResume' onClick={onButtonClick}><strong>Resume</strong></button>
        </div>

    )
}

export default About
