/* eslint-disable space-before-function-paren */
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
import '../../SASS/list.scss'
import '../../SASS/Components.scss'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

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

function CloseAuction() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([])
  const classes = useStyles()
  const [bidPrice, setbidPrice] = useState(0)

  useEffect(() => {
    console.log('hi')
    axios({
      method: 'get',
      baseURL: 'http://localhost:3001',
      url: '/BackStage/product/closeAuction',
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

  return (
    <div className="sellerBackend_Member_Wrap">
      <div className="sellerBackend_Member_Container">
        <div className="backendLeft">
          <SellerBackendList />
        </div>
        <div className="backendRight">
          <div className="backendRightContainer">
            <div className="breadcrumbsArea">
              賣家專區/商品清單/已結標
              {/* <Breadcrumbs /> */}
            </div>
            <div id="CloseAuctionId">
              <div>
                <ProductTabs />
              </div>
              <TableContainer className="Table_container">
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell align="center" className={classes.itemTitle}>
                        圖片
                      </TableCell>
                      <TableCell align="center" className={classes.itemTitle}>
                        項目
                      </TableCell>
                      <TableCell align="center" className={classes.itemTitle}>
                        類別
                      </TableCell>
                      <TableCell align="center" className={classes.itemTitle}>
                        買家
                      </TableCell>
                      <TableCell
                        align="center"
                        className={classes.itemTitle}
                        onClick={changebidPrice}
                        style={{ cursor: 'pointer' }}
                      >
                        競標
                        <UnfoldMoreIcon />
                      </TableCell>
                      <TableCell
                        align="center"
                        className={classes.itemTitle}
                        style={{ cursor: 'pointer' }}
                      >
                        結標
                      </TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {data.map((item, index) => {
                      return (
                        <TableRow key={index}>
                          <TableCell align="center" className={classes.itemTxt}>
                            <img
                              src={'/imgs/' + item.productId + '.jpg'}
                              className={classes.imgStyle}
                            />
                          </TableCell>
                          <TableCell align="center" className={classes.itemTxt}>
                          <Link className='linkStyle' to={'/bidding/product/product?=' + item.productId}>{item.productName}</Link>
                          </TableCell>
                          <TableCell align="center" className={classes.itemTxt}>
                            {item.categoryName}
                          </TableCell>
                          <TableCell align="center" className={classes.itemTxt}>
                            {item.userId}
                          </TableCell>
                          <TableCell align="center" className={classes.itemTxt}>
                            {item.nowPrice}
                          </TableCell>
                          <TableCell align="center" className={classes.itemTxt}>
                          {item.endTime.substr(0, 10)}
                          </TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CloseAuction
