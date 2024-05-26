import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import CarouselFadeExample from "../components/Carousel";

const HomePage = () => {
    const styles = {
        container: {
            paddingTop: '150px',
            padding: '20px',
            marginTop: '120px'
        },
        heading: {
            fontFamily: 'Arial, sans-serif',
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#333'
        },
        description: {
            fontFamily: 'Arial, sans-serif',
            fontSize: '1.5rem',
            lineHeight: '1.8',
            color: '#333',
            marginTop: '20px',
            fontWeight: 'bold'
        },
        mochaSection: {
            backgroundColor: '#FFDDCC',
            padding: '40px 20px',
            textAlign: 'center',
            position: 'relative'
        },
        mochaHeading: {
            fontFamily: 'Arial, sans-serif',
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#8B4513',
            marginBottom: '20px'
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
            fill: '#FFDDCC',
            opacity: 0.33
        },
        sectionTitle: {
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#8B4513',
            marginTop: '40px',
            marginBottom: '40px'
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
            width: '250px',
            height: '250px'
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
        },
        cardTitle: {
            position: 'relative',
            zIndex: '2',
            margin: '0',
            padding: '10px',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#8B4513',
            backgroundColor: 'rgba(184, 115, 51, 0.5)',
            width: '100%',
            bottom: '0',
            textAlign: 'center'
        },
        newSection: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '40px 20px',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        newSectionText: {
            flex: 1,
            marginRight: '20px',
            fontSize: '1.5rem',
            lineHeight: '1.8'
        },
        newSectionImage: {
            flex: 1,
            maxWidth: '400px'
        },
        pinkSection: {
            backgroundColor: '#FFDDCC',
            padding: '20px',
            marginTop: '40px'
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

    const y = useMotionValue(0);
    const yInput = [-100, 0, 100];
    const yOutput = [-50, 0, 50];
    const yTransform = useTransform(y, yInput, yOutput);

    return (
        <Container fluid style={styles.container}>
            <Row className="justify-content-center text-center mt-5">
                <Col md={8}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p style={styles.description}>
                            ברוכים הבאים לחנות הפרחים שלי! שמי קטי ואני מעצבת אירועים עם ניסיון רב בעיצוב זרי כלה, זרי אירוסין ועוד.
                            אני מציעה מגוון רחב של סידורי פרחים יפיפיים לכל אירוע ומטרה. הצוות המקצועי שלנו דואג ליצור עיצובים ייחודיים שיאירו את הרגעים המיוחדים שלכם.
                            בואו לבקר אותנו ותנו לנו לעזור לכם לחגוג את האירועים המשמעותיים בחייכם עם הפרחים המדהימים שלנו.
                        </p>
                    </motion.div>
                </Col>
            </Row>
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
                <h2 style={styles.mochaHeading}>מה בחנות שלנו:</h2>
                <Container style={styles.cardContainer}>
                    <Row className="justify-content-center">
                        <Col md={3} className="mb-4 d-flex justify-content-center">
                            <Link to="/bridal-bouquet" style={{ textDecoration: 'none' }}>
                                <motion.div
                                    className="card"
                                    style={styles.card}
                                    whileHover={{ scale: 1.05 }}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <img src="/images/bridal%20font.jpg" alt="זרי כלה" style={styles.cardImage} />
                                    <div style={styles.cardTitle}>זרי כלה</div>
                                </motion.div>
                            </Link>
                        </Col>
                        <Col md={3} className="mb-4 d-flex justify-content-center">
                            <Link to="/bridal-bouquet" style={{ textDecoration: 'none' }}>
                                <motion.div
                                    className="card"
                                    style={styles.card}
                                    whileHover={{ scale: 1.05 }}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <img src="/images/ingagmentFont.jpg" alt="זרי אירוסין" style={styles.cardImage} />
                                    <div style={styles.cardTitle}>זרי אירוסין</div>
                                </motion.div>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={3} className="mb-4 d-flex justify-content-center">
                            <Link to="/bridal-bouquet" style={{ textDecoration: 'none' }}>
                                <motion.div
                                    className="card"
                                    style={styles.card}
                                    whileHover={{ scale: 1.05 }}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <img src="/images/flowersFont.jpg" alt="עיצובי פרחים" style={styles.cardImage} />
                                    <div style={styles.cardTitle}>עיצובי פרחים</div>
                                </motion.div>
                            </Link>
                        </Col>
                        <Col md={3} className="mb-4 d-flex justify-content-center">
                            <Link to="/bridal-bouquet" style={{ textDecoration: 'none' }}>
                                <motion.div
                                    className="card"
                                    style={styles.card}
                                    whileHover={{ scale: 1.05 }}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <img src="/images/shop-products.jpg" alt="מוצרי החנות" style={styles.cardImage} />
                                    <div style={styles.cardTitle}>מוצרי החנות</div>
                                </motion.div>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </motion.div>

            <motion.div  style={styles.newSection}>
                <div style={styles.newSectionText}>
                    <p>
                        כלה? מחתנת? מחפשת מתנת הוקרה לאהוביך?
                        אני קטי מעצבת אירועים ושוזרת פרחים ואני אשמח להתרגש ולעצב איתך את החלומות שלך.
                        עיצבתי מאות זרי כלה בסגנונות וצבעים בדיוק לפי מה שבקשתן.
                        אני מתמחה בעיצובי זרי אירוסין ומתנות שידהימו את יקירכם.
                        מחכה כל כך לשמוע מימך ולעצב איתך חלום.
                    </p>
                </div>
                <div style={styles.newSectionImage}>
                    <img src="/images/carousel2.jpg" alt="Shop" style={{ width: '100%' }} />
                </div>
            </motion.div>

            <div style={styles.pinkSection}></div> {/* Pink section for spacing */}

            <motion.div style={styles.newSection}>
                <div style={styles.newSectionImage}>
                    <img src="/images/carousel4.jpg" alt="Shop" style={{ width: '100%' }} />
                </div>
                <div style={styles.newSectionText}>
                    <p>
                        ברוכים הבאים לחנות הקטנה שלי - איוונטס. שמי קטי ואני מעצבת אירועים עם תשוקה ואהבה רבה לתחום.<br />
                        ב-איוונטס, אנחנו משקיעים את כל הלב והנשמה שלנו כדי להגשים את המשאלות והחלומות של הלקוחות שלנו.<br />
                        בין אם זה זרי כלה יפיפיים, זרי אירוסין מרגשים או עיצובי פרחים לאירועים מיוחדים, אנחנו כאן כדי ליצור חוויות בלתי נשכחות.<br />
                        כל פרח וכל סידור נעשה בקפידה ובאהבה, במטרה להביא שמחה ואושר לכל אירוע.<br />
                        אני מזמינה אתכם לבקר בחנות שלנו ולתת לנו לעזור לכם לחגוג את הרגעים המשמעותיים ביותר בחייכם.
                    </p>
                </div>
            </motion.div>
        </Container>
    );
}

export default HomePage;
