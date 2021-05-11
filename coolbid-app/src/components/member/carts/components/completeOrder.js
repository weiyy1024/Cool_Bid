/* eslint-disable space-before-function-paren */
import React from 'react'
import styled from '@emotion/styled'
import Bidding from './bidding'
import Wish from './wish'
import '../style/cart.css'
import { NavLink } from 'react-router-dom'

const ShoppingCartContainer = styled.div`
  hieght: auto;
  width: 100%;
  margin-top: 12.5rem;
`
const StepOutter = styled.div`
  width: 80%;
  display: flex;
  margin: 2rem auto;
  .step3 {
    background-color: #ffb802e6;
    color: white;
    border: #f4ab0a 0.3rem solid;
    border-radius: 1rem;
  }
`
const Step = styled.div`
  display: flex;
  padding: 1rem;
  width: 30%;
  text-align: center;
  border: black 0.3rem solid;
  border-radius: 1rem;
  margin: 2rem;
  .number {
    width: 20%;
    font-size: 4.5rem;
  }
  .info {
    font-size: 2rem;
  }
`
const Order = styled.div`
  border: #d9d7d7 solid 0.3rem;
  padding: 2rem;
  width: 60%;
  margin: 2rem auto;
  border-radius: 1rem;
  .orderComplete {
    text-align: center;
    font-size: 4rem;
    color: grey;
    font-weight: bold;
  }
  .content {
    text-align: center;
    font-size: 2.4rem;
    color: grey;
  }
  .backToHomepage {
    text-align: center;
    font-size: 2rem;
    color: grey;
    padding: 0.8rem 1.5rem;
    border: grey solid 0.3rem;
    width: 6.5rem;
    margin: 1rem auto;
    border-radius: 0.5rem;
  }
`
export default function CompleteOrder() {
  const userinfo = JSON.parse(window.sessionStorage.getItem('userinfo'))
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
          <i className="fa fa-shopping-cart"></i>
          購物車
        </label>
        <input
          type="radio"
          name="active_tabs"
          id="btn-2"
          className="input btn-2"
        />
        <label htmlFor="btn-2" className="btn">
          <i className="fa fa-gavel" />
          競標中
        </label>

        <input
          type="radio"
          name="active_tabs"
          id="btn-3"
          className="input btn-3"
        />
        <label htmlFor="btn-3" className="btn">
          <i className="fa fa-heart"></i> 收藏清單
        </label>

        <div className="tabs-container">
          <div className="tab-1">
            <StepOutter>
              <Step className="step1">
                <div className="number">
                  <span className="stepNum">01</span>
                </div>
                <div className="info">
                  <p className="line">確認清單及選擇付款方式</p>
                  <p className="line">Cart &amp; Check out</p>
                </div>
              </Step>
              <Step className="step2">
                <div className="number">
                  <span className="stepNum">02</span>
                </div>
                <div className="info">
                  <p className="line">填寫訂購資料</p>
                  <p className="line">Shipping &amp; Biling info</p>
                </div>
              </Step>
              <Step className="step3">
                <div className="number">
                  <span className="stepNum">03</span>
                </div>
                <div className="info">
                  <p className="line">購物完成！</p>
                  <p className="line">Order completed</p>
                </div>
              </Step>
            </StepOutter>
            <Order>
              <p className="orderComplete">訂購完成！</p>
              <p className="content">
                感謝您一直以來的支持，以下為您此次訂購商品
              </p>
              <p className="content">如有任何疑問歡迎與客服聯繫</p>
              <NavLink to="/" style={{ textDecoration: 'none' }}>
                <div className="backToHomepage">回首頁</div>
              </NavLink>
            </Order>
          </div>
          <div className="tab-2">
            <p>
              <Bidding userinfo={userinfo} />
            </p>
          </div>
          <div className="tab-3">
            <Wish userinfo={userinfo} />
          </div>
        </div>
      </div>
    </ShoppingCartContainer>
  )
}
