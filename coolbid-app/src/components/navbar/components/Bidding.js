/* eslint-disable space-before-function-paren */
import React, { useState } from 'react'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import Ps5Pic from '../images/product/Ps5.jpeg'
import styled from '@emotion/styled'
import Tooltip from '@material-ui/core/Tooltip'
import GavelIcon from '@material-ui/icons/Gavel'
import TextField from '@material-ui/core/TextField'
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
  padding: 1rem;
  .productName {
    font-size: 2.2rem;
    margin-top: 1rem;
    margin-bottom: 0rem;
    font-weight: bold;
  }
`
const CartNum = styled.span`
  background-color: red;
  border-radius: 50%;
  padding: 0.1rem 0.6rem;
  position: absolute;
  right: 6.5rem;
  bottom: 3.2rem;
  color: white;
`

// styled Components--End

function ProductDiv1(props) {
  const [time, setTime] = useState('剩下0天0時0分0秒結束')
  const { data } = props
  const [newPrice, setNewPrice] = useState()

  const getRestTime = (deadline) => {
    let item = deadline
    item = item.split('/')
    setInterval(function () {
      // nowTime
      const time = new Date()
      const nowTime = time.getTime() // 獲取當前毫秒數

      // nedTime
      time.setMonth(parseInt(item[1]) - 1) // 月份 (從 '0' 開始算)
      time.setDate(parseInt(item[2]))
      time.setHours(0)
      time.setMinutes(0)
      time.setSeconds(0)
      const nedTime = time.getTime()

      // 倒數計時: 差值
      const offsetTime = (nedTime - nowTime) / 1000 // ** 以秒為單位
      const day = parseInt(offsetTime / 60 / 60 / 24)
      const hr = parseInt(offsetTime / 60 / 60 - day * 24)
      const min = parseInt((offsetTime / 60) % 60)
      const sec = parseInt(offsetTime % 60)

      setTime(`剩下${day}天${hr}時${min}分${sec}秒`)
    }, 1000)
    return time
  }
  const bidAgain = () => (data.myPrice = newPrice)

  return (
    <ProductDiv>
      <ProductImg>
        <img src={data.img}></img>
      </ProductImg>
      <ProductInfo>
        <p className="productName">{data.productName}</p>
        <p>
          最高出價：<span>$NT.</span>
          {data.highestPrice}
        </p>
        <p>
          目前出價：<span>$NT.</span>
          {data.myPrice}
        </p>
        <TextField
          id="standard-number"
          label="再次出價"
          type="number"
          defaultValue={data.highestPrice}
          onChange={(e) => setNewPrice(e.target.value)}
          inputProps={{ min: `${data.highestPrice}` }}
        />
        <Button
          style={{ margin: '1rem .5rem .5rem 0' }}
          variant="contained"
          size="small"
          color="primary"
        >
          直接購買
        </Button>
        <Button
          style={{ margin: '1rem 0 .5rem 0' }}
          variant="contained"
          size="small"
          color="primary"
          onClick={bidAgain}
        >
          確認出價
        </Button>
        <p id="countdown">
          <AccessAlarmIcon />
          {getRestTime(data.deadline)}
        </p>
      </ProductInfo>
    </ProductDiv>
  )
}

export default function Bidding() {
  // Bidding Cart List
  const myProduct = [
    {
      img: Ps5Pic,
      productName: 'Sony PS5',
      myPrice: 50000,
      highestPrice: 60000,
      sellerId: 'hi_weiyy',
      time: '剩下6天6時59分59秒結束',
      deadline: '2021/5/27'
    },
    {
      img: Ps5Pic,
      productName: 'Sony PS5',
      myPrice: 50000,
      highestPrice: 70000,
      sellerId: 'hi_weiyy',
      time: '剩下6天6時59分59秒結束',
      deadline: '2021/5/4'
    }
  ]
  // Bidding List--End
  // cart tot price--End
  let itemAmount = 0
  myProduct.map((item) => (itemAmount += 1))

  const [state, setState] = React.useState({
    right: false
  })

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ [anchor]: open })
  }

  const list = (anchor) => (
    <div style={{ width: '40rem' }}>
      <List>
        <h1 style={{ fontSize: '3rem' }}>
          &nbsp;&nbsp;Bidding&nbsp;&nbsp;
          <GavelIcon style={{ fontSize: '3rem' }} />
        </h1>
        <Divider />
        {myProduct.map((item, index) => (
          <ProductDiv1 key={index} data={item} />
        ))}
      </List>
    </div>
  )

  return (
    <React.Fragment key="right">
      <div>
        <CartNum>{itemAmount}</CartNum>
        <Tooltip title="Bidding" arrow>
          <GavelIcon
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
      </Drawer>
    </React.Fragment>
  )
}
