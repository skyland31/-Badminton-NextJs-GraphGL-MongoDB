import React from 'react'
import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


function Navs() {
    return (

        <div>
            <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
                <Navbar.Brand href="/">Bad<a style={{ color: "gray" }}>minton</a></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Competitions">Competition</Nav.Link>
                        <Nav.Link href="/Competitions/CreateCompetition">Create Competition</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}





export default Navs;
