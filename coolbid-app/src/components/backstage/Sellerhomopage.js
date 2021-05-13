import React from 'react'
import '../SASS/Sellerhomopage.scss'
import { Link } from 'react-router-dom'
function Sellerhomopage () {
  return (
    <div className="Sellerhomopage_wrap">
      <h1>WEIWEI的賣場</h1>
      <div className="wrap_container">
        <div className="Sellerhomopage_item_wrap">
          <div className="Sellerhomopage_item">
            <div>
            <Link to="/BackStage/orders" className="linkStyle">待付款訂單 <p>0</p></Link>
            </div>
          </div>
          <div className="Sellerhomopage_item" >
            <div>
            <Link to="/BackStage/orders" className="linkStyle">待出貨訂單 <p>0</p></Link>
            </div>
          </div>
        </div>
        <div className="Sellerhomopage_item_wrap">
          <div className="Sellerhomopage_item">
            <div>
            <Link to="/BackStage/orders" className="linkStyle">待退款訂單 <p>0</p></Link>
            </div>
          </div>

          <div className="Sellerhomopage_item">
            <div>
            <Link to="/BackStage/orders" className="linkStyle">已出貨訂單 <p>0</p></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sellerhomopage
