/* eslint-disable space-before-function-paren */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../../SASS/SellerPageHero.scss'
import TextField from '@material-ui/core/TextField'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faGem } from '@fortawesome/free-solid-svg-icons'
import styled from '@emotion/styled'

const SellerPageHeroContainer = styled.div`
  margin: 20rem auto;
  width:70%
  height:1000px

`

function SellerPageHero() {
  const [data, setData] = useState([])
  useEffect(() => {
    console.log('hi')
    axios({
      method: 'get',
      baseURL: 'http://localhost:3001',
      url: '/BackStage/SellerPageHero',
      'Content-Type': 'application/json'
    }).then((a) => setData(a.data))
  }, [])

  return (
    <SellerPageHeroContainer>
    <div className="container">
      <div className="sellerPicture">
        <div className="sellerPicture_container"></div>
      </div>

      {data.map((item, index) => {
        return (
        // eslint-disable-next-line react/jsx-key
         <>
         <div className="sellerText" key={index}>
          <div className="sellerName">{item.shopName}
         <FontAwesomeIcon icon={faCommentDots} />
        </div>
        <div className="sellerText_item">
        <div className="text_left">
          <p className="sellerTitle">
            {item.shopLevelDescription}
            <FontAwesomeIcon icon={faGem} />
          </p>
          <p>粉絲數量:{item.shopFans}</p>
          <p>商品數量:{item.productNumber}</p>
        </div>
        <div className="text_right">
          <p>評價數量:</p>
          <p>加入時間:{item.registerDate}</p>
          <p>上線時間:</p>
        </div>
      </div>
      </div>
       <div className="sellerDescription">
       <TextField
         id="description"
         type="text"
         name="description"
         label="賣場描述"
         variant="outlined"
         multiline={true}
         rows={6}
         className="biginput"
         value={item.shopDescription}
         InputLabelProps={{ shrink: true }}
       />
     </div>
     </>
        )
      })}

  </div>
  </SellerPageHeroContainer>
  )
}

export default SellerPageHero
