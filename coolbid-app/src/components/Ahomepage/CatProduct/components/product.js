/* eslint-disable no-unused-expressions */
/* eslint-disable indent */
/* eslint-disable space-before-function-paren */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
// import Ps5Pic from '../images/Ps5.jpeg'
import FavoriteIcon from '@material-ui/icons/Favorite'
import axios from 'axios'
import '../style/product.css'

const Products = styled.div`
  width: 110rem;
  display: flex;
  float: right;
  flex-wrap: wrap;
`

export function ItemDiv(props) {
  const { data, index, handlelike, sort } = props
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [timer, setTimer] = useState()
  const [flag, setFlag] = useState(true)
  const endTime = data.endTime
  const countdown = () => {
    // 得now date
    const nowTime = new Date()

    // 得到截止時間
    const endDate = new Date(endTime)

    // 倒數計時: 差值
    const offTime = (endDate - nowTime) / 1000 // ** 以秒為單位
    let day = parseInt(offTime / 60 / 60 / 24)
    let hr = parseInt(offTime / 60 / 60 - day * 24)
    let min = parseInt((offTime / 60) % 60)
    let sec = parseInt(offTime % 60)

    day = day < 10 ? '0' + day : day
    hr = hr < 10 ? '0' + hr : hr
    min = min < 10 ? '0' + min : min
    sec = sec < 10 ? '0' + sec : sec

    setDays(day)
    setHours(hr)
    setMinutes(min)
    setSeconds(sec)
    setFlag(!flag)
    setTimer(setTimeout(countdown, 1000))
  }

  useEffect(() => {
    clearInterval(timer)
    countdown()
  }, [data])
  return (
    <div className={sort === 1 ? 'ProductContainer' : 'ProductContainer3'}>
      <div className={sort === 1 ? 'ProductImgDiv' : 'ProductImgDiv3'}>
        <img
          className={sort === 1 ? 'productImg' : 'productImg3'}
          src={'/imgs/' + data.productId + '.jpg'}
        ></img>
        <FavoriteIcon
          className={sort === 1 ? 'Favorite' : 'Favorite3'}
          onClick={(e) => handlelike(e, index)}
          style={{
            fontSize: '3.6rem'
          }}
          color="disabled"
        />
      </div>
      <div className={sort === 1 ? 'Information' : 'Information3'}>
        <p className={sort === 1 ? 'title' : 'title3'}>{data.productName}</p>
        <p className={sort === 1 ? 'biddingPrice' : 'biddingPrice3'}>
          <span>最高出價：</span> NT.<span>{data.directPrice}</span>
        </p>
        <p className={sort === 1 ? 'price' : 'price3'}>
          <span>直購價格：</span> NT.
          <span>{data.directPrice}</span>
        </p>
        <p className={sort === 1 ? 'infoEnd' : 'infoEnd3'}>即將結束</p>
        <div className="countDownContainer">
          <div className="flip-clock flip-clock-d">
            <div
              className="digit digit-left"
              data-digit-before="0"
              data-digit-after={days.toString().substr(0, 1)}
            >
              {/* ::before */}
              <div className="card flipped">
                <div className="card-face card-face-front">0</div>
                <div className="card-face card-face-back">
                  {days.toString().substr(0, 1)}
                </div>
              </div>
              {/* ::after */}
            </div>
            <div
              className="digit digit-right"
              data-digit-before="0"
              data-digit-after={days.toString().substr(1, 1)}
            >
              {/* ::before */}
              <div className="card flipped">
                <div className="card-face card-face-front">0</div>
                <div className="card-face card-face-back">
                  {days.toString().substr(1, 1)}
                </div>
              </div>
              {/* ::after */}
            </div>
          </div>
          <div className="colon">:</div>

          <div className="flip-clock flip-clock-h">
            <div
              className="digit digit-left"
              data-digit-before="0"
              data-digit-after={hours.toString().substr(0, 1)}
            >
              {/* ::before */}
              <div className="card flipped">
                <div className="card-face card-face-front">0</div>
                <div className="card-face card-face-back">
                  {hours.toString().substr(0, 1)}
                </div>
              </div>
              {/* ::after */}
            </div>
            <div
              className="digit digit-right"
              data-digit-before="0"
              data-digit-after={hours.toString().substr(1, 1)}
            >
              {/* ::before */}
              <div className="card flipped">
                <div className="card-face card-face-front">0</div>
                <div className="card-face card-face-back">
                  {hours.toString().substr(1, 1)}
                </div>
              </div>
              {/* ::after */}
            </div>
          </div>
          <div className="colon">:</div>
          <div className="flip-clock flip-clock-m">
            <div
              className="digit digit-left"
              data-digit-before="0"
              data-digit-after={minutes.toString().substr(0, 1)}
            >
              {/* ::before */}
              <div className="card flipped">
                <div className="card-face card-face-front">0</div>
                <div className="card-face card-face-back">
                  {minutes.toString().substr(0, 1)}
                </div>
              </div>
              {/* ::after */}
            </div>
            <div
              className="digit digit-right"
              data-digit-before="0"
              data-digit-after={minutes.toString().substr(1, 1)}
            >
              {/* ::before */}
              <div className="card flipped">
                <div className="card-face card-face-front">0</div>
                <div className="card-face card-face-back">
                  {minutes.toString().substr(1, 1)}
                </div>
              </div>
              {/* ::after */}
            </div>
          </div>
          <div className="colon">:</div>
          <div className="flip-clock flip-clock-s">
            <div
              className="digit digit-left"
              data-digit-before="0"
              data-digit-after={seconds.toString().substr(0, 1)}
            >
              {/* ::before */}
              <div className="card flipped">
                <div className="card-face card-face-front">0</div>
                <div className="card-face card-face-back">
                  {seconds.toString().substr(0, 1)}
                </div>
              </div>
              {/* ::after */}
            </div>
            <div
              className="digit digit-right"
              data-digit-before={(seconds - 1).toString().substr(1, 1)}
              data-digit-after={seconds.toString().substr(1, 1)}
            >
              {/* ::before */}
              <div className={flag ? 'card flipped' : 'card flipped'}>
                <div className="card-face card-face-front">
                  {(seconds - 1).toString().substr(1, 1)}
                </div>
                <div className="card-face card-face-back">
                  {seconds.toString().substr(1, 1)}
                </div>
              </div>
              {/* ::after */}
            </div>
          </div>
        </div>
        <div className={sort === 1 ? 'info' : 'info3'}>
          <td className="infoTitle">days</td>
          <td className="infoTitle1">hours</td>
          <td className="infoTitle1">minutes</td>
          <td className="infoTitle">seconds</td>
        </div>
      </div>
    </div>
  )
}

export default function Product(props) {
  const { data, sort, sortPrice, sortTime, filterValue } = props
  const [productData, setProductData] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [catProduct, setCatProduct] = useState()

  useEffect(() => {
    axios({
      method: 'get',
      baseURL: 'http://localhost:3001',
      url: '/category/' + data,
      'Content-Type': 'application/json'
    }).then((res) => {
      setCatProduct(res.data)
      setProductData(res.data)
    })
  }, [data])

  useEffect(() => {
    if (filterValue[1]) {
      const myFilter = '(' + filterValue.toString() + ')'
      axios({
        method: 'get',
        baseURL: 'http://localhost:3001',
        url: '/filter/' + myFilter,
        'Content-Type': 'application/json'
      }).then((res) => setProductData(res.data))
    }
    if (!filterValue[1]) {
      setProductData(catProduct)
    }
  }, [filterValue])

  useEffect(() => {
    if (sortPrice === 0) {
      const sortAfter = productData.map((item) => item)
      sortAfter.sort(function (a, b) {
        return a.directPrice - b.directPrice
      })
      setProductData(sortAfter)
    } else {
      const sortAfter = productData.map((item) => item)
      sortAfter.sort(function (a, b) {
        return b.directPrice - a.directPrice
      })
      setProductData(sortAfter)
    }
  }, [sortPrice])

  useEffect(() => {
    if (sortTime === 0) {
      const sortAfter = productData.map((item) => item)
      sortAfter.sort(function (a, b) {
        return new Date(a.endTime) - new Date(b.endTime)
      })
      setProductData(sortAfter)
    } else {
      const sortAfter = productData.map((item) => item)
      sortAfter.sort(function (a, b) {
        return new Date(b.endTime) - new Date(a.endTime)
      })
      setProductData(sortAfter)
    }
  }, [sortTime])
  const handlelike = (e, index) => {
    console.log(e)
    console.log(index)
  }

  return (
    <Products>
      {productData[0]
        ? productData.map((item, index) => {
            return (
              <ItemDiv
                key={index}
                index={index}
                data={item}
                handlelike={handlelike}
                sort={sort}
                sortPrice={sortPrice}
                sortTime={sortTime}
              />
            )
          })
        : ''}
    </Products>
  )
}
