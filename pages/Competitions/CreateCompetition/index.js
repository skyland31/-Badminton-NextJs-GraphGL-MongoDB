import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import apolloClient from '../../../apollo/apolloClient'
import Link from 'next/link'
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
const CREATE_COMPETITION = gql`
mutation CREATE_COMPETITION($name: String!, $detail: String!, $place: String!,$price: String!,$compet_start: String!,$compet_end: String!,$start: String!,$end: String!,$pay_end: String!) {
  createCompetition(
    name: $name,
    detail: $detail,
    place: $place,
    price: $price,
    compet_start: $compet_start,
    compet_end: $compet_end
    start: $start,
    end: $end,
    pay_end: $pay_end,
  ){
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
  }
}`




const Create = () => {
    const [competitionInfo, setCompetition] = useState({
        name: "",
        detail: "",
        place: "",
        price: "",
        compet_start: "",
        compet_end: "",
        start: "",
        end: "",
        pay_end: "",
    })
    const [success, setSuccess] = useState(false);


    // const [competGenInfo, setcompetGenInfo] = useState({
    //     id: "",
    //     type: "",
    //     gen: "",
    // })
    const [createCompetition, { loading, error, data }] = useMutation(CREATE_COMPETITION, {
        variables: { ...competitionInfo },
        onCompleted: data => {
            if (data) {
                setSuccess(true)
                setCompetition({
                    name: "",
                    detail: "",
                    place: "",
                    price: "",
                    compet_start: "",
                    compet_end: "",
                    start: "",
                    end: "",
                    pay_end: "",
                })
            }
        }
    })
    const handleSubmit = async e => {
        try {
            e.preventDefault()
            await createCompetition()

        } catch (error) {
            console.log(error);
        }
    }
    const handleChange = e => {
        setCompetition({
            ...competitionInfo,
            [e.target.name]: e.target.value
        })
    }
    console.log(competitionInfo);

    return (
        <div style={{ margin: 80 }}>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="name" placeholder="กรุณากรอกชื่อการแข่งขันแบดมินตัน" onChange={handleChange} />
                    <Form.Text className="text-muted">
                        Your must set title competition badminton.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="detail">
                    <Form.Label>รายละเอียดการแข่งขัน</Form.Label>
                    <Form.Control as="textarea" name="detail" placeholder="กรอกรายละเอียดการแข่งขัน" rows="5" onChange={handleChange} />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group controlId="start">
                            <Form.Label>วันเปิดรับสมัคร</Form.Label>
                            <Form.Control type="text" name="start" placeholder="2020-01-15" onChange={handleChange} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="end">
                            <Form.Label>วันสิ้นสุดรับสมัคร</Form.Label>
                            <Form.Control type="text" name="end" placeholder="2020-01-15" onChange={handleChange} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="compet_start">
                            <Form.Label>วันเริ่มการแข่งขัน</Form.Label>
                            <Form.Control type="text" name="compet_start" placeholder="2020-01-15" onChange={handleChange} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="compet_end">
                            <Form.Label>วันวันสิ้นสุดการแข่งขัน</Form.Label>
                            <Form.Control type="text" name="compet_end" placeholder="2020-01-15" onChange={handleChange} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="price">
                            <Form.Label>ค่าสมัคร</Form.Label>
                            <Form.Control type="text" name="price" placeholder="จำนวนเงิน" onChange={handleChange} />
                            <Form.Text className="text-muted">
                                บาท
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="pay_end">
                            <Form.Label>วันสุดท้ายการจ่ายเงิน</Form.Label>
                            <Form.Control type="text" name="pay_end" placeholder="2020-01-15" onChange={handleChange} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group controlId="place">
                    <Form.Label>สถานที่</Form.Label>
                    <Form.Control type="text" name="place" placeholder="กรุณากรอกชื่อการแข่งขันแบดมินตัน" onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit" onChange={handleChange} disabled={loading}>
                    Submit
                </Button>
                <br />
                {success &&
                    <Alert variant="success">
                        This is a success alert with Success.......
                        <Link href="../Competitions/CreateCompetition/[createGenCompettionId]" key={data.createCompetition.id} as={`../Competitions/CreateCompetition/${data.createCompetition.id}`}><a >Next Step-></a></Link>
                    </Alert>
                }

                {error &&
                    <Alert variant="danger">{error.graphQLErrors[0].message}
                        <Link href="../Competitions"><a >Come Back Home Page.</a></Link>
                    </Alert>
                }
            </Form>
        </div>
    )
}

export default apolloClient(Create);
