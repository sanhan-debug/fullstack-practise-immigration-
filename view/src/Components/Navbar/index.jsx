import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';


function NavbarSection() {

    return (
        <>
            <div className="container align-items-center justify-content-center d-flex">
                <div className="d-flex justfy-space-around">
                    <div className="slogan p-2 align-items-baseline" style={{ width: '200px' }}><p>We believe we helps people
                        for happier lives
                    </p></div>
                    <div className="head-mig p-2 m-2">
                        <img src="https://preview.colorlib.com/theme/immigration/img/logo.png" alt="" />
                    </div>
                    <div className="telephone p-2 m-2">
                        <p>+994 50 555 55 11</p>
                    </div>
                    <div className="icon p-2 m-2 bg-color-red " style={{ backgroundColor: 'red', width: '45px', height: '65px' }}>
                        <BsFillTelephoneFill />
                    </div>
                </div>
            </div>

            <br />

            {/* navbar */}

            <Container className='d-flex align-items-center justify-content-center'>
                <Navbar expand="lg" className=" d-flex align-items-center justify-content-center">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav >
                            <Nav.Link href="#home" className='fw-bolder' style={{ fontSize: '12px', color: 'black' }}>HOME</Nav.Link>
                            <Nav.Link href="/" className='fw-bolder' style={{ fontSize: '12px' }}>ABOUT</Nav.Link>
                            <Nav.Link href="/" className='fw-bolder' style={{ fontSize: '12px' }}>IMMIGRATION</Nav.Link>
                            <Nav.Link href="/" className='fw-bolder' style={{ fontSize: '12px' }}>FAVORITES</Nav.Link>
                            <Nav.Link href="/" className='fw-bolder' style={{ fontSize: '12px' }}>CONTACT</Nav.Link>
                            <Nav.Link href="#link" className='fw-bolder' style={{ fontSize: '12px' }}>COUNTRY</Nav.Link>
                            <Nav.Link href="#link" className='fw-bolder' style={{ fontSize: '12px' }}>ELEMENTS</Nav.Link>
                            <Nav.Link href="#link" className='fw-bolder' style={{ fontSize: '12px' }}>COURSES</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>

        </>
    )
}

export default NavbarSection;