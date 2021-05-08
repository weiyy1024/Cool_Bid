import React from 'react'
import '../style/dropdown.css'
import { NavLink } from 'react-router-dom'

// eslint-disable-next-line space-before-function-paren
export default function MemberDropDown() {
  const userinfo = window.sessionStorage.getItem('userinfo')
  let login, editto, backstageto, purchaseto, wishListto
  if (userinfo) {
    login = <NavLink to="/member/signout">登出</NavLink>
    editto = '/member/edit'
    backstageto = '/BackStage'
    purchaseto = '/member/purchase'
    wishListto = '/Shopping/WishList'
  } else {
    login = <NavLink to="/member/signin">登入</NavLink>
    editto = '/member/signin'
    backstageto = '/member/signin'
    purchaseto = '/member/signin'
    wishListto = '/member/signin'
  }
  return (
    <dl className="memberList maki">
      <dd>
        {login}
      </dd>
      <dd>
        <NavLink to={editto}>會員中心</NavLink>
      </dd>
      <dd>
        <NavLink to={backstageto}>賣家後台</NavLink>
      </dd>
      <dd>
        <NavLink to={purchaseto}>購買紀錄</NavLink>
      </dd>
      <dd>
        <NavLink to={wishListto}>收藏清單</NavLink>
      </dd>
    </dl>
  )
}
