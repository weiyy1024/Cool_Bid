/* eslint-disable space-before-function-paren */
import React from 'react'
import styled from '@emotion/styled'
const ShoppingCartContainer = styled.div`
  width: 70%;
  margin: 20rem auto;
  .stepContainer {
    display: flex;
  }
`

export default function ShoppingCart() {
  return (
    <ShoppingCartContainer>
      <div className="stepContainer">
        <div className="step">
          <div className="d-inline-block">
            <h1 className="stepNumber">01</h1>
          </div>
          <div className="d-inline-block ml-2">
            <small className="">確認清單及選擇付款方式</small>
            <br />
            <small>Cart &amp; Check out</small>
          </div>
        </div>
        <div id="step2" className="step">
          <div className="d-inline-block">
            <h1 className="stepNumber">02</h1>
          </div>
          <div className="d-inline-block ml-2">
            <small className="">填寫訂購資料</small>
            <br />
            <small>Shipping &amp; Biling info</small>
          </div>
        </div>
        <div id="step3" className="step">
          <div className="d-inline-block">
            <h1 className="stepNumber">03</h1>
          </div>
          <div className="d-inline-block ml-2">
            <small className="">購物完成！</small>
            <br />
            <small>Order completed</small>
          </div>
        </div>
      </div>
    </ShoppingCartContainer>
  )
}
