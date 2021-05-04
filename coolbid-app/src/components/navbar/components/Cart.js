/* eslint-disable space-before-function-paren */
import React, { useState } from 'react'
import { NavLink, BrowserRouter } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Ps5Pic from '../images/product/Ps5.jpeg'
import styled from '@emotion/styled'
import Tooltip from '@material-ui/core/Tooltip'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm'

// styled Components
const ProductDiv = styled.div`
  display: flex;
`
const ProductImg = styled.div`
  width: 22rem;
  height: 22rem;
`
const ProductInfo = styled.div`
  .productName {
    font-size: 2.6rem;
    margin-top: 6rem;
    margin-bottom: 0;
  }
  .productPrice {
    font-size: 2rem;
    margin-top: 0.5rem;
    margin-bottom: 0.2rem;
  }
  .seller {
    font-size: 1.2rem;
  }
  .countdown {
    margin-top: 0.5rem;
  }
`
const Total = styled.div`
  border-top: solid 0.3rem rgb(17, 17, 120);
  border-bottom: solid 0.3rem rgb(17, 17, 120);
  height: 5rem;
  font-size: 2.5rem;
  line-height: 5rem;
  color: rgb(17, 17, 49);
  display: flex;
  position: relative;
  div {
    position: absolute;
    right: 2rem;
  }
`
const CartNum = styled.span`
  background-color: red;
  border-radius: 50%;
  padding: 0.1rem 0.6rem;
  position: absolute;
  right: 1rem;
  bottom: 3.2rem;
  color: white;
`

// styled Components--End
export function ItemDiv(props) {
  const { data } = props
  const [countDowntime, setCountDownTime] = useState('剩下0天0時0分0秒結束')
  const handleTimer = (orderDate) => {
    setInterval(() => {
      // 得now date
      const nowTime = new Date()

      // 得到訂單成立時間
      const orderStart = new Date(orderDate)

      // 預設倒數七天
      const endDate = orderStart.setDate(orderStart.getDate() + 7)

      // 倒數計時: 差值
      const offTime = (endDate - nowTime) / 1000 // ** 以秒為單位
      const day = parseInt(offTime / 60 / 60 / 24)
      const hr = parseInt(offTime / 60 / 60 - day * 24)
      const min = parseInt((offTime / 60) % 60)
      const sec = parseInt(offTime % 60)

      setCountDownTime(`剩下${day}天${hr}時${min}分${sec}秒`)
    }, 1000)
    return countDowntime
  }

  return (
    <ProductDiv>
      <ProductImg>
        <img src={data.img}></img>
      </ProductImg>
      <ProductInfo>
        <p className="productName">{data.productName}</p>
        <p className="productPrice">$NT.{data.price}</p>
        <BrowserRouter>
          <span className="seller">
            賣家：<NavLink to="/seller">{data.sellerId}</NavLink>
          </span>
        </BrowserRouter>
        <p className="countdown">
          <AccessAlarmIcon />
          {handleTimer(data.orderDate)}
        </p>
      </ProductInfo>
    </ProductDiv>
  )
}

export default function ShoppingCart() {
  const [state, setState] = React.useState({
    right: false
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    setState({ ...state, [anchor]: open })
  }

  // Shopping Cart List
  const myProduct = [
    {
      img: Ps5Pic,
      productName: 'Sony PS5',
      price: 50000,
      sellerId: 'hi_weiyy',
      orderDate: '2021-04-27T04:57:13.000Z',
      time: '剩下6天6時59分59秒結束'
    },
    {
      img: Ps5Pic,
      productName: 'Sony PS5',
      price: 50000,
      sellerId: 'hi_weiyy',
      orderDate: '2021-04-26T04:57:13.000Z',
      time: '剩下6天6時59分59秒結束'
    },
    {
      img: Ps5Pic,
      productName: 'Sony PS5',
      price: 50000,
      sellerId: 'hi_weiyy',
      orderDate: '2021-04-25T04:57:13.000Z',
      time: '剩下6天6時59分59秒結束'
    }
  ]
  // Shopping Cart List--End

  const list = (anchor) => (
    <div
      style={{ width: '40rem' }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <h1 style={{ fontSize: '3rem' }}>
          &nbsp;&nbsp;Shopping Cart&nbsp;&nbsp;
          <ShoppingCartIcon style={{ fontSize: '3rem' }} />
        </h1>
        <Divider />
        {myProduct.map((item, index) => (
          <ItemDiv key={index} data={item} />
        ))}
      </List>
    </div>
  )

  // cart tot price
  let tot = 0
  myProduct.map((item) => (tot += item.price))
  let itemAmount = 0
  myProduct.map((item) => (itemAmount += 1))

  // cart tot price--End
  return (
    <React.Fragment key="right">
      <div>
        <CartNum>{itemAmount}</CartNum>
        <Tooltip title="ShoppingCart" arrow>
          <ShoppingCartIcon
            onClick={toggleDrawer('right', true)}
            style={{
              fontSize: '3.5rem',
              paddingBottom: '.5rem',
              paddingRight: '2rem'
            }}
          />
        </Tooltip>
      </div>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
      >
        {list('right')}
        <Total>
          &nbsp;Total:<div>$NT.{tot}</div>
        </Total>
        <Button style={{ fontSize: '3rem' }}>Check Out</Button>
      </Drawer>
    </React.Fragment>
  )
}
