/* eslint-disable space-before-function-paren */
import React from 'react'
import '../../SASS/list.scss'
import { Link } from 'react-router-dom'

function ProductTabs() {
  return (
    <nav className="tabs">
      <ul>
      <li>
          <Link to="/BackStage/product">全&emsp;部</Link>
        </li>
      <li>
          <Link to="/BackStage/product/onTheMarket">上架中</Link>
        </li>
        <li>
          <Link to="/BackStage/product/Biding">競標中</Link>
        </li>
        <li>
          <Link to="/BackStage/product/closeAuction">已結標</Link>
        </li>
        <li>
          <Link to="/BackStage/product/soldout">已售出</Link>
        </li>
      </ul>
    </nav>
  )
}

export default ProductTabs
