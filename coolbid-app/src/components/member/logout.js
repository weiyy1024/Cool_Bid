/* eslint-disable quotes */
/* eslint-disable quote-props */
/* eslint-disable space-before-function-paren */
/* eslint-disable react/prop-types */
/* eslint curly: 2, quotes: ["error", "double"] */
/* eslint eqeqeq: "off", curly: "error" */

import React from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import './log.css'
import styled from '@emotion/styled'

const LoginContainer = styled.div`
  width: 25%;
  height: 30rem;
  margin: 20rem auto;
  color: grey;
`
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
    <LoginContainer>
      <Button
        className="submitBtn"
        variant="contained"
        color="primary"
        onClick={handlelogout}
      >
        登出
      </Button>
    </LoginContainer>
  )
}
