/* eslint-disable quotes */
/* eslint-disable quote-props */
/* eslint-disable space-before-function-paren */
/* eslint-disable react/prop-types */
/* eslint curly: 2, quotes: ["error", "double"] */
/* eslint eqeqeq: "off", curly: "error" */

import React from 'react'
import axios from 'axios'

export default function Logout(props) {
  axios.defaults.withCredentials = true
  const handlelogout = () => {
    axios.get('http://localhost:3001/logout').then((e) => {
      // console.log(document.cookie)
      alert(e.data)
      console.log(e)
      window.location.href = 'http://localhost:3000/'
    })
  }

  axios.get('http://localhost:3001/member/signin').then((e) => {
    console.log(e.data.loggedIn)
  })

  return (
    <>
      <button
        style={{ marginLeft: 450, marginTop: 300 }}
        onClick={handlelogout}
      >
        {' '}
        登出
      </button>
    </>
  )
}
