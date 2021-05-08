/* eslint-disable space-before-function-paren */
import React from 'react'
import styled from '@emotion/styled'
// import CarContainer from './components/CarContainer'
// import CarTotal from './components/CarTotal'
import Ps5Pic from '../../navbar/images/product/Ps5.jpeg'
import StepContainer from './components/stepContainer'
import './style/cart.css'
const ShoppingCartContainer = styled.div`
  width: 100%;
  margin-top: 11rem;
`
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
    }
  }
`

export default function ShoppingCart() {
  return (
    <ShoppingCartContainer>
      <div className="active-tabs">
        <input
          type="radio"
          name="active_tabs"
          id="btn-1"
          className="input btn-1"
          checked
        />
        <label htmlFor="btn-1" className="btn">
          <i className="fa fa-shopping-cart" /> Shopping Cart
        </label>

        <input
          type="radio"
          name="active_tabs"
          id="btn-2"
          className="input btn-2"
        />
        <label htmlFor="btn-2" className="btn">
          <i className="fa fa-gavel" />
          Bindding Cart
        </label>

        <input
          type="radio"
          name="active_tabs"
          id="btn-3"
          className="input btn-3"
        />
        <label htmlFor="btn-3" className="btn">
          <i className="fa fa-heart"></i> Wish List
        </label>

        <div className="tabs-container">
          <div className="tab-1">
            <StepContainer />
            <Shop>
              <div className="top">
                <p>
                  weiwei商店(<span>2</span>)
                </p>
              </div>
              <div className="items">
                <div className="cartTitle">
                  <div className="check">
                    <input className="checkAll" type="checkbox" />
                  </div>
                  <div className="info">pic</div>
                  <div className="info">productName</div>
                  <div className="info">deadLine</div>
                  <div className="info">price</div>
                </div>
                <div className="cartItems">
                  <div className="check">
                    <input className="checkEach" type="checkbox" />
                  </div>
                  <div className="info">
                    <img src={Ps5Pic} />
                  </div>
                  <div className="info">Sony PS5</div>
                  <div className="info">deadLine</div>
                  <div className="info">price</div>
                </div>
              </div>
            </Shop>
          </div>

          <div className="tab-2">
            <p>
              <i className="fa fa-cog"></i> Settings
            </p>
          </div>
          <div className="tab-3">
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
                  <div className="info">Countdown</div>
                  <div className="info">now price</div>
                  <div className="info">directprice</div>
                  <div className="info">cancle</div>
                </div>
                <div className="cartItems">
                  <div className="info">
                    <img src={Ps5Pic} />
                  </div>
                  <div className="info">Sony PS5</div>
                  <div className="info">Countdown</div>
                  <div className="info">price</div>
                  <div className="info">directprice</div>
                  <div className="info">
                    <button>取消追蹤</button>
                  </div>
                </div>
              </div>
            </Shop>
          </div>
        </div>
      </div>
      {/* <CarTotal /> */}
    </ShoppingCartContainer>
  )
}
