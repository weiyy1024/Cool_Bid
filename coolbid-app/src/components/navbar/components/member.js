import React from 'react'
import '../style/dropdown.css'
import { NavLink } from 'react-router-dom'

// eslint-disable-next-line space-before-function-paren
export default function MemberDropDown() {
  return (
    <dl className="memberList maki">
      <dd>
        <NavLink to="/member/signin">登入</NavLink>
      </dd>
      <dd>
        <NavLink to="/member/signout">登出</NavLink>
      </dd>
      <dd>
        <NavLink to="/BackStage/sellerInfo">賣家後台</NavLink>
      </dd>
      <dd>
        <NavLink to="/member/purchase">購買清單</NavLink>
      </dd>
      <dd>
        <NavLink to="/Shopping/WishList">收藏清單</NavLink>
      </dd>
    </dl>
  )
}