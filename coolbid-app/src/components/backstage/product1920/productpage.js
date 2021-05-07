import React from 'react'
import Breadcrumbs from '../Main/Breadcrumbs'
import SellerBackendList from '../Main/SellerBackendList'
import Biding from './Biding'
import CloseAuction from './CloseAuction'
import OnTheMarket from './OnTheMarket'
import SoldOut from './SoldOut'

const handleBtn1 = (e) => {
  document.getElementById('CloseAuctionId').style.display = 'none'
  document.getElementById('OnTheMarketId').style.display = 'none'
  document.getElementById('SoldOutId').style.display = 'none'
  document.getElementById('BidingId').style.display = 'none'
  document.getElementById('BidingId').style.display = 'block'
}

const handleBtn2 = (e) => {
  document.getElementById('CloseAuctionId').style.display = 'none'
  document.getElementById('OnTheMarketId').style.display = 'none'
  document.getElementById('SoldOutId').style.display = 'none'
  document.getElementById('BidingId').style.display = 'none'
  document.getElementById('CloseAuctionId').style.display = 'block'
}

const handleBtn3 = (e) => {
  document.getElementById('CloseAuctionId').style.display = 'none'
  document.getElementById('OnTheMarketId').style.display = 'none'
  document.getElementById('SoldOutId').style.display = 'none'
  document.getElementById('BidingId').style.display = 'none'
  document.getElementById('OnTheMarketId').style.display = 'block'
}

const handleBtn4 = (e) => {
  document.getElementById('CloseAuctionId').style.display = 'none'
  document.getElementById('OnTheMarketId').style.display = 'none'
  document.getElementById('SoldOutId').style.display = 'none'
  document.getElementById('BidingId').style.display = 'none'
  document.getElementById('SoldOutId').style.display = 'block'
}

function productpage () {
  return (
    <div className="sellerBackend_Member_Wrap">
      <div className="breadcrumbsArea">
        <Breadcrumbs />
      </div>
      <div className="sellerBackend_Member_Container">
        <div className="List">
          <SellerBackendList />
        </div>
        <div>
        <nav className="tabs">
      <ul>
        <li>
          <a onClick={handleBtn1} >競標中</a>
        </li>
        <li>
          <a onClick={handleBtn2}>已結標</a>
        </li>
        <li>
          <a onClick={handleBtn3}>上架中</a>
        </li>
        <li>
          <a>未上架</a>
        </li>
        <li>
          <a onClick={handleBtn4}>已售出</a>
        </li>
      </ul>
    </nav>
          <Biding />
          <CloseAuction/>
          <OnTheMarket/>
          <SoldOut/>
        </div>
      </div>
    </div>
  )
}

export default productpage
