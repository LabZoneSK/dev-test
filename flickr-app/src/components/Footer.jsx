import React from 'react'
import { Container, Col, Row} from 'react-bootstrap'

function Footer() {
  return (
    <footer className="w-100 mt-4">
        <Container className="text-center text-white p-4 pb-4">
            <Row>
            <Col>
                <div>Images are from Flickr.</div>
            </Col>
            </Row>
        </Container>
      </footer>
  )
}

export default Footer