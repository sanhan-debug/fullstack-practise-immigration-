import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HeroSection = () => {
    return (
        <div style={{ backgroundColor: '#f73d63', padding: '60px 0', color: '#fff' }}>
            <Container>
                <Row className="justify-content-center text-center">
                    <Col lg={6}>
                        <p>PROCESS VISA WITHOUT WITHIN HOURS</p>
                        <h1>Immigrations & Visa Consultation</h1>
                        <Button variant="light" size="lg">Book Consultancy</Button>
                    </Col>
                    <Col lg={6}>
                        <img
                            src="https://preview.colorlib.com/theme/immigration/img/header-img.png.webp"
                            alt="Consultation"
                            style={{ maxWidth: '100%' }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeroSection;
