import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png"
import Aos from "aos";
import "aos/dist/aos.css";

function Project() {
    React.useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);

    return (
        <div className='cardDiv' data-aos="fade-up" id='projects'>
            <h1 style={{ color: 'blue' }}>Projects</h1>
            <div className='cards'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={proj1}
                            alt="ecom-shopping"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Ecommerce app
                            </Typography>
                            <Typography variant="body3" color="text.secondary">
                                This React.js e-commerce template, currently in development, boasts a dynamic navbar, captivating home page video background, and product showcase. With modern features like React Icons and Aos for animations, it promises a visually engaging user experience for online shoppers. Please note that this project is still ongoing.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" className='cardBtn'>
                            <a href='https://ecom-shopping-app.vercel.app/' target='_blank' rel="noreferrer"> visit </a>
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={proj3}
                            alt="ecom-shopping"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                NapFT website
                            </Typography>
                            <Typography variant="body3" color="text.secondary">
                                Napft's official website, constructed using ReactJS, has been developed entirely from scratch. I have primarily focused on building key components such as the navbar, homepage, footer, profile page, and mint form. Full responsiveness across various devices, this website remains an ongoing project, continually evolving to meet modern standards.</Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" className='cardBtn'>
                            <a href='https://napft.com/' target='_blank' rel="noreferrer"> visit </a>
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={proj2}
                            alt="portfolio"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Portfolio
                            </Typography>
                            <Typography variant="body3" color="text.secondary">
                                My personal portfolio, built with React.js, pinch of Material-UI, EmailJS for form's message delivery, AOS for animations, CSS for styling, and React-Hot-Toast for notifications. Showcasing my skills, experiences, and projects, offering insights into my background. Explore for a comprehensive overview of my capabilities. An example of my work!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" className='cardBtn'>
                            <a href='https://asthasamaddar.netlify.app/' target='_blank' rel="noreferrer"> visit </a>
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>

    )
}

export default Project
