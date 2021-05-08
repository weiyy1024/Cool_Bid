import React, { useState, useEffect } from 'react'
import axios from 'axios'

import {
  Container,
  Breadcrumbs,
  Link,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Grid,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core'

import useStyles from '../../../styles/bidPageStyle'

import BidFunc from './bidFunc'

const BidPage = props => {
  const classes = useStyles()

  // const userInfo = JSON.parse(window.sessionStorage.getItem('userinfo'))

  let [toggle, setToggle] = useState(true)
  const [product, setProduct] = useState([])
  const [bidState, setBidState] = useState(0)
  const handleBidState = () => {
    setBidState(bidState + 1)
  }

  let pId = props.data.params.product_id
  pId = window.location.search
  pId = pId.substr(2)

  useEffect(() => {
    axios({
      method: 'get',
      baseURL: 'http://localhost:3001',
      url: `/product/${pId}`,
      'Content-Type': 'application/json'
    }).then(res => setProduct(res.data))
  }, [bidState])

  const rows = product.length === 0 ? [] : product[1]

  const handleToggleInfo = () => {
    setToggle((toggle = true))
  }

  const handleToggleHistory = () => {
    setToggle((toggle = false))
  }

  const dateObject = Date.parse(product.length === 0 ? '' : product[0][0].endTime)

  function getDuration (ms) {
    const days = ms / 1000 / 60 / 60 / 24
    const hours = ms / 1000 / 60 / 60 - (24 * Math.floor(days))
    const minutes = ms / 1000 / 60 - (24 * 60 * Math.floor(days)) - (60 * Math.floor(hours))
    const seconds = ms / 1000 - (24 * 60 * 60 * Math.floor(days)) - (60 * 60 * Math.floor(hours)) - (60 * Math.floor(minutes))

    return (`${Math.floor(days)}天 ${Math.floor(hours)}時 ${Math.floor(minutes)}分 ${Math.floor(seconds)}秒`)
  }

  const nowBidPrice = product.length === 0 ? '' : product[0][0].nowPrice

  return (
    <>
      <Container className={classes.root}>
        <Breadcrumbs aria-label='breadcrumb'>
          <Link color='inherit' href='../'>
            Home Page
          </Link>
          <Link color='inherit' href='../bag'>
            {product.length === 0 ? '' : product[0][0].categoryName}
          </Link>
          <Link
            color='textPrimary'
            href='/bidding/category/product'
            aria-current='page'
          >
            {product.length === 0 ? '' : product[0][0].productName}
          </Link>
        </Breadcrumbs>
        <Grid
          className={classes.productWrapper}
          container='true'
          direction='row'
        >
          <Card className={classes.productImageWrapper}>
            <CardActionArea>
              <div className={classes.mainMediaWrapper}>
                <CardMedia
                  className={classes.mainMedia}
                  image={`/imgs/${pId}.jpg`}
                />
              </div>
            </CardActionArea>
          </Card>
          <div className={classes.productInfoWrapper}>
            <Typography variant='h2' className={classes.productTitle}>
              {product.length === 0 ? '' : product[0][0].productName}
            </Typography>
            <Typography variant='h4' className={classes.productInfo}>
              剩下 {getDuration(dateObject - Date.now())} 結束
            </Typography>
            <Typography variant='h4' className={classes.productInfo}>
              最高出價：{product.length === 0 ? '' : product[1][0].nickname} ({product.length === 0 ? '' : product[1][0].userId})
            </Typography>
            <Typography variant='h4' className={classes.productInfo}>
              商品品牌：{product.length === 0 ? '' : product[0][0].brandName}
            </Typography>
            <Typography variant='h4' className={classes.productInfo}>
              商品樣式：***男包 後背包***
            </Typography>
            <Typography variant='h4' className={classes.productInfo}>
              商品顏色：{product.length === 0 ? '' : product[0][0].categoryDetailDescription}
            </Typography>
            <Typography variant='h4' className={classes.productInfo}>
              商品狀況：{product.length === 0 ? '' : product[0][0].productConditionDescription}
            </Typography>
            <Typography variant='h4' className={classes.productInfo}>
              付款方式：信用卡
            </Typography>
          </div>
          <Card className={classes.productBidWrapper}>
            <BidFunc
              pId={pId}
              originPId={props.data.params.product_id}
              setBidState={handleBidState}
              bidTimes = {rows.length}
              nowBidPrice = {nowBidPrice}
            />
          </Card>
        </Grid>
        <Card component={Paper}>
          <Grid
            container='true'
            direction='row'
            justify='space-around'
            className={classes.store}
          >
            <img
              className={classes.storeMedia}
              src='https://crazypetter.com.tw/wp-content/uploads/2019/07/BLOW-%E6%88%90%E9%95%B7%E5%8F%B2_190413_0911.jpg'
            />
            <div className={classes.storeInfo}>
              <div className={classes.storeNameGroup}>
                <Typography variant='h3' className={classes.storeName}>
                  {product.length === 0 ? '' : product[0][0].shopDescription}
                </Typography>
                <Button
                  variant='outlined'
                  color='primary'
                  className={classes.follow}
                >
                  Follow
                </Button>
              </div>
              <Typography variant='h4' className={classes.storeInfo}>
                {product.length === 0 ? '' : product[0][0].shopLevelDescription}
              </Typography>
              <Typography variant='h4' className={classes.storeInfo}>
                粉絲：666
              </Typography>
            </div>
            <Button
              variant='contained'
              color='primary'
              className={classes.storeButton}
            >
              關於我
            </Button>
            <Button
              variant='contained'
              color='primary'
              className={classes.storeButton}
            >
              買家評價(3856)
            </Button>
            <Button
              variant='contained'
              color='primary'
              className={classes.storeButton}
            >
              所有商品(287)
            </Button>
          </Grid>
          <Typography
            container='true'
            direction='row'
            className={classes.infoAndHistory}
          >
            <Link
              className={classes.infoAndHistoryLink}
              onClick={handleToggleInfo}
            >
              商品資訊
            </Link>
            <Link
              className={classes.infoAndHistoryLink}
              onClick={handleToggleHistory}
            >
              出價紀錄
            </Link>
          </Typography>
          <Typography
            paragraph='true'
            className={classes.productDetail}
            style={toggle ? { display: 'block' } : { display: 'none' }}
          >
          {product.length === 0 ? '' : product[0][0].productDescription}
          </Typography>
          <TableContainer
            style={toggle ? { display: 'none' } : { display: 'block' }}
            component={Paper}
            className={classes.table}
          >
            <Table aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.th}>出價者</TableCell>
                  <TableCell className={classes.th}>ID</TableCell>
                  <TableCell className={classes.th}>出價金額</TableCell>
                  <TableCell className={classes.th}>出價時間</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.biddingHistoryId}>
                    <TableCell component='th' scope='row'>
                      {row.nickname}
                    </TableCell>
                    <TableCell>{row.userId}</TableCell>
                    <TableCell>{row.bidprice}</TableCell>
                    <TableCell>{row.bidTime}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Container>
    </>
  )
}

export default BidPage
