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
  // 新增幣別切換 20200511 weiyy
  const currency = JSON.parse(window.sessionStorage.getItem('currency'))

  const { setBidState, nowBidPrice, bidTimes } = props
  const [productF, setProductF] = useState([])

  // 頁面載入撈資料
  useEffect(() => {
    axios({
      method: 'get',
      baseURL: 'http://localhost:3001',
      url: `/product/${props.pId}`,
      'Content-Type': 'application/json'
    }).then((res) => {
      setProductF(res.data)
    })
  }, [bidState])

  const directBuyPrice = productF.length === 0 ? '' : productF[0][0].directPrice
  const bidPriceStep = productF.length === 0 ? '' : productF[0][0].perPrice

  let [directBidPrice, setDirectBidPrice] = useState(nowBidPrice + bidPriceStep)

  // 結標判斷
  let isBidDisable = false
  if (
    productF.length === 0
      ? ''
      : productF[0][0].nowPrice === directBuyPrice ||
        Date.parse(productF.length === 0 ? '' : productF[0][0].endTime) <=
          Date.now()
  ) {
    isBidDisable = true
  }

  const handleNowPriceChange = (e) => {
    setDirectBidPrice(e.target.value)
    console.log(e.target)
  }

  const handleDirectBidPriceChange = (e) => {
    const bidPrice = e.target.value
    setDirectBidPrice(currency === 'US' ? bidPrice * 30 : bidPrice)
  }

  // 直購
  const directBuy = () => {
    if (!userInfo) {
      swal('需登入才能使用競標功能喔').then((value) => {
        console.log(123)
        window.location.href = '/member/signin'
      })
    } else {
      directBidPrice = directBuyPrice

      swal({
        title: '確定要購買嗎？',
        text: '購買後不可任意棄標喔！',
        icon: 'warning',
        buttons: true
      }).then((confirmPurchased) => {
        if (confirmPurchased) {
          swal('感謝您的購買：）', {
            icon: 'success'
          })
        } else {
          swal('再想想也沒關係唷～')
        }
      })

      axios({
        method: 'post',
        url: `http://localhost:3001/product/${props.originPId}`,
        'Content-Type': 'application/json',
        data: {
          isDirectBuy: true,
          directBidPrice: directBidPrice,
          id: props.pId,
          memberId: userInfo.memberId,
          productStatusId: 5
        }
      }).then((res) => console.log(res.data))
    }
  }

  // 下標
  const bidNow = () => {
    if (!userInfo) {
      swal('需登入才能使用競標功能喔').then((value) => {
        console.log(123)
        window.location.href = '/member/signin'
      })
    } else {
      if (
        directBidPrice < directBuyPrice &&
        directBidPrice >= nowBidPrice + bidPriceStep
      ) {
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
            isDirectBuy: false,
            directBidPrice: directBidPrice,
            id: props.pId,
            memberId: userInfo.memberId,
            productStatusId: 4
          }
        }).then((res) => console.log(res.data))
      } else {
        if (directBidPrice >= directBuyPrice) {
          swal({
            title: '確定要以直購價購買嗎？',
            text: '購買後不可任意棄標喔！',
            icon: 'warning',
            buttons: true
          }).then((confirmPurchased) => {
            if (confirmPurchased) {
              // 更改商品頁
              swal('感謝您的購買：）', {
                icon: 'success'
              })
            } else {
              swal('再想想也沒關係唷～')
            }
          })

          axios({
            method: 'post',
            url: `http://localhost:3001/product/${props.originPId}`,
            'Content-Type': 'application/json',
            data: {
              isDirectBuy: true,
              directBidPrice: directBidPrice,
              id: props.pId,
              memberId: userInfo.memberId,
              productStatusId: 5
            }
          }).then((res) => console.log(res.data))
        }
      }
    }
  }

  // 省下多少錢
  // 新增幣別切換 20200511 weiyy

  const saveMoney = () => {
    const priceDiff = directBuyPrice - nowBidPrice
    return priceDiff <= 5000
      ? `${parseFloat(((1 - nowBidPrice / directBuyPrice) * 100).toFixed(2))}%`
      : `${directBuyPrice - nowBidPrice}元`
  }

  const classes = useStyles()

  return (
    <Container className={classes.bidFuncWrapper}>
      <Typography variant="h4" color="primary" onChange={handleNowPriceChange}>
        {/* 新增幣別切換 20200511 weiyy */}
        目前出價：{currency === 'US' ? 'USD$' : 'NTD$'}{' '}
        {currency === 'US' ? Math.floor(nowBidPrice / 30) : nowBidPrice}元
      </Typography>
      <Typography variant="h4" color="primary">
        出價次數：{bidTimes}次
      </Typography>
      <Typography variant="h4" color="primary">
        出價增額：{currency === 'US' ? 'USD$' : 'NTD$'}{' '}
        {currency === 'US' ? Math.floor(bidPriceStep / 30) : bidPriceStep}元
      </Typography>
      <br />
      <hr />
      <br />
      <div className={classes.directBuyGroup}>
        <Typography
          variant="h5"
          color="secondary"
          className={classes.directBuy}
        >
          {currency === 'US' ? 'USD$' : 'NTD$'}{' '}
          {currency === 'US' ? Math.floor(directBuyPrice / 30) : directBuyPrice}
          元{' '}
        </Typography>
        <Button
          className={classes.buy}
          onClick={() => {
            directBuy()
            setBidState(bidState + 1)
          }}
          variant="outlined"
          color="secondary"
        >
          <IconButton color="secondary" size="small">
            <PaymentIcon />
          </IconButton>
          直接購買
        </Button>
      </div>
      <br />
      <FormControl component="fieldset" className={classes.bidFuncGroup}>
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
            type="number"
            onChange={handleDirectBidPriceChange}
            min={
              currency === 'US'
                ? Math.floor((nowBidPrice + bidPriceStep) / 30)
                : nowBidPrice + bidPriceStep
            }
            max={
              currency === 'US'
                ? Math.floor(directBuyPrice / 30)
                : directBuyPrice
            }
            step={
              currency === 'US' ? Math.floor(bidPriceStep / 30) : bidPriceStep
            }
            // 修改競標預設值 20200511 weiyy
            defaultValue={
              currency === 'US'
                ? Math.floor((nowBidPrice + bidPriceStep) / 30)
                : nowBidPrice + bidPriceStep
            }
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
          variant="contained"
          color="primary"
          disableElevation
          disabled={isBidDisable}
        >
          直接出價
        </Button>
        <Typography variant="h4" color="primary" className={classes.save}>
          已省下 {currency === 'US' ? 'USD$' : 'NTD$'}
          {currency === 'US'
            ? Math.floor(parseInt(saveMoney()) / 30)
            : saveMoney()}
        </Typography>
      </div>
    </Container>
  )
}

export default BidFunc

// /////////////////////// with autobid /////////////////////////////////
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
