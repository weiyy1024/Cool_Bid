import React, { useState, useEffect } from 'react'
import axios from 'axios'

import swal from 'sweetalert'

import {
  Container,
  Button,
  IconButton,
  FormControl,
  // FormControlLabel,
  // Radio,
  Typography
} from '@material-ui/core'
import PaymentIcon from '@material-ui/icons/Payment'

import useStyles from '../../../styles/bidFuncStyle'

const BidFunc = (props, { bidState }) => {
  const userInfo = JSON.parse(window.sessionStorage.getItem('userinfo'))

  const { setBidState, nowBidPrice, bidTimes } = props
  const [productF, setProductF] = useState([])
  useEffect(() => {
    axios({
      method: 'get',
      baseURL: 'http://localhost:3001',
      url: `/product/${props.pId}`,
      'Content-Type': 'application/json'
    }).then(res => setProductF(res.data))
  }, [bidState])

  console.log(productF)

  const directBuyPrice = productF.length === 0 ? '' : productF[0][0].directPrice
  const bidPriceStep = productF.length === 0 ? '' : productF[0][0].perPrice

  // const [bidMethod, setBidMethod] = useState()
  // const [nowBidPrice, setNowBidPrice] = useState(nowBidPrice)
  // const [autoBidPrice, setAutoBidPrice] = useState(nowBidPrice + bidPriceStep)
  const [directBidPrice, setDirectBidPrice] = useState(nowBidPrice + bidPriceStep)

  const handleNowPriceChange = e => {
    // console.log(nowPrice)
    // setNowPrice(e.target.value)
    // setAutoBidPrice(e.target.value)
    setDirectBidPrice(e.target.value)
    console.log(e.target)
  }

  // const handleBidMethodChange = e => {
  //   setBidMethod(e.target.value)
  // }

  // const handleAutoBidPriceChange = e => {
  //   setAutoBidPrice(e.target.value)
  // }

  const handleDirectBidPriceChange = e => {
    setDirectBidPrice(e.target.value)
  }

  const directBuy = () => {
    swal({
      title: '確定要購買嗎？',
      text: '購買後不可任意棄標喔！',
      icon: 'warning',
      buttons: true
    })
      .then((confirmPurchased) => {
        if (confirmPurchased) {
          // 將商品狀態設為結標
          // 更改商品頁
          swal('感謝您的購買：）', {
            icon: 'success'
          })
        } else {
          swal('再想想也沒關係唷～')
        }
      })
  }

  //   bidNow = () => {
  //   if (bidMethod === 'autoBid' && autoBidPrice >= nowBidPrice + bidPriceStep) {
  //     swal({
  //       title: `自動出價成功，最高價 ${autoBidPrice}`,
  //       icon: 'success',
  //       button: '確認'
  //     })

  //     axios({
  //       method: 'post',
  //       url: `http://localhost:3001/product/${props.originPId}`,
  //       'Content-Type': 'application/json',
  //       data: {
  //         autoBidPrice: autoBidPrice
  //       }
  //     }).then(res => console.log(res.data))
  //     // 當 autoBidPrice > nowBidPrice && nowBidPrice 的人 != 自己 => setNowBidPrice(parseInt(setNowBidPrice) + parseInt(bidPriceStep)) & bidTimes++
  //   } else if (bidMethod === 'directBid' && directBidPrice >= nowBidPrice + bidPriceStep) {
  //     if (directBidPrice < directBuyPrice) {
  //       // setNowBidPrice(parseInt(directBidPrice))

  //       swal({
  //         title: `直接出價成功，目前競標價 ${directBidPrice}元`,
  //         icon: 'success',
  //         button: '確認'
  //       })

  //       axios({
  //         method: 'post',
  //         url: `http://localhost:3001/product/${props.originPId}`,
  //         'Content-Type': 'application/json',
  //         data: {
  //           directBidPrice: directBidPrice,
  //           id: props.pId
  //         }
  //       }).then(res => console.log(res.data))
  //     } else {
  //       if (directBidPrice >= directBuyPrice) {
  //         swal({
  //           title: '確定要以直購價購買嗎？',
  //           text: '購買後不可任意棄標喔！',
  //           icon: 'warning',
  //           buttons: true
  //         })
  //           .then((confirmPurchased) => {
  //             if (confirmPurchased) {
  //               // 將商品狀態設為結標
  //               // 更改商品頁
  //               swal('感謝您的購買：）', {
  //                 icon: 'success'
  //               })
  //             } else {
  //               swal('再想想也沒關係唷～')
  //             }
  //           })
  //       }
  //     }
  //   }
  // }

  const bidNow = () => {
    if (directBidPrice < directBuyPrice && directBidPrice >= nowBidPrice + bidPriceStep) {
      swal({
        title: `直接出價成功，目前競標價 ${directBidPrice}元`,
        icon: 'success',
        button: '確認'
      })

      axios({
        method: 'post',
        url: `http://localhost:3001/product/${props.originPId}`,
        'Content-Type': 'application/json',
        data: {
          directBidPrice: directBidPrice,
          id: props.pId,
          memberId: userInfo.memberId
        }
      }).then(res => console.log(res.data))
    } else {
      if (directBidPrice >= directBuyPrice) {
        swal({
          title: '確定要以直購價購買嗎？',
          text: '購買後不可任意棄標喔！',
          icon: 'warning',
          buttons: true
        })
          .then((confirmPurchased) => {
            if (confirmPurchased) {
              // 將商品狀態設為結標
              // 更改商品頁
              swal('感謝您的購買：）', {
                icon: 'success'
              })
            } else {
              swal('再想想也沒關係唷～')
            }
          })
      }
    }
  }

  // historyData = {
  //   directBidGroup: directBidPrice
  // }

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
        {/* <RadioGroup onChange={handleBidMethodChange}> */}
          {/* <div className={classes.autoBidGroup}>
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
          </div> */}
          <div className={classes.directBidGroup}>
            {/* <FormControlLabel
              control={<Radio />}
              value='directBid'
              label='直接出價'
              style={{ width: '14rem' }}
            /> */}
            <input
              type='number'
              onChange={handleDirectBidPriceChange}
              min={nowBidPrice + bidPriceStep}
              max={directBuyPrice}
              step={bidPriceStep}
              defaultValue={nowBidPrice}
            />
          </div>
        {/* </RadioGroup> */}
      </FormControl>
      <br />
      <div className={classes.bidNowGroup}>
        <Button
          className={classes.go}
          onClick={() => {
            bidNow()
            setBidState(bidState + 1)
          }}
          variant='contained'
          color='primary'
          disableElevation
        >
          直接出價
        </Button>
        <Typography variant='h4' color='primary' className={classes.save}>
          已省下 {saveMoney()}
        </Typography>
      </div>
    </Container>
  )
}

export default BidFunc
