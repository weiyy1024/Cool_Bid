/* eslint-disable space-before-function-paren */
import React, { useState } from 'react'
// import axios from 'axios'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
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
  width: 15rem;
  height: 15rem;
  margin-right: 1.5rem;
`
const ProductInfo = styled.div`
  padding: 1rem;
  .productName {
    font-size: 2.4rem;
    margin-bottom: 0rem;
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
  const [newPrice, setNewPrice] = useState([])

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
  const bidAgain = () => (data.directPrice = newPrice)

  return (
    <ProductDiv>
      <ProductImg>
        <img
          src={'/imgs/' + data.productId + '.jpg'}
          style={{ objectFit: 'scale-down', height: '100%', width: '100%' }}
        ></img>
      </ProductImg>
      <ProductInfo>
        <p
          className="productName"
          style={{
            maxWidth: '200px',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis'
          }}
        >
          {data.productName}
        </p>
        <p>
          最高出價：<span>$NT.</span>
          {data.directPrice}
        </p>
        <p>
          目前出價：<span>$NT.</span>
          {data.directPrice}
        </p>
        <TextField
          id="standard-number"
          label="再次出價"
          type="number"
          defaultValue={data.directPrice}
          onChange={(e) => setNewPrice(e.target.value)}
          inputProps={{ min: `${data.directPrice}` }}
          style={{ display: 'block' }}
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
          {getRestTime(data.endTime)}
        </p>
      </ProductInfo>
    </ProductDiv>
  )
}

export default function Bidding(props) {
  const { userinfo } = props
  // const [biddingProduct, setBiddingProduct] = useState()
  const myProduct = [
    {
      productId: 1,
      productName: 'Sony PS5',
      directPrice: 18000,
      shopId: 1,
      endTime: '2021-06-29T18:00:00.000Z'
    }
  ]
  // const [product, setProduct] = useState(myProduct)
  console.log(userinfo)

  // 得有出過標的商品ID
  // useEffect(() => {
  //   if (userinfo) {
  //     axios({
  //       method: 'get',
  //       baseURL: 'http://localhost:3001',
  //       url: '/bidding/' + userinfo.memberId,
  //       'Content-Type': 'application/json'
  //     }).then((res) => {
  //       let bP = res.data.map((item) => item.productId)
  //       bP = '(' + bP.toString() + ')'
  //       console.log(bP)
  //       setBiddingProduct(bP)
  //     })
  //   }
  //   if (userinfo === null) {
  //     setProduct(myProduct)
  //   }
  // }, [userinfo])

  // 篩選競標中商品
  // useEffect(() => {
  //   axios({
  //     method: 'get',
  //     baseURL: 'http://localhost:3001',
  //     url: '/confirmStatus/' + biddingProduct,
  //     'Content-Type': 'application/json'
  //   }).then((res) => {
  //     console.log(res.data)
  //     // setProduct(res.data)
  //   })
  // }, [biddingProduct])
  // console.log(product)
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
        <h1
          style={{
            fontSize: '3rem',
            marginBottom: '10px',
            textAlign: 'center'
          }}
        >
          <GavelIcon
            style={{ fontSize: '3rem', position: 'relative', top: '4px' }}
          />
          競標中
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
