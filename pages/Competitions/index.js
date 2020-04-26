import React from 'react'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ScrollAnimation from 'react-animate-on-scroll';
import { bounce } from 'react-animations';
import styled, { keyframes } from 'styled-components'
import { useQuery } from "@apollo/react-hooks"
import gql from 'graphql-tag'
import apolloClient from '../../apollo/apolloClient'


const QUERY_COMPETITIONS = gql`
    query{
        competitions{
            id
            name
            detail
            place
            price
            compet_start
            compet_end
            start
            end
            pay_end
            gens{
                id
                gen
                type
            }
        }
    }
`

const img = require("../back.jpg");
function Competition() {
    const { data, loading, error } = useQuery(QUERY_COMPETITIONS, { pollInterval: 10000 })
    /// pollInterval : 10000 ให้ รีเฟรส ทุกๆ 10 วิ
    // const result = useQuery(QUERY_COMPETITIONS,{variables :{id: 'aa'}}) กรณีที่ต้องใส่ args

    if (error) return <p>Ooobs...somthing went wrong,please try again later.</p>

    if (loading) return <p>loading....</p>

    console.log(data);

    const date = new Date();

    return (
        <div>
            <div className="team" style={{ padding: 80 }}>
                <Container fluid style={{ padding: 80 }}>
                    <Container >
                        <Row >
                            <ScrollAnimation animateIn='fadeIn'
                                animateOut='fadeOut'>
                                <Row className="justify-content-md-center" >
                                    <Col md={6} sm={6} lg={6} style={Title} ><Bounce>Badminton</Bounce></Col>
                                    <Col></Col>
                                </Row>
                                <Row className="justify-content-md-center" >
                                    <Col> </Col>
                                    <Col md={8} sm={8} lg={8} style={Title}><a style={{ backgroundColor: "white", color: "black" }}>Com</a><a style={{ backgroundColor: "black" }}>petitions</a></Col>
                                </Row>

                            </ScrollAnimation>
                        </Row>
                    </Container>
                </Container>
            </div>
            <Container >

                {data.competitions.map(prod => (
                    <ScrollAnimation animateIn='flipInY'>
                        <Card style={card}>
                            <Card.Header style={{ fontSize: 20 }}>ชื่อการแข่งขัน {prod.name}</Card.Header>
                            <Card.Body>
                                <Card.Title>สถานที่จัดแข่งคือ {prod.place}</Card.Title>
                                <Card.Text>
                                    วันเปิดรับสมัคร : {date.toISOString(prod.start).split("T")[0]} วันสิ้นสุดรับสมัคร : {date.toISOString(prod.end).split("T")[0]}
                                </Card.Text>
                                <Link key={prod.id} href='/Competitions/[competitionId]' as={`/Competitions/${prod.id}`} >
                                    <a style={Detail}> รายละเอียด เพิ่มเติม...</a>
                                </Link>
                            </Card.Body>
                        </Card>
                    </ScrollAnimation>

                ))}
            </Container>
            <style JSX>{`
                .team {
                background: url('`+ img + `');
                height: 100%;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                }
                `}
            </style>
        </div >


    )
}

// const divstyle = {
//     display: 'grid',
//     justifyContent: 'center'
// }
const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

const card = {
    border: "outset",
    padding: 10,
    margin: 30,
}

const Title = {
    fontSize: 120,
    color: "white"
}


const Detail = {
    fontSize: 15
}

export default apolloClient(Competition);