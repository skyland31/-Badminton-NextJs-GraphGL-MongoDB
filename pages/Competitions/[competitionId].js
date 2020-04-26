import React from 'react'
import { useRouter } from 'next/router'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ScrollAnimation from 'react-animate-on-scroll';
import Link from 'next/link'
import gql from 'graphql-tag'
import apolloClient from '../../apollo/apolloClient'
import { useQuery } from '@apollo/react-hooks'

const QUERY_COMPETITION = gql`
    query QUERY_COMPETITION($id: ID!){
        competition(id: $id){
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
                type
                gen
            }
        }
    }
`

const Competition = () => {
    const types = [];
    const date = new Date()
    const route = useRouter();
    const { data, loading, error } = useQuery(QUERY_COMPETITION, {
        variables: { id: route.query.competitionId }
    })
    if (error) return <div>Somethings went wrong,please try agein.</div>
    if (loading) return <div>loading....</div>
    data.competition.gens.map(dataGen => {
        var temp = dataGen.type;
        if (types.includes(temp) == false) {
            types.push(temp);
        }
    })


    return (
        // <div>
        //     {route.query.competitionId}
        // </div>
        <Container>
            <ScrollAnimation animateIn='jackInTheBox'
                animateOut='fadeOut'>
                <Card className="text-center" style={{ margin: 80 }}>
                    <Card.Header>การแข่งขัน Badminton</Card.Header>
                    <Card.Body >
                        <Card.Title>{data.competition.name}</Card.Title>
                        <Card.Text className="text-left">
                            <Row className="text-center">
                                <Col>{data.competition.detail}<br /></Col>
                            </Row>
                            <br />
                            <Row >
                                <Col>ประเภทที่เปิดรับสมัคร</Col>
                                <Col>รุ่นที่เปิดรับสมัคร</Col>
                            </Row>
                            <Container>
                                {types.map(type => (
                                    <Row >
                                        <Col>{type}</Col>
                                        <Col>
                                            {data.competition.gens.map(dataGen => {
                                                if (dataGen.type == type) {
                                                    return (<div> {dataGen.gen} </div>)
                                                }
                                            })}
                                            <br />
                                            <br />
                                        </Col>
                                    </Row>
                                ))}
                                <br />
                                <Row>
                                    <Col>ค่าสมัคร : {data.competition.price} บาท</Col>
                                    <Col>สถานที่ : {data.competition.place}</Col>
                                </Row>
                                <Row>
                                    <Col>วันเปิดรับสมัคร : {date.toISOString(data.competition.start).split("T")[0]}</Col>
                                    <Col>วันสิ้นสุดรับสมัคร : {date.toISOString(data.competition.end).split("T")[0]}</Col>
                                </Row>
                                <Row>
                                    <Col>วันเริ่มการแข่งขัน : {date.toISOString(data.competition.compet_start).split("T")[0]} </Col>
                                    <Col>วันสิ้นสุดการแข่งขัน : {date.toISOString(data.competition.compet_end).split("T")[0]}</Col>
                                </Row>

                            </Container>
                        </Card.Text>

                        <Link href='/Competitions'>
                            <a style={Detail}>กลับ</a>
                        </Link>
                    </Card.Body>
                    <Card.Footer className="text-muted">จ่ายค่าสมัครได้ถึง {date.toISOString(data.competition.pay_end).split("T")[0]}</Card.Footer>
                </Card>
            </ScrollAnimation>
        </Container >
    )
}

const Detail = {
    fontSize: 15
}

export default apolloClient(Competition)
