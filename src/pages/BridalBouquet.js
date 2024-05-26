import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { motion } from 'framer-motion';

// Array of image paths
const imagePaths = [
    '/images/bridal/1.jpg',
    '/images/bridal/2.jpg',
    '/images/bridal/3.jpg',
    '/images/bridal/4.jpg',
    '/images/bridal/5.jpg',
    '/images/bridal/6.jpg',
    '/images/bridal/7.jpg',
    '/images/bridal/8.jpg',
    '/images/bridal/9.jpg',
    '/images/bridal/10.jpg',
    '/images/bridal/11.jpg',
    '/images/bridal/12.jpg',
    '/images/bridal/13.jpg',
    '/images/bridal/14.jpg',
    '/images/bridal/15.jpg',
    '/images/bridal/16.jpg',
    '/images/bridal/17.jpg',
    '/images/bridal/18.jpg',
    '/images/bridal/19.jpg',
    '/images/bridal/20.jpg',
    '/images/bridal/21.jpg',
    '/images/bridal/22.jpg',
    '/images/bridal/23.jpg',
    '/images/bridal/24.jpg',
    '/images/bridal/25.jpg',
    '/images/bridal/26.jpg',
    '/images/bridal/27.jpg',
    '/images/bridal/28.jpg',
];

const BridalBouquet = () => {
    const [show, setShow] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = (image) => {
        setSelectedImage(image);
        setShow(true);
    };

    const styles = {
        container: {
            paddingTop: '350px', // Increased padding to ensure the content is not covered by the navbar
            paddingBottom: '20px',
            textAlign: 'center'
        },
        heading: {
            fontFamily: 'Arial, sans-serif', // Modern font
            fontSize: '3rem', // Larger font size
            fontWeight: 'bold',
            color: '#8B4513',
            marginBottom: '40px'
        },
        mochaSection: {
            backgroundColor: '#FFDDCC', // Light pink mocha color
            padding: '40px 20px',
            textAlign: 'center',
            position: 'relative',
            marginTop: '40px' // Added margin to separate from heading
        },
        svgContainer: {
            position: 'absolute',
            top: '-20px',
            left: 0,
            width: '100%',
            overflow: 'hidden',
            lineHeight: 0
        },
        svg: {
            position: 'relative',
            display: 'block',
            width: 'calc(100% + 1.3px)',
            height: '40px'
        },
        shapeFill: {
            fill: '#FFDDCC', // Match the background color
            opacity: 0.33
        },
        cardContainer: {
            marginTop: '20px'
        },
        card: {
            position: 'relative',
            backgroundColor: '#fff',
            borderRadius: '8px',
            padding: '0',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            transition: 'transform 0.3s',
            cursor: 'pointer',
            width: '200px', // Smaller width to fit 4 in a row
            height: '150px' // Smaller height to fit 4 in a row
        },
        cardImage: {
            width: '100%',
            height: '100%',
            borderRadius: '8px',
            transition: 'transform 0.3s',
            objectFit: 'cover',
            position: 'absolute',
            top: '0',
            left: '0',
            zIndex: '1'
        }
    };

    const handleMouseEnter = (e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.querySelector('img').style.transform = 'scale(1.1)';
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.querySelector('img').style.transform = 'scale(1)';
    };

    return (
        <Container fluid style={styles.container}>
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8}}
            >
                <h1 style={styles.heading}>זרי כלה</h1>

            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={styles.mochaSection}
            >
                <div style={styles.svgContainer}>
                    <svg style={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 19.6" preserveAspectRatio="none">
                        <path style={styles.shapeFill} d="M0 0L0 18.8 141.8 4.1 283.5 18.8 283.5 0z"></path>
                        <path style={styles.shapeFill} d="M0 0L0 12.6 141.8 4 283.5 12.6 283.5 0z"></path>
                        <path style={styles.shapeFill} d="M0 0L0 6.4 141.8 4 283.5 6.4 283.5 0z"></path>
                        <path style={{...styles.shapeFill, opacity: 1}} d="M0 0L0 1.2 141.8 4 283.5 1.2 283.5 0z"></path>
                    </svg>
                </div>
                <Container style={styles.cardContainer}>
                    <Row className="justify-content-center">
                        {imagePaths.map((image, index) => (
                            <Col md={3} className="mb-4 d-flex justify-content-center" key={index}>
                                <motion.div
                                    className="card"
                                    style={styles.card}
                                    whileHover={{ scale: 1.05 }}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={() => handleShow(image)}
                                >
                                    <img src={image} alt={`זרי כלה ${index + 1}`} style={styles.cardImage} />
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </motion.div>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Body>
                    <img src={selectedImage} alt="Selected" style={{ width: '100%' }} />
                </Modal.Body>
            </Modal>
        </Container>
    );
}

export default BridalBouquet;
