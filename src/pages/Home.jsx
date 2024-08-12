import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Home.css";

function Home() {
  return (
    <Container className='mt-5'>
        <Row className = "rows align-items-center">
            <Col className ="col-lg-8">
            <p className='name-styling'>Hi! I am R Jaya Lakhsmi.</p>
            <p className='sub-styling'>A MERN full stack Developer</p>
            </Col>
            <Col className="col-lg-4">
            
            <img src="/images/pic.png"className='w-100px mt-2' alt='pic'/>
            </Col>
        </Row>
    </Container>
    
  )
}

export default Home