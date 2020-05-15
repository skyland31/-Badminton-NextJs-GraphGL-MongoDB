import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import { bounce } from 'react-animations';
import styled, { keyframes } from 'styled-components'
const img = require("../pages/img/badminton.jpg");

const Home = () => (

    <div >
        <div className="team" style={{ height: 800, padding: 80 }}>
            <Container fluid className="text-center">
                <Container>
                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col className="text-end" style={{ fontSize: 50, color: "black" }}><span style={{ backgroundColor: "white" }}>D e</span><span style={{ backgroundColor: "gray" }}>m o</span></Col>
                    </Row>
                    <Row>
                        <Col style={{ fontSize: 200, color: "white" }}> <span>Badmintom</span></Col>
                        <Col></Col>
                    </Row>

                    <Row>
                        <Col >
                            <Bounce>
                                <Link href="/Competitions" >
                                    <Button variant="primary" >
                                        Show Competitions all ->
                                </Button>
                                </Link>
                            </Bounce>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
        <style JSX>{`
                .team {
                background: url('`+ img + `');
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                }
                `}
        </style>
    </div >

)
const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;
export default Home;