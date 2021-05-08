import React from 'react'
import Carousel from 'react-elastic-carousel'
// import styled from 'styled-component'

function BiddingCarousel () {
  return (
    <Carousel itemsToScroll={1} itemsToShow={4} style={{ width: '60%', margin: '0 auto' }}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </Carousel>
  )
}

export default BiddingCarousel
