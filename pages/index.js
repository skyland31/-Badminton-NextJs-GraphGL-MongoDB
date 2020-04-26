import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const img = require("../pages/img/badminton.jpg");
const Home = () => (
    <div>
        <div className="team" style={{ padding: 80 }}>
            <Container fluid>
                <Row>
                    <Col style={{ fontSize: 250, height: 600, color: "White" }}>Badmintom</Col>
                </Row>
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
    </div>

)

export default Home;