/* eslint-disable indent */
/* eslint-disable space-before-function-paren */
import React from 'react'
import styled from '@emotion/styled'
import swal from 'sweetalert'

const TotalContainer = styled.div`
  border: #d9d7d7 solid 0.3rem;
  padding: 2rem;
  width: 75%;
  margin: 5rem auto;
  display: flex;
  font-size: 2.4rem;
  position: relative;
  border-radius: 1rem;
  .allCheck {
    display: flex;
    input {
      width: 1.8rem;
      height: 1.8rem;
      margint: 2rem;
    }
  }
  .totalAmount {
    position: absolute;
    right: 50rem;
  }
  .checkOutBtn {
    position: absolute;
    right: 3rem;
    text-align: center;
    width: 20%;
    border: #edaf11 solid 0.5rem;
    border-radius: 0.5rem;
    text-decoration: none;
    color: #edaf11;
    cursor: pointer;
  }
  .checkOutBtn:hover {
    background-color: #edaf11;
    color: white;
  }
`

export default function CartTotal(props) {
  const { totPrice, totalArray, productArray } = props
  function handleCheckoutProuduct() {
    if (productArray[0]) {
      window.location.href = ' http://localhost:3000/Shopping/Cart/checkout'
      window.sessionStorage.setItem(
        'orderProduct',
        JSON.stringify(productArray)
      )
    } else {
      swal({
        title: '沒有點選任何商品',
        text: '請確認結帳商品數量',
        icon: 'error',
        button: '再試一次'
      })
    }
  }
  return (
    <TotalContainer>
      <div className="allCheck">
        <input type="checkbox" />
        <label>全選</label>
      </div>
      <div className="totalAmount">
        總金額（<span>{totalArray.length}</span>個商品）：$
        <span>{totPrice}</span>
      </div>
      <div className="checkOutBtn" onClick={handleCheckoutProuduct}>
        去買單
      </div>
    </TotalContainer>
  )
}
