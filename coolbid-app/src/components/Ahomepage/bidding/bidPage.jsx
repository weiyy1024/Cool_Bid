import React from 'react'

import {
  Container,
  Breadcrumbs,
  Link,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core'

import useStyles from '../../../styles/BidPageStyle'

import PrimarySearchAppBar from '../../../utils/AppBar'

import BidFunc from './bidFunc' // bidding function

const handleClick = () => {}

const createData = (name, ID, bid, time) => {
  return { name, ID, bid, time }
}

const rows = [
  createData('叛逆a維婷', 'WEIYYY', '30,000元', '2021/04/02 15:03')
]

const BidPage = () => {
  const classes = useStyles()

  return (
    <>
      <header>{PrimarySearchAppBar()}</header>
      <Container className={classes.root}>
        <Breadcrumbs aria-label='breadcrumb'>
          <Link color='inherit' href='/bidding' onClick={handleClick}>
            Home Page
          </Link>
          <Link color='inherit' href='/bidding/category' onClick={handleClick}>
            *Shoes
          </Link>
          <Link
            color='textPrimary'
            href='/bidding/category/product'
            onClick={handleClick}
            aria-current='page'
          >
            *Jordan 4 Retro University Blue
          </Link>
        </Breadcrumbs>
        <Grid className={classes.productWrapper} container='true' direction='row'>
          <Card className={classes.productImageWrapper}>
            <CardActionArea>
              <div className={classes.mainMediaWrapper}>
                <CardMedia
                  className={classes.mainMedia}
                  image='https://crazypetter.com.tw/wp-content/uploads/2019/07/BLOW-%E6%88%90%E9%95%B7%E5%8F%B2_190413_0911.jpg'
                />
              </div>
              <div className={classes.smallMediaWrapper}>
                <CardMedia
                  className={classes.smallMedia}
                  image='https://d32kak7w9u5ewj.cloudfront.net/media/image/2019/05/7d6f16273425458b9c024e39c6a8d257.jpg'
                />
                <CardMedia
                  className={classes.smallMedia}
                  image='https://images.newtalk.tw/resize_action2/600/album/news/450/5f320cead54d0.jpg'
                />
                <CardMedia
                  className={classes.smallMedia}
                  image='https://image6.thenewslens.com/2020/9/rxmmtnksz4gossrgu7x12zyu012635.jpg?auto=compress&fit=crop&h=648&q=85&updated_at=2020-09-04-15-31-06&w=1080'
                />
                <CardMedia
                  className={classes.smallMedia}
                  image='https://d20aeo683mqd6t.cloudfront.net/zh-hant/articles/title_images/000/040/396/original/pixta_58825456_M.jpg?2020&d=750x400'
                />
              </div>
            </CardActionArea>
          </Card>
          <div className={classes.productInfoWrapper}>
            <Typography variant='h2'>*Women Adidas Training 3</Typography>
            <Typography variant='h4'>剩下 *6天6小時 結束</Typography>
            <Typography variant='h4'>
              目前出價：*30,000元 / 共出價 *6 次
            </Typography>
            <Typography variant='h4'>出價增額：*300元</Typography>
            <Typography variant='h4'>最高出價：*LEN</Typography>
            <Typography variant='h4'>商品狀況：*九成新</Typography>
            <Typography variant='h4'>商品顏色：*黃色</Typography>
            <Typography variant='h4'>運送方式</Typography>
            <Typography variant='h4'>付款方式</Typography>
            <Typography variant='h4'>退貨方式</Typography>
          </div>
          <Card className={classes.productBidWrapper}>
            <BidFunc />
          </Card>
        </Grid>
        <Card component={Paper}>
          <Grid container='true' direction='row' justify='space-around'>
            <img
              className={classes.storeMedia}
              src='https://crazypetter.com.tw/wp-content/uploads/2019/07/BLOW-%E6%88%90%E9%95%B7%E5%8F%B2_190413_0911.jpg'
            />
            <div className={classes.storeInfo}>
              <Typography variant='h3'>
                *LEN的商店
                <span>
                  <Link>Follow</Link>
                </span>
              </Typography>
              <Typography variant='h5'>*棒槌賣家</Typography>
              <Typography variant='h5'>粉絲：*999</Typography>
            </div>
            <div>
              <Link>關於我</Link>
            </div>
            <div>
              <Link>買家評價(*1234)</Link>
            </div>
            <div>
              <Link>所有商品(*87)</Link>
            </div>
          </Grid>
          <Grid container='true' direction='row'>
            <Link>商品資訊</Link>
            <Link
              href='/bidding/category/product/biddingHistory'
              aria-current='page'
            >
              出價紀錄
            </Link>
          </Grid>
          <div>*商品介紹</div>
        </Card>
        <br />
        <Card>
          <Grid container='true' direction='row' justify='space-around'>
            <img
              className={classes.storeMedia}
              src='https://crazypetter.com.tw/wp-content/uploads/2019/07/BLOW-%E6%88%90%E9%95%B7%E5%8F%B2_190413_0911.jpg'
            />
            <div className={classes.storeInfo}>
              <Typography variant='h3'>
                *LEN的商店
                <span>
                  <Link>Follow</Link>
                </span>
              </Typography>
              <Typography variant='h5'>*棒槌賣家</Typography>
              <Typography variant='h5'>粉絲：*999</Typography>
            </div>
            <div>
              <Link>關於我</Link>
            </div>
            <div>
              <Link>買家評價(*1234)</Link>
            </div>
            <div>
              <Link>所有商品(*87)</Link>
            </div>
          </Grid>
          <Grid container='true' direction='row'>
            <Link>商品資訊</Link>
            <Link
              href='/bidding/category/product/biddingHistory'
              aria-current='page'
            >
              出價紀錄
            </Link>
          </Grid>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>出價者</TableCell>
                  <TableCell>ID</TableCell>
                  <TableCell>出價金額</TableCell>
                  <TableCell>出價時間</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.name}>
                    <TableCell component='th' scope='row'>
                      {row.name}
                    </TableCell>
                    <TableCell>{row.ID}</TableCell>
                    <TableCell>{row.bid}</TableCell>
                    <TableCell>{row.time}</TableCell>
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
