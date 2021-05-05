import React, { useState } from 'react'
import {
  Container,
  Button,
  IconButton,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography
} from '@material-ui/core'
import PaymentIcon from '@material-ui/icons/Payment'

import useStyles from '../../../styles/bidFuncStyle'

const bidPriceStep = 300
let bidTimes = 3
const directBuyPrice = 50000

const directBuy = () => {
  console.log(`直接購買，${directBuyPrice}元`)
}

const BidFunc = props => {
  const [bidMethod, setBidMethod] = useState()
  const [nowBidPrice, setNowBidPrice] = useState(30000)
  const [autoBidPrice, setAutoBidPrice] = useState(nowBidPrice + bidPriceStep)
  const [directBidPrice, setDirectBidPrice] = useState(
    nowBidPrice + bidPriceStep
  )

  const handleNowPriceChange = e => {
    setAutoBidPrice(e.target.value)
    setDirectBidPrice(e.target.value)
  }

  const handleBidMethodChange = e => {
    setBidMethod(e.target.value)
  }

  const handleAutoBidPriceChange = e => {
    setAutoBidPrice(e.target.value)
  }

  const handleDirectBidPriceChange = e => {
    setDirectBidPrice(e.target.value)
  }

  const bidNow = () => {
    bidTimes++

    if (bidMethod === 'autoBid') {
      console.log(`自動出價，最高價 ${autoBidPrice}`)
      // 當 autoBidPrice > nowBidPrice && nowBidPrice 的人 != 自己 => setNowBidPrice(parseInt(setNowBidPrice) + parseInt(bidPriceStep))
      if (autoBidPrice > directBuyPrice) {
        alert('直接買了啦，哪次不買？')
      }
    } else if (bidMethod === 'directBid') {
      setNowBidPrice(parseInt(directBidPrice))
      console.log(`直接出價，最高價 ${directBidPrice}`)
      if (directBidPrice >= directBuyPrice) {
        alert('直接買了啦，哪次不買？')
      }
    }
  }

  const saveMoney = () => {
    const priceDiff = directBuyPrice - nowBidPrice
    return priceDiff <= 5000
      ? `${parseFloat(((1 - nowBidPrice / directBuyPrice) * 100).toFixed(2))}%`
      : `${directBuyPrice - nowBidPrice}元`
  }

  const classes = useStyles()

  return (
    <Container className={classes.bidFuncWrapper}>
      <Typography variant='h4' color='primary' onChange={handleNowPriceChange}>
        目前出價：{nowBidPrice}元
      </Typography>
      <Typography variant='h4' color='primary'>
        出價次數：{bidTimes}次
      </Typography>
      <Typography variant='h4' color='primary'>
        出價增額：{bidPriceStep}元
      </Typography>
      <br />
      <hr />
      <br />
      <div className={classes.directBuyGroup}>
        <Typography
          variant='h5'
          color='secondary'
          className={classes.directBuy}
        >
          {directBuyPrice}元{' '}
        </Typography>
        <Button
          className={classes.buy}
          onClick={directBuy}
          variant='outlined'
          color='secondary'
        >
          <IconButton color='secondary' size='small'>
            <PaymentIcon />
          </IconButton>
          直接購買
        </Button>
      </div>
      <br />
      <FormControl component='fieldset' className={classes.bidFuncGroup}>
        <RadioGroup onChange={handleBidMethodChange}>
          <div className={classes.autoBidGroup}>
            <FormControlLabel
              control={<Radio />}
              value='autoBid'
              label='自動出價'
              style={{ width: '14rem' }}
            />
            <input
              type='number'
              onChange={handleAutoBidPriceChange}
              min={nowBidPrice + bidPriceStep}
              max={directBuyPrice}
              step={bidPriceStep}
              defaultValue={nowBidPrice + bidPriceStep}
            />
          </div>
          <div className={classes.directBidGroup}>
            <FormControlLabel
              control={<Radio />}
              value='directBid'
              label='直接出價'
              style={{ width: '14rem' }}
            />
            <input
              type='number'
              onChange={handleDirectBidPriceChange}
              min={nowBidPrice + bidPriceStep}
              max={directBuyPrice}
              step={bidPriceStep}
              defaultValue={nowBidPrice + bidPriceStep}
            />
          </div>
        </RadioGroup>
      </FormControl>
      <br />
      <div className={classes.bidNowGroup}>
        <Button
          className={classes.go}
          onClick={bidNow}
          variant='contained'
          color='primary'
          disableElevation
        >
          我要出價
        </Button>
        <Typography variant='h4' color='primary' className={classes.save}>
          已省下 {saveMoney()}
        </Typography>
      </div>
    </Container>
  )
}

export default BidFunc
