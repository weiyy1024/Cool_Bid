import React from 'react'
import '../SASS/Sellerhomopage.scss'

function Sellerhomopage () {
  return (
    <div className="Sellerhomopage_wrap">
      <h1>歡迎weiwei賣家~</h1>
      <div className="wrap_container">

 <div className="Sellerhomopage_item_wrap">
          <div className="Sellerhomopage_item">
            <div>待付款訂單  <p>0</p></div>
          </div>
          <div className="Sellerhomopage_item">
            <div>待出貨訂單<p>0</p></div>
          </div>
        </div>
     <div className="Sellerhomopage_item_wrap">

        <div className="Sellerhomopage_item">
          <div>待退貨退款<p>0</p></div>
        </div>

        <div className="Sellerhomopage_item">
          <div>已出貨訂單<p>0</p></div>
        </div>
      </div>
   </div>
    </div>
  )
}

export default Sellerhomopage
