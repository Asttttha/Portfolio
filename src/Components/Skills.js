import React from 'react'
import Skill from './SkillFunction'
import sc from "../assets/sc.png"
import Aos from "aos";
import "aos/dist/aos.css";

function Skills() {
    React.useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
    return (
        <div className='skills' data-aos="fade-up" id='skills'>
            <h1 style={{color:'blue'}}>Skills</h1>
            <div className='skillsDiv'>
                <div className='techDiv'>
                    <h3>Technical</h3>
                    <div className="technical">
                        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="React" title="React" />
                        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="HTML 5" title="HTML 5" />
                        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="CSS3" title="CSS 3" />
                        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="TailwindCSS" title="Twilwind CSS" />
                        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="GitHub" title="GitHub" />
                        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="NPM" title="NPM" />
                        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" alt="Git" title="Git" />
                        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" alt="Canva" title="Canva" />
                        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" title="Javascript" />
                        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" alt="MUI" title="MUI" />
                        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MYSQL" title="MYSQL" />
                        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" title="Python" />
                        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" alt="Redux" title="Redux" />
                        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" alt="Scss" title="Scss" />
                        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/yarn/yarn-original.svg" alt="yarn" title="yarn" />
                        <Skill source={sc} alt="StyledComponents" title="StyledComponents" />
                    </div>
                </div>

                <div className='nonTech'>
                    <h3>Non technical</h3>
                    <div className="nonTechnical">
                        <ul>
                            <li>✒️ Creative writing
                            </li>
                            <li>🎨 Using digital tools to create compelling graphics and multimedia content.</li>
                            <li>📈 Adaptive, adjusting to changing environments and embracing new challenges.</li>
                            <li>💡 Collaborating effectively with diverse team members to achieve shared goals. Working
                                harmoniously with others, valuing diverse perspectives.</li>
                            <li>🟢 Self-criticism, objectively evaluating one's work and embracing continuous learning</li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Skills
