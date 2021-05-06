/* eslint-disable multiline-ternary */
/* eslint-disable space-before-function-paren */
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './style/brand.css'
import './style/nav2.css'
import './style/filter.css'
import Product from './components/product'
import styled from '@emotion/styled'
import ListIcon from '@material-ui/icons/List'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms'
import DashboardIcon from '@material-ui/icons/Dashboard'
import axios from 'axios'
import Chip from '@material-ui/core/Chip'
import Pagination from '@material-ui/lab/Pagination'
// import { Breadcrumbs } from '@material-ui/core'

const CategoryContainer = styled.div`
  margin-top: 12rem;
  width: 100%;
  height: 240rem;
`
const SortList = styled.div`
  margin-top: 3rem;
  margin-right: 5rem;
  float: right;
  display: flex;
  font-size: 2rem;
  div {
    cursor: pointer;
    padding: 1rem;
    svg {
      font-size: 2.3rem;
      padding-right: 0.2rem;
    }
  }
`
const Bread = styled.div`
  font-size: 2rem;
  margin: 3rem;
  width: 100%;
`
// brand
const Brands = styled.div`
  border: 0.2rem solid grey;
  margin-top: 13rem;
  margin-left: 3rem;
  text-align: left;
  width: 18%;
  font-size: 2rem;
  ul {
    height: 50rem;
    overflow: hidden;
    padding-left: 0;
    margin-bottom: 0;
    .brandName {
      padding: 0.5rem;
      list-style: none;
      .brandtitle {
        margin-left: 2rem;
        color: #123;
        letter-spacing: 0.1rem;
        text-decoration: none;
        cursor: pointer;
        &:hover {
          color: red;
        }
      }
    }
  }
`
const More = styled.div`
  font-size=2.2rem;
  cursor:pointer;
  text-align:center;
  background:grey;
  &:hover{
    background:red;
    color:white;
  }
`
// brand----End
// filter gender
const Genders = styled.div`
  border: 0.2rem solid grey;
  margin-top: 3rem;
  margin-left: 3rem;
  text-align: left;
  width: 18%;
  font-size: 2.2rem;
  h2 {
    text-align: center;
    margin: 0;
    padding: 1rem;
  }
  div {
    text-align: left;
    padding: 0 3rem 1rem 3rem;
    letter-spacing: 1rem;
    input {
      height: 2rem;
      width: 2rem;
      margin-right: 1rem;
    }
  }
`
const Filter2 = styled.div`
  border: 0.2rem solid grey;
  margin-top: 3rem;
  margin-left: 3rem;
  text-align: center;
  width: 18%;
  font-size: 1.8rem;
  padding-bottom: 1rem;
  h3 {
    text-align: center;
    margin: 0;
    padding: 1rem;
  }
  div {
  }
`
const Filter3 = styled.div`
  border: 0.2rem solid grey;
  margin-top: 3rem;
  margin-left: 3rem;
  width: 18%;
  font-size: 2.2rem;
  padding-bottom: 1rem;
  h3 {
    text-align: center;
    margin: 0;
    padding: 1rem;
  }
  div {
    text-align: left;
    margin-bottom: 1rem;
    margin-left: 2rem;
    letter-spacing: 0.3rem;
    input {
      height: 2rem;
      width: 2rem;
      margin-right: 1rem;
    }
  }
`
// add to filter
const FilterInfo = styled.div`
  width: 110rem;
  display: flex;
  float: right;
  flex-wrap: wrap;
  div {
    font-size: 2rem;
    margin: 1rem;
  }
`
const Page = styled.div`
  button {
    svg {
      font-size: 3rem;
    }
    font-size: 2rem;
  }
`
export default function Category(props) {
  const cat = props.data.params.category
  const [sort, setSort] = useState(1)
  const [sortTime, setSortTime] = useState(0)
  const [sortPrice, setSortPrice] = useState(0)
  const [brandArray, setBrandArray] = useState([1, 2, 3])
  const [genders, setGenders] = useState(['男用', '女用'])
  const [types, setTypes] = useState([1, 2, 3])
  const [typesTitle, setTypesTitle] = useState('Types')
  const [sizes, setSizes] = useState([1, 2, 3])
  const [filterInfo, setFilterInfo] = useState([])
  const [filterValue, setFilterValue] = useState(['0'])
  const [page, setPage] = React.useState(1)
  // badge delete
  const handleDelete = (e) => {
    const myFilter = filterInfo.map((item) => item)
    const add = e
    const index = myFilter.indexOf(add)
    myFilter.splice(index, 1)
    setFilterInfo(myFilter)
    const test = document.getElementsByName(add)
    test[0].checked = ''
  }

  // pages
  const handleChange = (event, value) => {
    setPage(value)
  }
  // brands
  useEffect(() => {
    axios({
      method: 'get',
      baseURL: 'http://localhost:3001',
      url: '/brand/' + props.data.params.category,
      'Content-Type': 'application/json'
    }).then((res) => setBrandArray(res.data))
  }, [cat])
  // brand see more Btn
  const handleBrand = () => {
    const brand = document.getElementById('brand')
    if (parseInt(brand.style.height) > 500) {
      brand.style.height = '100%'
    } else {
      brand.style.height = '500'
    }
  }

  // genders
  useEffect(() => {
    axios({
      method: 'get',
      baseURL: 'http://localhost:3001',
      url: '/genders/' + props.data.params.category,
      'Content-Type': 'application/json'
    }).then((res) => setGenders(res.data))
  }, [cat])

  // types & seasons & years
  useEffect(() => {
    axios({
      method: 'get',
      baseURL: 'http://localhost:3001',
      url: '/types/' + props.data.params.category,
      'Content-Type': 'application/json'
    }).then((res) => setTypes(res.data))
    setTypesTitle(types[0].detailTitleDescription)
  }, [cat, types])

  // sizes & colors
  useEffect(() => {
    axios({
      method: 'get',
      baseURL: 'http://localhost:3001',
      url: '/sizes/' + props.data.params.category,
      'Content-Type': 'application/json'
    }).then((res) => setSizes(res.data))
  }, [cat, sizes])
  // filter brands
  const filterBrand = (e) => {
    const myFilter = filterInfo.map((item) => item)
    const add = e.target.innerText
    const find = myFilter.find((item) => item === add)
    if (find === undefined) {
      myFilter.push(add)
      setFilterInfo(myFilter)
    }
  }

  // filterCheckbox
  const handleChecked = (e) => {
    // for filter vlaue array
    const myFilter = filterValue.map((item) => item)
    const addFilter = e.target.value
    // const find2 = myFilter.find((item) => item === addFilter)

    // for filter badge array
    const badgeArray = filterInfo.map((item) => item)
    const addbadge = e.target.name
    // const find = badgeArray.find((item) => item === addbadge)

    if (e.target.checked) {
      badgeArray.push(addbadge)
      myFilter.push(addFilter)
      setFilterValue(myFilter)
      setFilterInfo(badgeArray)
    } else {
      const index = badgeArray.indexOf(addbadge)
      const index2 = myFilter.indexOf(addFilter)
      myFilter.splice(index2, 1)
      badgeArray.splice(index, 1)
      setFilterValue(myFilter)
      setFilterInfo(badgeArray)
    }
  }
  const changeSort = (e) => {
    setSort(e)
  }
  const changeSortPrice = () => {
    if (sortPrice === 0) {
      setSortPrice(1)
    } else {
      setSortPrice(0)
    }
  }
  const changeSortTime = () => {
    if (sortTime === 0) {
      setSortTime(1)
    } else {
      setSortTime(0)
    }
  }
  return (
    <CategoryContainer>
      {/* navbar2 */}
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/Ahomepage/Bag">Bag</NavLink>
          </li>
          <li>
            <NavLink to="/Ahomepage/Cloth">Cloth</NavLink>
          </li>
          <li>
            <NavLink to="/Ahomepage/Shoes">Shoes</NavLink>
          </li>
          <li>
            <NavLink to="/Ahomepage/Watch">Watch</NavLink>
          </li>
        </ul>
      </nav>
      {/* Breadcrumbs */}
      <Bread>首頁/競標區／包包類</Bread>
      {/* sort */}
      <SortList>
        <div onClick={() => changeSort(1)}>
          <DashboardIcon />
          圖像式瀏覽
        </div>
        <div onClick={() => changeSort(2)}>
          <ListIcon />
          條列式瀏覽
        </div>
        <div onClick={changeSortPrice}>
          <MonetizationOnIcon />
          價格排列
        </div>
        <div onClick={changeSortTime}>
          <AccessAlarmsIcon />
          截止排列
        </div>
      </SortList>
      {/* filter detail */}
      <FilterInfo>
        {filterInfo.map((item, index) => {
          return (
            <Chip
              key={index}
              label={item}
              onDelete={() => handleDelete(item)}
            />
          )
        })}
      </FilterInfo>
      <Product
        filterValue={filterValue}
        data={cat}
        sort={sort}
        sortPrice={sortPrice}
        sortTime={sortTime}
      />
      <Page className="page">
        <Pagination count={10} page={page} onChange={handleChange} />
      </Page>
      {/* brands */}
      <Brands id="brand">
        <ul>
          {brandArray.map((item, index) => {
            return (
              <li key={index} className="brandName">
                <div onClick={filterBrand} className="brandtitle">
                  {item.brandName}
                </div>
              </li>
            )
          })}
        </ul>
        <More onClick={handleBrand}>see more</More>
      </Brands>
      {/* filter */}
      <Genders>
        <h2>Genders</h2>
        {genders.map((item, index) => {
          return (
            <div key={index}>
              <input
                onChange={handleChecked}
                value={item.categorydetailId}
                type="checkbox"
                name={item.categoryDetailDescription}
              />
              <label>{item.categoryDetailDescription}</label>
            </div>
          )
        })}
      </Genders>
      <Filter2
        style={{
          display: cat === 'Watch' ? 'none' : 'block'
        }}
      >
        <h3>
          {cat !== 'Watch' && (cat === 'Shoes' || cat === 'Cloth')
            ? 'Sizes'
            : 'Colors'}
        </h3>
        {sizes.map((item, index) => {
          return (
            <label key={index} className="size">
              <input
                onChange={handleChecked}
                className="sizeInput"
                type="checkbox"
                value={item.categorydetailId}
                name={item.categoryDetailDescription}
              />
              <span>{item.categoryDetailDescription}</span>
            </label>
          )
        })}
      </Filter2>
      <Filter3>
        <h3>{typesTitle}</h3>

        {types.map((item, index) => {
          return (
            <div key={index}>
              <input
                onChange={handleChecked}
                type="checkbox"
                value={item.categorydetailId}
                name={item.categoryDetailDescription}
              />
              <label>{item.categoryDetailDescription}</label>
            </div>
          )
        })}
      </Filter3>
    </CategoryContainer>
  )
}
