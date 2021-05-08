/* eslint-disable space-before-function-paren */
import React from 'react'
import '../../SASS/list.scss'
import { NavLink } from 'react-router-dom'

function ProductTabs() {
  return (
    <nav className="tabs">
      <ul>
        <li>
          <a href="#">競標中</a>
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
