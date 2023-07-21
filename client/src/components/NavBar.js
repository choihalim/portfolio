import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import halimhead from '../images/halimhead.JPG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faMoon, faEllipsis, faFileArrowDown, faCode } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'
import '../NavBar.css'
import resume from '../assets/resume.pdf'


function NavBar({ darkMode, toggleDarkMode }) {

    const darkModeClass = darkMode ? 'dark-mode' : ''
    return (
        <>
            <div className={darkModeClass}>
                <Navbar key='xxl' bg={darkMode ? "light" : "dark"} expand='false' className="">
                    <Container fluid>
                        <Navbar.Brand href="/">
                            <img src={halimhead} style={{ width: '50px', borderRadius: '50%' }} />
                        </Navbar.Brand>
                        <Nav.Link href="https://www.linkedin.com/in/choihalim/" target='_blank'>
                            {!darkMode ? <FontAwesomeIcon icon={faLinkedin} style={{ color: "#ffffff", }} /> :
                                <FontAwesomeIcon icon={faLinkedin} style={{ color: "#000000", }} />}
                        </Nav.Link>
                        <Nav.Link href="https://github.com/choihalim" target='blank'>
                            {!darkMode ? <FontAwesomeIcon icon={faGithub} style={{ color: "#ffffff", }} /> :
                                <FontAwesomeIcon icon={faGithub} style={{ color: "#000000", }} />}
                        </Nav.Link>
                        <Nav.Link href="https://medium.com/@choihalim" target='blank'>
                            {!darkMode ? <FontAwesomeIcon icon={faMedium} style={{ color: "#ffffff", backgroundColor: "#000000" }} /> :
                                <FontAwesomeIcon icon={faMedium} style={{ color: "#000000", backgroundColor: "#ffffff" }} />}
                        </Nav.Link>
                        <Nav.Link>
                            <Button variant={darkMode ? "light" : "dark"} onClick={toggleDarkMode}>
                                {!darkMode ? <FontAwesomeIcon icon={faLightbulb} style={{ color: "#e1e100", }} /> :
                                    <FontAwesomeIcon icon={faMoon} style={{ color: "#636363", }} />}
                            </Button>
                        </Nav.Link>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xxl`}>
                            {darkMode ? <FontAwesomeIcon icon={faEllipsis} style={{ color: "#000000", }} /> : <FontAwesomeIcon icon={faEllipsis} style={{ color: "#ffffff", }} />}
                        </Navbar.Toggle>
                        {!darkMode ? (
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-xxl`}
                                style={{ backgroundColor: '#121212', color: '#ffffff' }}
                                aria-labelledby={`offcanvasNavbarLabel-expand-xxl`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xxl`}>
                                        <FontAwesomeIcon icon={faCode} size='lg' style={{ color: "#ffffff", }} />
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                        <Nav.Link href="/">Home</Nav.Link>
                                        <Nav.Link href="/about">About</Nav.Link>
                                        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                                        <Nav.Link href="/contact">Contact</Nav.Link>
                                        <NavDropdown
                                            title="Resume"
                                            id={`offcanvasNavbarDropdown-expand-xxl`}
                                        >
                                            <NavDropdown.Item href="/resume">View</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action5">
                                                <Button variant={!darkMode ? 'secondary' : 'success'} href={resume} download="HalimChoiResume.pdf">

                                                    {!darkMode ? <FontAwesomeIcon icon={faFileArrowDown} size="lg" style={{ color: "#000000", }} /> : <FontAwesomeIcon icon={faFileArrowDown} size="lg" style={{ color: "#ffffff", }} />}
                                                    Download
                                                </Button>
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        ) : (
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-xxl`}
                                style={{ backgroundColor: '#ffffff' }}
                                aria-labelledby={`offcanvasNavbarLabel-expand-xxl`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xxl`}>
                                        <FontAwesomeIcon icon={faCode} size='lg' style={{ color: "#000000", }} />
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                        <Nav.Link href="/">Home</Nav.Link>
                                        <Nav.Link href="/about">About</Nav.Link>
                                        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                                        <Nav.Link href="/contact">Contact</Nav.Link>
                                        <NavDropdown
                                            title="Resume"
                                            id={`offcanvasNavbarDropdown-expand-xxl`}
                                        >
                                            <NavDropdown.Item href="/resume">View</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action5">
                                                <Button variant={!darkMode ? 'secondary' : 'success'} href={resume} download="HalimChoiResume.pdf">
                                                    {!darkMode ? <FontAwesomeIcon icon={faFileArrowDown} size="lg" style={{ color: "#000000", }} /> : <FontAwesomeIcon icon={faFileArrowDown} size="lg" style={{ color: "#ffffff", }} />}
                                                </Button>
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        )}
                    </Container>
                </Navbar>
            </div >
        </>
    )
}

export default NavBar