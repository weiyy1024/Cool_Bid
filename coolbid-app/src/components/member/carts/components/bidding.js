/* eslint-disable space-before-function-paren */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm'
import Text from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import '../style/cart.css'
const TextField = styled(Text)`
  label {
    font-size: 2rem;
  }
  label + .MuiInput-formControl {
    margin-top: 0.6rem;
  }

  div {
    margin-top: 0;
    font-size: 1.8rem;
    padding: 0;
    div {
      margin-top: 0;
      padding: 0;
    }
    input {
      padding: 0px;
    }
  }
`

const Shop = styled.div`
  border: #d9d7d7 solid 0.3rem;
  padding: 2rem;
  width: 85%;
  margin: 5rem auto;
  border-radius: 1rem;
  .top {
    display: flex;
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }
  .items {
    .cartTitle {
      display: flex;
      background-color: #d9d7d7;
      .info {
        width: 33%;
        font-size: 2.4rem;
        text-align: center;
        padding: 1rem;
      }
    }
    .cartItems {
      display: flex;
      border-bottom: #d9d7d7 solid 0.2rem;
      height: 11rem;
      div {
        img {
          width: 10rem;
          height: 10rem;
          object-fit: scale-down;
        }
        padding: 1rem;
      }
      .infoTitle {
        width: 33%;
        font-size: 2rem;
        text-align: center;
        line-height: 3.2rem;
        color: grey;
      }
      .infoProductName {
        a {
          text-decoration: none;
          color: grey;
        }
        a:hover {
          color: #edaf11;
        }
        width: 33%;
        font-size: 2rem;
        text-align: center;
        line-height: 3.2rem;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        white-space: normal;
      }
      .info {
        color: grey;
        width: 33%;
        font-size: 2rem;
        text-align: center;
        line-height: 9rem;
        margin-left: 0;
      }
      .direct {
        // margin-left: 2rem;
        padding-right: 0;
        color: grey;
        width: 33%;
        font-size: 2rem;
        text-align: center;
      }
      .bidinfo {
        margin-top: 1rem;
        margin-left: 2rem;
        div {
          padding: 0.6rem;
        }
        line-height: 0.1rem;
        button {
          margin: 0.2rem 0 0.2rem 1rem;
        }
      }
    }
  }
`
function MyPrice(props) {
  const { productId, userinfo } = props
  const [price, setPrice] = useState()
  useEffect(() => {
    axios({
      method: 'post',
      baseURL: 'http://localhost:3001',
      url: '/myPrice',
      data: {
        pId: productId,
        mId: userinfo.memberId
      }
    }).then((res) => {
      const myprice = res.data[0]
      setPrice(myprice.bidprice)
    })
  }, [])

  return <div className="info">{price}</div>
}
function Timer(props) {
  const { endTime } = props
  const [time, setTime] = useState('剩下0天0時0分0秒結束')

  // count down
  const getRestTime = (endTime) => {
    setInterval(function () {
      // nowTime
      const nowTime = new Date()
      // endTime
      const end = new Date(endTime)
      // 倒數計時: 差值
      const offsetTime = (end - nowTime) / 1000 // ** 以秒為單位
      const day = parseInt(offsetTime / 60 / 60 / 24)
      const hr = parseInt(offsetTime / 60 / 60 - day * 24)
      const min = parseInt((offsetTime / 60) % 60)
      const sec = parseInt(offsetTime % 60)
      setTime(`剩下${day}天${hr}時${min}分${sec}秒`)
    }, 1000)
    return time
  }

  return (
    <div className="infoTitle">
      <AccessAlarmIcon />
      {getRestTime(endTime)}
    </div>
  )
}
function Items(props) {
  const userinfo = JSON.parse(window.sessionStorage.getItem('userinfo'))
  const { product, shopId } = props

  // 依商店分類競標商品
  const newProduct = product.filter(function (el) {
    return el.shopId === shopId
  })
  return (
    <>
      {newProduct.map((item, index) => (
        <div key={index} className="cartItems">
          <div className="info">
            <img src={'/imgs/' + item.productId + '.jpg'} />
          </div>
          <div className="infoProductName">
            <NavLink to={'/Ahomepage/product/product?=' + item.productId}>
              {item.productName}
            </NavLink>
          </div>
          <Timer endTime={item.endTime} />
          <div className="info">{item.nowPrice}</div>
          <MyPrice userinfo={userinfo} productId={item.productId} />
          <form className="bidinfo">
            <TextField
              label="再次出價"
              type="number"
              defaultValue={item.nowPrice}
              inputProps={{
                min: `${item.nowPrice}`,
                step: `${item.perPrice}`,
                className: 'bid'
              }}
            >
              price
            </TextField>
            <Button
              style={{ width: '10rem' }}
              variant="contained"
              size="small"
              color="primary"
            >
              確定出價
            </Button>
          </form>
          <div className="direct">
            {item.directPrice}
            <div>
              <Button
                style={{ width: '10rem' }}
                variant="contained"
                size="small"
                color="primary"
                type="submit"
              >
                直接購買
              </Button>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
export default function Bidding(props) {
  const { userinfo } = props
  const [biddingProduct, setBiddingProduct] = useState()
  const [product, setProduct] = useState([1])
  const [shopId, setShopId] = useState([])

  // 得有出過標的商品ID
  useEffect(() => {
    axios({
      method: 'get',
      baseURL: 'http://localhost:3001',
      url: '/bidding/' + userinfo.memberId,
      'Content-Type': 'application/json'
    })
      .then((res) => {
        let bP = res.data.map((item) => item.productId)
        bP = '(' + bP.toString() + ')'
        console.log(bP)
        setBiddingProduct(bP)
      })
      .then(() => {
        // 篩選競標中商品
        if (biddingProduct) {
          axios({
            method: 'get',
            baseURL: 'http://localhost:3001',
            url: '/confirmStatus/' + biddingProduct,
            'Content-Type': 'application/json'
          })
            .then((res) => {
              console.log(res.data)
              setProduct(res.data)
            })
            .then(() => {
              axios({
                method: 'get',
                baseURL: 'http://localhost:3001',
                url: '/shopName/' + biddingProduct,
                'Content-Type': 'application/json'
              }).then((res) => {
                console.log(res.data)
                setShopId(res.data)
              })
            })
        }
      })
  }, [userinfo, biddingProduct])
  return (
    <>
      {shopId.map((item, index) => (
        <Shop key={index}>
          <div className="top">
            <p>
              {item.shopName}(
              <span>
                {
                  product.filter(function (el) {
                    return el.shopId === item.shopId
                  }).length
                }
              </span>
              )
            </p>
          </div>
          <div className="items">
            <div className="cartTitle">
              <div className="info">商品</div>
              <div className="info">商品名稱</div>
              <div className="info">結標倒數</div>
              <div className="info">最高出價</div>
              <div className="info">我的出價</div>
              <div className="info">競標</div>
              <div className="info">直購價</div>
            </div>
            <Items shopId={item.shopId} product={product} />
          </div>
        </Shop>
      ))}
    </>
  )
}
