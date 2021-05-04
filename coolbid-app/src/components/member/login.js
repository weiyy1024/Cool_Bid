/* eslint-disable quotes */
/* eslint-disable quote-props */
/* eslint-disable space-before-function-paren */
/* eslint-disable react/prop-types */
/* eslint curly: 2, quotes: ["error", "double"] */
/* eslint eqeqeq: "off", curly: "error" */

import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Login(props) {
  const [account, setAccount] = useState('')
  const [pwd, setPwd] = useState('')
  const [loginStatus, setLoginStatus] = useState('')
  // session要跨域
  axios.defaults.withCredentials = true

  useEffect(() => {
    axios.get('http://localhost:3001/member/signin').then((response) => {
      console.log(response)
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user.id)
        console.log(loginStatus)
      }
    })
  }, [])

  const handlelogin = () => {
    axios
      .post('http://localhost:3001/member/signin', {
        memberId: account,
        password: pwd
      })
      .then((e) => {
        // alert('memberId ' + account)
        alert(e.data)
        console.log(e)
        window.location.href = 'http://localhost:3000/'
      })
  }
  if (loginStatus) {
    console.log(loginStatus)
  } else {
    console.log('logoutㄛ')
  }
  return (
    <>
      <span style={{ marginLeft: 450 }}> 帳號 </span>{' '}
      <input
        type="text"
        style={{ marginTop: 300 }}
        value={account}
        onChange={(e) => setAccount(e.target.value)}
      />
      <br />
      <span style={{ marginLeft: 450 }}> 密碼 </span>{' '}
      <input
        type="text"
        style={{ marginTop: 10 }}
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
      />
      <br />
      <input
        type="submit"
        style={{ marginLeft: 450, marginTop: 10 }}
        onClick={handlelogin}
      />
      <br />
    </>
  )
}
