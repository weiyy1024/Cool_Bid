/* eslint-disable space-before-function-paren */
import React from 'react'
import '../../SASS/list.scss'
function OrderTabs() {
  return (
    <nav className="tabs">
      <ul>
        <li>
          <a href="#">全部</a>
        </li>
        <li>
          <a href="#">待出貨</a>
        </li>
        <li>
          <a href="#">運送中</a>
        </li>
        <li>
          <a href="#">已完成</a>
        </li>
        <li>
          <a href="#">棄標</a>
        </li>
        <li>
          <a href="#">退款/貨</a>
        </li>
      </ul>
    </nav>
  )
}

export default OrderTabs
