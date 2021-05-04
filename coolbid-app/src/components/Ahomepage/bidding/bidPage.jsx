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
            <Typography variant='h2' className={classes.productTitle}>
              *Women Adidas Training 3
            </Typography>
            <Typography variant='h4' className={classes.productInfo}>
              剩下 *6天6小時 結束
            </Typography>
            <Typography variant='h4' className={classes.productInfo}>
              最高出價：*LEN
            </Typography>
            <Typography variant='h4' className={classes.productInfo}>
              商品狀況：*九成新
            </Typography>
            <Typography variant='h4' className={classes.productInfo}>
              商品顏色：*黃色
            </Typography>
            <Typography variant='h4' className={classes.productInfo}>
              運送方式：*宅配 店到店
            </Typography>
            <Typography variant='h4' className={classes.productInfo}>
              付款方式：*信用卡
            </Typography>
            <Typography variant='h4' className={classes.productInfo}>
              退貨方式：*不接受退貨
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
                  *LEN 的商店
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
                *棒槌賣家
              </Typography>
              <Typography variant='h4' className={classes.storeInfo}>
                粉絲：*999
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
              買家評價(*1234)
            </Button>
            <Button
              variant='contained'
              color='primary'
              className={classes.storeButton}
            >
              所有商品(*87)
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
            <Link
              href='#'
              className={classes.infoAndHistoryLink}
            >
              出價紀錄
            </Link>
          </Typography>
          <Typography paragraph='true' className={classes.productDetail}>
            *生活中，若貓出現了，我們就不得不考慮它出現了的事實。每個人的一生中，幾乎可說碰到貓這件事，是必然會發生的。面對如此難題，我們必須設想周全。就我個人來說，貓對我的意義，不能不說非常重大。儘管貓看似不顯眼，卻佔據了我的腦海。我們可以很篤定的說，這需要花很多時間來嚴謹地論證。顯克微支曾經說過，誰能從道德敗壞的地方脫出來，還保持潔白，便是有了最偉大的功德。這讓我的思緒清晰了。在這種不可避免的衝突下，我們必須解決這個問題。探討貓時，如果發現非常複雜，那麼想必不簡單。
          </Typography>
        </Card>
      </Container>
    </>
  )
}

export default BidPage
