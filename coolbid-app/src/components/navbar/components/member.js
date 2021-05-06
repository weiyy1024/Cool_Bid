import React from 'react'
import '../style/dropdown.css'
import { NavLink } from 'react-router-dom'

// eslint-disable-next-line space-before-function-paren
export default function MemberDropDown() {
  return (
    <dl className="memberList maki">
      <dd>
        <NavLink to="/member/signin">登出/登入</NavLink>
      </dd>
      <dd>
        <NavLink to="/member/edit">會員中心</NavLink>
      </dd>
      <dd>
        <NavLink to="/BackStage">賣家後台</NavLink>
      </dd>
      <dd>
        <NavLink to="/member/purchase">購買紀錄</NavLink>
      </dd>
      <dd>
        <NavLink to="/Shopping/WishList">收藏清單</NavLink>
      </dd>
    </dl>
  )
}
