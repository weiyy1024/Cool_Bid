import React from 'react'
import Carousel from 'react-elastic-carousel'
import '../carousel/carousel.css'
// import { NavLink } from 'react-router-dom'
// import FavoriteIcon from '@material-ui/icons/Favorite'

const BiddingCarousel = () => {
  return (
    <Carousel
      itemsToScroll={2}
      itemsToShow={4}
      pagination={false}
      style={{ width: '90%', margin: '5rem auto 5rem' }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
        <div key={index} className="ProductContainer" style={{ width: '90%' }}>
          <div className="ProductImgDiv" style={{ textAlign: 'center' }}>
            <img className="productImg" src={'/imgs/1.jpg'} style={{}} />
          </div>
        </div>
      ))}
    </Carousel>
  )
}

export default BiddingCarousel
