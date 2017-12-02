import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css'

import Container from './components/grid/Container'
import Row from './components/grid/Row'
import Col from './components/grid/Col'
import Card from './components/Card'


class App extends Component {
  state = {
    dog: [],
    swipe: {
      xDown: null,
      yDown: null
    }
  }

  handleTouchStart = event => {
    console.log('touch start')
    this.setState({
      swipe: {
        xDown: event.touches[0].clientX,
        yDown: event.touches[0].clientY
      }
    })
    // xDown = event.touches[0].clientX
    // yDown = event.touches[0].clientY
  }

  handleTouchMove = event => {
    console.log('touch move')
    const {swipe} = this.state

    const xDown = swipe.xDown
    const yDown = swipe.yDown
    
    if (!xDown || !yDown) {
      return
    }
  
    let xUp = event.touches[0].clientX
    let yUp = event.touches[0].clientY
  
    let xDiff = xDown - xUp
    let yDiff = yDown - yUp
  
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* left swipe */
  
        console.log('swipe left')
        this.fetchNextDog()
      } else {
        /* right swipe */
        console.log('swipe right')
        this.fetchNextDog()
      }
    } else {
      if (yDiff > 0) {
        /* up swipe */
      } else {
        /* down swipe */
      }
    }
    /* reset values */
    this.setState({
      swipe: {
        xDown: null,
        yDown: null
      }
    })
  }
  
  fetchNextDog = () => {
    this.setState( (prevState) => {
      const dogCopy = [...prevState.dog]
      dogCopy.shift()
      return {
        dog: dogCopy
      }
    })
  }

  fetchTenDogs = () => {
    const url = 'https://dog.ceo/api/breeds/image/random'
    Array.from(Array(10).keys()).map( () => {
      fetch(url)
      .then(res => res.json())
      .then(data => {
        // console.log(data.message)
        // imageEl.src = data.message
        this.setState( (prevState) => {
          const dogCopy = [...prevState.dog]
          dogCopy.push(data)
          return {
            dog: dogCopy
          }
        })
      })
    })
  }


  componentDidMount() {
    this.fetchTenDogs()
  }


  render() {
    const { dog } = this.state
    if(dog.length==5) this.fetchTenDogs()

    return (
      <Container variation="fluid">
        <h1 className="text-center font-weight-bold">Swipe my Dogs</h1>
        {!!dog[0] ?
        <Card
          image={dog[0].message}
          text={`Swipe Left or Swipe Right - ${dog.length} dogs loaded`}
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
        /> :
          <p>Loading...</p>
        }

        <Row>
          <Col>
            
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App
