import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  container: {
    color: '#fff',
    margin: '0 auto',
    textAlign: 'center',
    textShadow: '2px 2px 10px rgba(0,0,0,.5)'
  },
  h1: {
    fontWeight: 'normal',
    letterSpacing: '.125rem',
    textTransform: 'uppercase'
  },
  li: {
    display: 'inline-block',
    fontSize: '1.5em',
    listStyleType: 'none',
    padding: '1em',
    textTransform: 'uppercase'
  },
  span: {
    display: 'block',
    fontSize: '4.5rem'
  }
})

function AuctionCountdown() {
  const classes = useStyles()
  const [time, setTime] = useState(false)
  const [timer, setTimer] = useState()

  const auctionDay = moment('2021-5-20 13:00:00')
  const countdown = () => {
    const now = moment()
    const difference = auctionDay.diff(now)
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24

    setTime({
      days: Math.floor(difference / day),
      hours: Math.floor((difference % day) / hour),
      minutes: Math.floor((difference % hour) / minute),
      seconds: Math.floor((difference % minute) / second)
    })

    setTimer(setTimeout(countdown, 1000))
  }

  useEffect(() => {
    clearTimeout(timer)
    countdown()
  }, [])

  return (
    <div
      style={{
        height: '100vh',
        background:
          'url(https://www.grindhype.com/images/promo/5/HOMEPAGE1.jpg) no-repeat',
        backgroundPosition: 'center top'
      }}
    >
      <div className={classes.container}>
        <div id="countdown">
          <ul>
            <li className={classes.li}>
              <span className={classes.span} id="days">
                {time ? time.days : '0'}
              </span>
              days
            </li>
            <li className={classes.li}>
              <span className={classes.span} id="hours">
                {time ? time.hours : '0'}
              </span>
              Hours
            </li>
            <li className={classes.li}>
              <span className={classes.span} id="minutes">
                {time ? time.minutes : '0'}
              </span>
              Minutes
            </li>
            <li className={classes.li}>
              <span className={classes.span} id="seconds">
                {time ? time.seconds : '0'}
              </span>
              Seconds
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AuctionCountdown
