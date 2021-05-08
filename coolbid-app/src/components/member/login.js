/* eslint-disable quotes */
/* eslint-disable quote-props */
/* eslint-disable space-before-function-paren */
/* eslint-disable react/prop-types */
/* eslint curly: 2, quotes: ["error", "double"] */
/* eslint eqeqeq: "off", curly: "error" */
import styled from '@emotion/styled'
import React, { useState } from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import './log.css'

const LoginContainer = styled.div`
  width: 25%;
  height: 30rem;
  margin: 20rem auto;
  color: grey;
`
const Myfooter = styled.footer`
  width: 100%;
  text-align: center;
  position: fixed;
  bottom: 0;
  background-color: #123;
  color: white;
  a {
    text-decoration: none;
  }
`

export default function Login(props) {
  const [account, setAccount] = useState('')
  const [pwd, setPwd] = useState('')
  const handlelogin = () => {
    axios
      .post('http://localhost:3001/member/signin', {
        memberId: account,
        password: pwd
      })
      .then((e) => {
        if (e.data) {
          alert('登入成功')
          // 把member資訊存入session
          window.sessionStorage.setItem('userinfo', JSON.stringify(e.data))
          window.location.href = 'http://localhost:3000/'
        } else {
          alert('登入失敗')
        }
      })
  }
  return (
    <>
      <LoginContainer>
        <p className="logTitle">登入會員</p>
        <span className="title2"> 帳號 </span>
        <br />
        <input
          className="account"
          type="text"
          value={account}
          onChange={(e) => setAccount(e.target.value)}
        />
        <br />
        <span className="title2"> 密碼 </span>
        <br />
        <input
          type="text"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
        <input className="rememberMe" type="checkbox" />
        <label className="rememberMeLabel">記住我</label>
        <Button
          className="submitBtn"
          variant="contained"
          color="primary"
          onClick={handlelogin}
          type="submit"
        >
          submit
        </Button>
        <br />
      </LoginContainer>
      <Myfooter className="text-center">
        <div className="row">
          <div className="col">
            <p className="tit">Information</p>
            <a className="m2 text-secondary" href="./footer/購物說明.html">
              購物說明
            </a>
            <a className="m2 text-secondary" href="./footer/退換貨政策.html">
              退換貨政策
            </a>
            <br />
            <a className="m2" href="./footer/問題Ｑ＆Ａ.html">
              問題Ｑ＆Ａ
            </a>
            <a className="m2" href="./footer/關於我們.html">
              關於我們
            </a>
            <br />
            <a className="m2" href="./footer/隱私權政策.html">
              隱私權政策
            </a>
          </div>
          <div className="col">
            <p className="tit">Contact Us</p>
            <p className="m2">營業時間：週一至週五 10-18</p>
            <p className="m2">客服信箱：weiyyy1024@gmail.com</p>
          </div>
        </div>
        <hr />
        <small>©2021 www.hiweiyyy.com.tw All Rights Reserved.</small>
      </Myfooter>
    </>
  )
}
