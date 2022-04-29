import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const GridTest = () => {
    return (
        <Container>

            <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
        </Container>
    )
}

export default GridTest