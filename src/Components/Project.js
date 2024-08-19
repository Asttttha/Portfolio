import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png"
import proj5 from "../assets/proj5.png"
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
                                School website
                            </Typography>
                            <Typography variant="body3" color="text.secondary">
                                This is a Reactjs project, responsive design and has all necessary sections any school website would need. Accessibility was tested using the browser's inspect tool.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>

                        <Button size="small" color="primary" className='cardBtn'>
                            <a href='https://school-webapp-eight.vercel.app/' target='_blank' rel="noreferrer"> visit </a>
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
                            <Typography variant="body3" color="text.secondary" >
                                Napft's official website, constructed using ReactJS, has been developed entirely from scratch. Through out my internship period I was assigned with this project.
                            </Typography>
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
                            image={proj5}
                            alt="portfolio"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                From figma design
                            </Typography>
                            <Typography variant="body3" color="text.secondary">
                                This React application showcases basic routing and form submission functionalities using React Router. It consists of a home page and a registration form page.</Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" className='cardBtn'>
                            <a href='https://brrunel.netlify.app/' target='_blank' rel="noreferrer"> visit </a>
                        </Button>
                    </CardActions>
                </Card>

            </div>
        </div>

    )
}

export default Project
