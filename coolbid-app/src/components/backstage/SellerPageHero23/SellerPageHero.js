/* eslint-disable space-before-function-paren */
import React from 'react'
import '../../SASS/SellerPageHero.scss'
import TextField from '@material-ui/core/TextField'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faGem } from '@fortawesome/free-solid-svg-icons'

function SellerPageHero() {
  return (
    <div className="container">
      <div className="sellerPicture">
        <div className="sellerPicture_container"></div>
      </div>
      <div className="sellerText">
        <div className="sellerName">
          wei wei商店 <FontAwesomeIcon icon={faCommentDots} />
        </div>
        <div className="sellerText_item">
          <div className="text_left">
            <p className="sellerTitle">
              超級酷斃專業賣家
              <FontAwesomeIcon icon={faGem} />
            </p>
            <p>粉絲數量:</p>
            <p>商品數量:</p>
          </div>
          <div className="text_right">
            <p>評價數量:</p>
            <p>加入時間:</p>
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
        />
      </div>
    </div>
  )
}

export default SellerPageHero
