import React from 'react'
import '../style/dropdown.css'
import { NavLink } from 'react-router-dom'

const category = [
  {
    categoryId: '1',
    categoryName: 'Bag'
  },
  {
    categoryId: '2',
    categoryName: 'Cloth'
  },
  {
    categoryId: '3',
    categoryName: 'Shoes'
  },
  {
    categoryId: '4',
    categoryName: 'Watch'
  }
]

// eslint-disable-next-line space-before-function-paren
export default function DropDown() {
  return (
    <dl className="list maki">
      {category.map((item, index) => (
        <dd key={index}>
          <NavLink to={'/Ahomepage/' + item.categoryName}>
            {item.categoryName}
          </NavLink>
        </dd>
      ))}
    </dl>
  )
}
