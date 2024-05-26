import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const BridalMain = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        if (window.scrollY === 0) {
            // Show navbar only when at the top of the page
            setShowNavbar(true);
        } else {
            setShowNavbar(false);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <Navbar
            expand="md"
            fixed="top"
            variant={'dark'}
            collapseOnSelect
            style={{
                background: '#000000',
                transform: showNavbar ? 'translateY(0)' : 'translateY(-100%)',
                transition: 'transform 0.3s ease-in-out'
            }}
        >
            <Container fluid className={'p-3 position-relative'} style={{ paddingTop: 0, paddingBottom: 0 }}>
                <a
                    href="https://wa.me/0534362042" // Replace with your WhatsApp number or link
                    target="_blank" // Opens link in a new tab
                    rel="noopener noreferrer" // Recommended for security
                    style={{ position: 'absolute', left: '50px', textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }}
                >
                    <i className={'fab fa-whatsapp fa-lg'} style={{ color: 'white', marginRight: '8px' }} />
                    <span style={{ color: 'white' }}>053-4362042</span> {}
                </a>

                <div className="d-flex justify-content-center align-items-center w-100" style={{ margin: 0, padding: 0, height: '100%' }}>
                    <img
                        src="/images/semel.jpg" // Ensure this path is correct
                        className={'img-fluid'}
                        alt="Name Design"
                        style={{ width: '140px', margin: 0, padding: 0 }} // Adjust width as needed
                    />
                </div>

                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ position: 'absolute', right: '20px' }} />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="text-white">
                        <Link to="/" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', marginRight: '53px' }}>
                            <i className="fas fa-home fa-lg" style={{ marginRight: '8px' }}></i>
                        </Link>
                        <NavDropdown title="Menu" id="basic-nav-dropdown" style={{ right: '60px' }}>
                            <NavDropdown.Item href="/bridal-bouquet">זרי כלה</NavDropdown.Item>
                            <NavDropdown.Item href="/bridal-bouquet-english">Bridal bouquet</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">זרי אירוסין</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">עיצובי פרחים</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">מוצרי החנות</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">צור קשר</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BridalMain;
