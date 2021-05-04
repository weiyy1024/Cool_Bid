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

import '../../../styles/bidFunc.css'

const bidPriceStep = 300
const directBuyPrice = 50000

const directBuy = () => {
  console.log(`直接購買，${directBuyPrice}元`)
}

const BidFunc = () => {
  const [bidMethod, setBidMethod] = useState()
  const [nowBidPrice, setNowBidPrice] = useState(30000)
  const [autoBidPrice, setAutoBidPrice] = useState(nowBidPrice + bidPriceStep)
  const [directBidPrice, setDirectBidPrice] = useState(
    nowBidPrice + bidPriceStep
  )

  const handleNowPriceChange = (e) => {
    setAutoBidPrice(e.target.value)
    setDirectBidPrice(e.target.value)
  }

  const handleBidMethodChange = (e) => {
    setBidMethod(e.target.value)
  }

  const handleAutoBidPriceChange = (e) => {
    setAutoBidPrice(e.target.value)
  }

  const handleDirectBidPriceChange = (e) => {
    setDirectBidPrice(e.target.value)
  }

  const bidNow = () => {
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
    return priceDiff <= 1000
      ? `${parseFloat(((1 - nowBidPrice / directBuyPrice) * 100).toFixed(2))}%`
      : `${directBuyPrice - nowBidPrice}元`
  }

  return (
    <Container>
      <Typography variant="h5" color="primary" onChange={handleNowPriceChange}>
        目前出價：{nowBidPrice}元
      </Typography>
      <Typography variant="h5" color="primary">
        出價增額：{bidPriceStep}元
      </Typography>
      <hr />
      <Typography variant="h5" color="secondary">
        {directBuyPrice}元{' '}
      </Typography>
      <Button
        className="buy"
        onClick={directBuy}
        variant="outlined"
        color="secondary"
      >
        <IconButton color="secondary" size="small">
          <PaymentIcon />
        </IconButton>
        直接購買
      </Button>
      <br />
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="gender"
          name="gender1"
          onChange={handleBidMethodChange}
        >
          <FormControlLabel
            control={<Radio />}
            value="autoBid"
            label="自動出價"
            defaultChecked
          />
          <input
            type="number"
            onChange={handleAutoBidPriceChange}
            min={nowBidPrice + bidPriceStep}
            max={directBuyPrice}
            step={bidPriceStep}
            defaultValue={nowBidPrice + bidPriceStep}
          />
          <FormControlLabel
            control={<Radio />}
            value="directBid"
            label="直接出價"
          />
          <input
            type="number"
            onChange={handleDirectBidPriceChange}
            min={nowBidPrice + bidPriceStep}
            max={directBuyPrice}
            step={bidPriceStep}
            defaultValue={nowBidPrice + bidPriceStep}
          />
        </RadioGroup>
      </FormControl>
      <br />
      <Button
        className="go"
        onClick={bidNow}
        variant="contained"
        color="primary"
        disableElevation
      >
        我要出價
      </Button>
      <Typography variant="h5" color="primary">
        已省下 {saveMoney()}
      </Typography>
    </Container>
  )
}

export default BidFunc
