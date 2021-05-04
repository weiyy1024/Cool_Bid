/* eslint-disable space-before-function-paren */
/* eslint-disable no-unused-vars */
import logo from './logo.svg'
import './App.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import webSocket from 'socket.io-client'
import AuctionTime from './components/auction/auction_time'
import Chat from './components/auction/auction_chat'
import BidHistory from './components/auction/auction_bidHistory'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import AuctionResult from './components/auction/auction_result'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}))

function Auction() {
  const [user, setUser] = useState()

  const [ws, setWs] = useState()
  const server = 'http://localhost:3002/'
  const classes = useStyles()
  // 連線server
  useEffect(() => {
    setUser(prompt('請輸入暱稱', 'Guest'))
    setWs(webSocket(server))
  }, [])
  // test 2
  return (
    <Grid container spacing={3} style={{ padding: '20px', maxWidth: '100vw' }}>
      <Grid item xs style={{ height: '100vh' }}>
        <BidHistory ws={ws} user={user} />
      </Grid>
      <Grid
        item
        xs={6}
        style={{ position: 'relative', textAlign: 'center', height: '100vh' }}
      >
        <AuctionTime ws={ws} />
      </Grid>
      <Grid item xs style={{ height: '100vh' }}>
        <Chat ws={ws} user={user} />
      </Grid>
      <Grid item xs={12}>
        <AuctionResult ws={ws} />
      </Grid>
    </Grid>
  )
}

export default Auction
