import React from 'react'
import '../../SASS/Main.scss'
import { Link } from 'react-router-dom'
export default function NestedList () {
  return (
    <div className="side-menu">
    <ul className="nav">
        <li><Link className='link' to="/BackStage">賣家首頁</Link></li>
        <li><Link className='link' to="/BackStage/orders">商品訂單</Link></li>
        <li><Link className='link' to="/BackStage/product/all">商品列表</Link></li>
        <li><Link className='link' to="/BackStage/editProduct">新增商品</Link></li>
        <li><Link className='link' to="/BackStage/sellerInfo">賣場設定</Link></li>
    </ul>
</div>

  )
}
