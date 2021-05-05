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
        <NavLink to="/BackStage">賣家後台</NavLink>
      </dd>
      <dd>
        <NavLink to="/BackStage/orders">訂單資訊</NavLink>
      </dd>
      <dd>
        <NavLink to="/Shopping/WishList">收藏清單</NavLink>
      </dd>
    </dl>
  )
}
