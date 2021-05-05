/* eslint-disable space-before-function-paren */
import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === 'light' ? 200 : 700]
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff'
  }
}))(LinearProgress)

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
})

function AuctionTime(props) {
  const { ws } = props
  const initTime = 10
  const [deadline, setDeadline] = useState(moment())
  const [time, setTime] = useState(initTime)
  const [timerId, setTimerId] = useState()
  const classes = useStyles()
  const [product, setProduct] = useState('')

  const countdown = () => {
    const now = moment()
    const s = deadline.diff(now, 'seconds') % 60
    setTime(s)
    if (s <= 0) {
      clearTimeout(timerId)
      setTime(0)
    }

    if (s > 0) {
      setTimerId(
        setTimeout(() => {
          countdown()
        }, 1000)
      )
    }
  }

  // When New Bid Is In, Reset The Countdown Time
  useEffect(() => {
    if (ws) {
      clearTimeout(timerId)
      countdown()
    }
  }, [deadline])

  // Listen To WebSocket
  useEffect(() => {
    const nowPrice = (obj) => {
      if (obj.length !== 0) {
        setDeadline(moment(obj[obj.length - 1].deadline))
      }
    }

    const getBid = (obj) => {
      setDeadline(moment().add(initTime, 's'))
    }

    const nowProduct = (product) => {
      setProduct(product)
    }

    if (ws) {
      ws.on('nowPrice', nowPrice)
      ws.on('getBid', getBid)
      ws.on('nowProduct', nowProduct)
    }

    return () => {
      if (ws) {
        ws.off('nowPrice', nowPrice)
        ws.off('getBid', getBid)
        ws.off('nowProduct', nowProduct)
      }
    }
  }, [ws])

  return (
    <>
      <h2 style={{ marginTop: '0' }}>結標倒數: {time}</h2>
      <BorderLinearProgress variant="determinate" value={(time / 10) * 100} />
      <Card
        className={classes.root}
        style={{ position: 'absolute', bottom: '0' }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="300"
            image="https://cdn-origin.cool-style.com.tw/cool/2020/08/2020-Air-Jordan-1-High-OG-Dior-Wolf-Grey-Sail-Photon-Dust-White-To-Buy.jpg"
            title={product}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              French fashion label Dior is set to release an extremely limited
              Air Jordan 1 during Summer 2020 with a hefty price tag. This Dior
              x Air Jordan 1 features a White and Grey upper with “Air Dior”
              branding on the tongues and above the Wings logo. An all-over
              printed Swoosh logo on the sides atop a co-branded icy translucent
              outsole with a Silver Jumpman and “Air Dior” Wings hangtag
              completes the design.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}

export default AuctionTime
