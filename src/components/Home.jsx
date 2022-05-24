// the Home component is going to have the carousel
// and the comments section!

import { Component } from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap'
import arrayOfPastas from '../data/menu.json'

// let's create Home!
class Home extends Component {
  // the render() method is the ONLY MANDATORY part
  // in a class component
  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-3">
          {/* <Col className="col col-xs-12 col-md-6"> */}
          <Col xs={12} md={6}>
            {/* curly brackets are in place because the value of the prop is a number! */}
            <Carousel>
              {arrayOfPastas.map((pasta) => (
                <Carousel.Item key={pasta.id}>
                  <img
                    className="d-block w-100"
                    src={pasta.image}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>{pasta.name}</h3>
                    <p>{pasta.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Home
