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
  Paper,
  Button
} from '@material-ui/core'

import useStyles from '../../../styles/bidPageStyle'

import BidFunc from './bidFunc' // bidding function

const handleClick = () => {}

const BidPage = () => {
  const classes = useStyles()

  return (
    <>
      <Container className={classes.root}>
        <Breadcrumbs aria-label='breadcrumb'>
          <Link color='inherit' href='/bidding' onClick={handleClick}>
            Home Page
          </Link>
          <Link color='inherit' href='/bidding/category' onClick={handleClick}>
            Bags
          </Link>
          <Link
            color='textPrimary'
            href='/bidding/category/product'
            onClick={handleClick}
            aria-current='page'
          >
            Supreme x Louis Vuitton Christopher Backpack
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
                  image='https://www.supremetw.com.tw/goods/images/supreme-backpack/20180516/9f677276a14605b81ba77ceb40676368.jpg'
                />
              </div>
              <div className={classes.smallMediaWrapper}>
                <CardMedia
                  className={classes.smallMedia}
                  image='https://www.supremetw.com.tw/goods/images/supreme-backpack/20180516/9f677276a14605b81ba77ceb40676368.jpg'
                />
                <CardMedia
                  className={classes.smallMedia}
                  image='https://www.supremetw.com.tw/goods/images/supreme-backpack/20180516/f838499cabb02f038c3ca1a92b24c1fe.jpg'
                />
                <CardMedia
                  className={classes.smallMedia}
                  image='https://www.supremetw.com.tw/goods/images/supreme-backpack/20180516/f838499cabb02f038c3ca1a92b24c1fe.jpg'
                />
                <CardMedia
                  className={classes.smallMedia}
                  image='https://www.supremetw.com.tw/goods/images/supreme-backpack/20180516/49744594c9f4a427321924705497bd66.jpg'
                />
              </div>
            </CardActionArea>
          </Card>
          <div className={classes.productInfoWrapper}>
            <Typography variant='h2' className={classes.productTitle}>
              Supreme x Louis Vuitton <br />
              Christopher Backpack
            </Typography>
            <Typography variant='h4' className={classes.productInfo}>
              剩下 6天6小時 結束
            </Typography>
            <Typography variant='h4' className={classes.productInfo}>
              最高出價：Len
            </Typography>
            <Typography variant='h4' className={classes.productInfo}>
              商品狀況：九成新
            </Typography>
            <Typography variant='h4' className={classes.productInfo}>
              商品顏色：紅色
            </Typography>
            <Typography variant='h4' className={classes.productInfo}>
              運送方式：宅配 店到店
            </Typography>
            <Typography variant='h4' className={classes.productInfo}>
              付款方式：信用卡
            </Typography>
            <Typography variant='h4' className={classes.productInfo}>
              退貨方式：不接受退貨
            </Typography>
          </div>
          <Card className={classes.productBidWrapper}>
            <BidFunc />
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
                  LEN 的商店
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
                金槌賣家
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
            <Link href='#' className={classes.infoAndHistoryLink}>
              商品資訊
            </Link>
            <Link href='./history' className={classes.infoAndHistoryLink}>
              出價紀錄
            </Link>
          </Typography>
          <Typography paragraph='true' className={classes.productDetail}>
            The Louis Vuitton x Supreme Christopher backpack in red is a
            structured bag dripping in style. It comes with adjustable leather
            shoulder straps, a leather top handle, flap opening, press stud and
            drawstring closure as well as several pockets inside. It’s also made
            of durable Epi leather, which debuted as Louis Vuitton’s first
            permanent leather collection in 1985 and goes through a special
            dying process which adds to the vibrancy of the color. Supreme
            collaboration with Louis Vuitton has been highly anticipated and
            combines the legacy of the LV brand with Supreme unique style of
            cool. Their collaboration, which features a wide array of leather
            goods, debuted at Louis Vuitton’s Fall 2017 menswear show in Paris.
            The Christopher backpack conjures up the rugged spirit of a hiking
            pack according to Louis Vuitton. This much coveted Louis Vuitton x
            Supreme Christopher backpack features a white Supreme logo in Futura
            Heavy Oblique font and has an interior big enough to fit a variety
            of items.
          </Typography>
        </Card>
      </Container>
    </>
  )
}

export default BidPage
