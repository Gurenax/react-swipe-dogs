import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Container from './components/Container'
import Row from './components/Row'
import Col from './components/Col'

class App extends Component {
  render() {
    return (
      <Container variation='fluid' className='bg-primary'>
        <Row className='bg-success'>
          <Col className='bg-info'>
            <h1>Swipe my Dogs</h1>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default App;
