import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import ProductTabs from '../product1920/ProductTabs'
// import Breadcrumbs from '../Main/Breadcrumbs'
import SellerBackendList from '../Main/SellerBackendList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsAltV } from '@fortawesome/free-solid-svg-icons'
import { makeStyles } from '@material-ui/core/styles'
import '../../SASS/list.scss'
import '../../SASS/Components.scss'

const useStyles = makeStyles((theme) => ({
  itemTitle: {
    fontSize: 20
  },
  itemTxt: {
    fontSize: 16
  },
  tableStyle: {
    marginTop: 50,
    border: 'double',
    borderColor: 'grey'
  },
  imgStyle: {
    width: 80
  }
}))

function productpage () {
  const classes = useStyles()
  const [data, setData] = useState([])
  const [startPrice, setstartPrice] = useState(0)
  const [perPrice, setPerPrice] = useState(0)
  const [directPrice, setdirectPrice] = useState(0)
  const [bidPrice, setbidPrice] = useState(0)

  useEffect(() => {
    console.log('hi')
    axios({
      method: 'get',
      baseURL: 'http://localhost:3001',
      url: '/BackStage/product/all',
      'Content-Type': 'application/json'
    }).then((a) => setData(a.data))
  }, [])

  const changebidPrice = () => {
    if (bidPrice === 0) {
      setbidPrice(1)
    } else {
      setbidPrice(0)
    }
  }

  const changestartPrice = () => {
    if (startPrice === 0) {
      setstartPrice(1)
    } else {
      setstartPrice(0)
    }
  }
  const changePerPrice = () => {
    if (perPrice === 0) {
      setPerPrice(1)
    } else {
      setPerPrice(0)
    }
  }

  const changedirectPrice = () => {
    if (directPrice === 0) {
      setdirectPrice(1)
    } else {
      setdirectPrice(0)
    }
  }

  useEffect(() => {
    if (bidPrice === 0) {
      const bidPriceAfter = data.map((item) => item)
      bidPriceAfter.sort(function (a, b) {
        return a.bidPrice - b.bidPrice
      })
      setData(bidPriceAfter)
    } else {
      const bidPriceAfter = data.map((item) => item)
      bidPriceAfter.sort(function (a, b) {
        return b.bidPrice - a.bidPrice
      })
      setData(bidPriceAfter)
    }
  }, [bidPrice])

  useEffect(() => {
    if (startPrice === 0) {
      const startPriceAfter = data.map((item) => item)
      startPriceAfter.sort(function (a, b) {
        return a.startPrice - b.startPrice
      })
      setData(startPriceAfter)
    } else {
      const startPriceAfter = data.map((item) => item)
      startPriceAfter.sort(function (a, b) {
        return b.startPrice - a.startPrice
      })
      setData(startPriceAfter)
    }
  }, [startPrice])

  useEffect(() => {
    if (perPrice === 0) {
      const perPriceAfter = data.map((item) => item)
      perPriceAfter.sort(function (a, b) {
        return a.perPrice - b.perPrice
      })
      setData(perPriceAfter)
    } else {
      const perPriceAfter = data.map((item) => item)
      perPriceAfter.sort(function (a, b) {
        return b.perPrice - a.perPrice
      })
      setData(perPriceAfter)
    }
  }, [perPrice])

  useEffect(() => {
    if (directPrice === 0) {
      const directPriceAfter = data.map((item) => item)
      directPriceAfter.sort(function (a, b) {
        return a.directPrice - b.directPrice
      })
      setData(directPriceAfter)
    } else {
      const directPriceAfter = data.map((item) => item)
      directPriceAfter.sort(function (a, b) {
        return b.directPrice - a.directPrice
      })
      setData(directPriceAfter)
    }
  }, [directPrice])

  useEffect(() => {}, [directPrice, perPrice, startPrice, bidPrice])

  return (
    <div className="sellerBackend_Member_Wrap">
    <div className="breadcrumbsArea">賣家專區/商品清單
      {/* <Breadcrumbs /> */}
    </div>
    <div className="sellerBackend_Member_Container">
    <div className="List">
        <SellerBackendList />
      </div>
    <div className="Table_wrap" id='SoldOutId'>
    <div>
        <ProductTabs />
        </div>
      <TableContainer className="Table_container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" className={classes.itemTitle}>圖片</TableCell>
              <TableCell align="center" className={classes.itemTitle}>項目</TableCell>
              <TableCell align="center" className={classes.itemTitle}>類別</TableCell>
              <TableCell align="center" className={classes.itemTitle} onClick={changebidPrice} style={{ cursor: 'pointer' }}>
              競標<FontAwesomeIcon icon={faArrowsAltV} /></TableCell>
              <TableCell align="center" className={classes.itemTitle} onClick={changestartPrice} style={{ cursor: 'pointer' }}>
              起標<FontAwesomeIcon icon={faArrowsAltV} />
              </TableCell>
              <TableCell align="center" className={classes.itemTitle} onClick={changePerPrice} style={{ cursor: 'pointer' }}>
              出價<FontAwesomeIcon icon={faArrowsAltV} />
              </TableCell>
              <TableCell align="center" className={classes.itemTitle} onClick={changedirectPrice} style={{ cursor: 'pointer' }}>
                直購<FontAwesomeIcon icon={faArrowsAltV} />
              </TableCell>
              <TableCell align="center" className={classes.itemTitle} style={{ cursor: 'pointer' }}>
                結標
              </TableCell>
              <TableCell align="center" className={classes.itemTitle}>狀態</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
          {data.map((item, index) => {
            return (
                <TableRow key={index}>
                  <TableCell align="center" className={classes.itemTxt}> <img src={'/imgs/' + item.productId + '.jpg'} className={classes.imgStyle}/></TableCell>
                  <TableCell align="center" className={classes.itemTxt}>{item.productName}</TableCell>
                  <TableCell align="center" className={classes.itemTxt}>{item.categoryName}</TableCell>
                  <TableCell align="center" className={classes.itemTxt}>{item.perPrice}</TableCell>
                  <TableCell align="center" className={classes.itemTxt}>{item.startPrice}</TableCell>
                  <TableCell align="center" className={classes.itemTxt}>{item.perPrice}</TableCell>
                  <TableCell align="center" className={classes.itemTxt}>{item.directPrice}</TableCell>
                  <TableCell align="center" className={classes.itemTxt}>{item.endTime}</TableCell>
                  <TableCell align="center" className={classes.itemTxt}>{item.productstatusDescription}</TableCell>
                </TableRow>
            )
          })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </div>
    </div>
  )
}

export default productpage
