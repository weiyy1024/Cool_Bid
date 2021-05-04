import React from 'react'
import '../style/dropdown.css'
import { NavLink, BrowserRouter } from 'react-router-dom'

// eslint-disable-next-line space-before-function-paren
export default function AuctionDropDown() {
  return (
    <BrowserRouter>
      <dl className="auctionList maki">
        <dd>
          <NavLink to="/Chomepage/歷史紀錄">歷史紀錄</NavLink>
        </dd>
        <dd>
          <NavLink to="/Chomepage/即將舉行">即將舉行</NavLink>
        </dd>
        <dd>
          <NavLink to="/Chomepage/about me">about me</NavLink>
        </dd>
      </dl>
    </BrowserRouter>
  )
}
