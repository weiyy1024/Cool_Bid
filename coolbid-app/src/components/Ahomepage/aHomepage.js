/* eslint-disable space-before-function-paren */
import React from 'react'
import forA from './images/forA.jpeg'
import { NavLink } from 'react-router-dom'
import bag from './images/bag.jpeg'
import cloth from './images/P351白370.jpeg'
import shoes from './images/shoes2.jpeg'
import watch from './images/watch.jpeg'
// import Category from './CatProduct/category'
import './Ahomepage.css'
// import {
//   // BrowserRouter,
//   Switch,
//   Route
// } from 'react-router-dom'

// import { renderRoutes } from 'react-router-config'

const category = [
  {
    categoryId: '1',
    categoryName: 'Bag',
    src: bag
  },
  {
    categoryId: '2',
    categoryName: 'Cloth',
    src: cloth
  },
  {
    categoryId: '3',
    categoryName: 'Shoes',
    src: shoes
  },
  {
    categoryId: '4',
    categoryName: 'Watch',
    src: watch
  }
]

export default function Ahomepage() {
  return (
    <div className="AhomepageContainer">
      <div>
        <img className="AhomepageImg" src={forA}></img>
      </div>
      {/* 麵包屑 */}
      <p className="breadcrumb">首頁/Ahomepage</p>
      {/* 分類選項 */}
      <div className="category">
        {category.map((item) => (
          <NavLink key={item.categoryId} to={'/Ahomepage/' + item.categoryName}>
            <img className="eachCat" src={item.src}></img>
          </NavLink>
        ))}
      </div>
      {/* 跑馬燈 */}
      <div className="marquee">
        <div className="track">
          <div className="content">
            &nbsp;Infinite Marquee with long sentence Infinite Marquee with long
            sentence Infinite Marquee with long sentence Infinite Marquee with
            long sentence Infinite Marquee with long sentence
          </div>
        </div>
      </div>
      {/* 熱門輪播 */}
    </div>
  )
}
