import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Sidenav.css'
import homeIcon from '../images/home.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Logo from '../images/logo.png';
import bgTexture from '../images/MetalTexture.jpeg';

function Sidenav() {
        return (
                <div style={{ fontFamily: 'Racing Sans One, serif' }}>
                        <Button
                                variant='outline'
                                className='helpBTN position-fixed top-0 end-0'
                                style={{
                                        fontWeight: 900,
                                        fontSize: '4vh',
                                        width: '8vh',
                                        height: '9vh',
                                        border: '5px solid #FF1801',
                                        borderRadius: '20%',
                                        backgroundColor: '0',
                                        marginRight: '5%',
                                        marginTop: '2%',
                                        zIndex: '1'
                                }}
                        >
                                ?
                        </Button>
                        <Navbar
                                className="align-items-start position-fixed"
                                style={{
                                        height: '100vh',
                                        width: '15%',
                                        boxShadow: '0px 0px 20px 0px rgb(255, 255, 255)',
                                        borderTopRightRadius: '20px',
                                        backgroundImage: `url(${bgTexture})`,
                                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                                        backgroundBlendMode: 'overlay', 
                                        backgroundSize: 'cover' 
                                }}
                        >
                                <Container className='flex-column align-items-start'>
                                        <img src={Logo} style={{width:'60%', marginLeft:'20%', marginBottom:'5vh'}}></img>
                                        <h6 style={{ fontSize: '3vh' }}>Main Menu</h6>
                                        <Link to="/" className="navLinks">
                                                <img src={homeIcon} className='buttonIcons' />Dashboard
                                        </Link>
                                        <Link to="/" className="navLinks">
                                                <img src={homeIcon} className='buttonIcons' />Comparison
                                        </Link>
                                        <Link to="/" className="navLinks">
                                                <img src={homeIcon} className='buttonIcons' />Timeline
                                        </Link>
                                </Container>
                        </Navbar>
                </div>
        );
}

export default Sidenav;
