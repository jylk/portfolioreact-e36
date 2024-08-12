import React from 'react'
import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import "./Contact.css";

function About() {
    return (
        <Container>
            <Row>
                <Col className='col-lg-6 mt-4'>
                    <ListGroup>

                        <ListGroup.Item variant="primary">Name: R.Jaya lakshmi</ListGroup.Item>
                        <ListGroup.Item variant="secondary">Profile: MERN Full Stack Developer</ListGroup.Item>
                        <ListGroup.Item variant="success">Email: rjayalakshmi9012gmail.com</ListGroup.Item>
                        <ListGroup.Item variant="danger">Phone Number: +919645527937</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col className='col-lg-6 '>
                    <h4 className='title text-center'>About me</h4>
                    <p>A passionate and detail-oriented individual seeking  an entry level positionas a MERN Full Stack developer. Armed with solid foundation in web development technologies ,aiming to leverage the academic background and hands on experience to contribute to innovative  projects. Eager to apply skills in both front-end and bac-end devlopement to create a user-friendly and efficient web applications . As a quick learner with a strong commitment to staying updated on emerging trends, well poised to make meaningful contributionds to a dynamic developement team.</p>
                </Col>
            </Row>
        </Container>

    )
}

export default About