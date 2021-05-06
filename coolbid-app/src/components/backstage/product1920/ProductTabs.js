/* eslint-disable space-before-function-paren */
import React from 'react'
import '../../SASS/list.scss'
import { NavLink } from 'react-router-dom'

function ProductTabs() {
  return (
    <nav className="tabs">
      <ul>
        <li>
          <NavLink to="/BackStage/product/All">全部</NavLink>
        </li>
        <li>
          <NavLink to="/BackStage/product/bidding">競標中</NavLink>
        </li>
        <li>
          <NavLink to="/BackStage/product/closeAuction">已結標</NavLink>
        </li>
        <li>
          <NavLink to="/BackStage/product/onTheMarket">上架中</NavLink>
        </li>
        <li>
          <NavLink to="/BackStage/product/holding">未上架</NavLink>
        </li>
        <li>
          <NavLink to="/BackStage/product/soldout">已售出</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default ProductTabs
