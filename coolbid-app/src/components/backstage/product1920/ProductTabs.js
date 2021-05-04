/* eslint-disable space-before-function-paren */
import React from 'react'
import '../../SASS/list.scss'

function ProductTabs() {
  return (
    <nav className="tabs">
      <ul>
        <li>
          <a href="#">全部</a>
        </li>
        <li>
          <a href="#">競標中</a>
        </li>
        <li>
          <a href="#">已結標</a>
        </li>
        <li>
          <a href="#">上架中</a>
        </li>
        <li>
          <a href="#">未上架</a>
        </li>
        <li>
          <a href="#">已售出</a>
        </li>
      </ul>
    </nav>
  )
}

export default ProductTabs
