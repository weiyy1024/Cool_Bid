/* eslint-disable space-before-function-paren */
import React from 'react'
import styled from '@emotion/styled'
import Ps5Pic from '../../../navbar/images/product/Ps5.jpeg'
import Button from '@material-ui/core/Button'
import axios from 'axios'

const Shop = styled.div`
  border: #d9d7d7 solid 0.3rem;
  padding: 2rem;
  width: 75%;
  margin: 2rem auto;
  .top {
    display: flex;
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }
  .items {
    .cartTitle {
      display: flex;
      background-color: #d9d7d7;
      .check {
        width: 2%;
        font-size: 2.4rem;
        text-align: center;
        padding: 1rem;
        .checkAll {
          width: 1.8rem;
          height: 1.8rem;
        }
      }
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
        }
        padding: 1rem;
      }

      .check {
        width: 2%;
        font-size: 2.4rem;
        text-align: center;
        padding: 1rem;
        .checkEach {
          width: 1.8rem;
          height: 1.8rem;
        }
      }
      .info {
        width: 33%;
        font-size: 2.4rem;
        text-align: center;
        line-height: 10rem;
      }
      .submitBtn{
        font-size: 1.8rem;
      }
    }
  }
`

export default function Shopping() {
  const handleuncollect = () => {

  }
  const userinfo = JSON.parse(window.sessionStorage.getItem('userinfo'))
  // const [collectProduct] = useState([])

  // useEffect(() => {
  axios({
    method: 'get',
    baseURL: 'http://localhost:3001',
    url: '/collect/' + userinfo.memberId
  }).then((e) => {
    const collected = '(' + e.data.map((item) => item.productId).toString() + ')'
    axios.post(
      'http://localhost:3001/membercollect', {
        data: collected
      }
    // 這邊拿的到收藏的商品們(而且狀態是上架 競標中 結標 售出)
    ).then((e) => { console.log(e.data) })
  })
  // }, [collectProduct])

  return (
    // {collectProduct.map((item) => (
    <Shop>
      <div className="top">
        <p>
          weiwei商店(<span>2</span>)
        </p>
      </div>
      <div className="items">
        <div className="cartTitle">
          <div className="info">pic</div>
          <div className="info">productName</div>
          <div className="info">deadLine</div>
          <div className="info">price</div>
          <div className="info">collect</div>

        </div>
        <div className="cartItems">
          <div className="info">
            <img src={Ps5Pic} />
          </div>
          <div className="info">Sony PS5</div>
          <div className="info">deadLine</div>
          <div className="info">price</div>
          <div className="info">
          <Button
          className="submitBtn"
          variant="outlined"
          onClick={handleuncollect}
          type="submit"
          style={{ width: '60%' }}
          >取消收藏</Button>
          </div>
        </div>
      </div>
    </Shop>
    // ))}
  )
}
