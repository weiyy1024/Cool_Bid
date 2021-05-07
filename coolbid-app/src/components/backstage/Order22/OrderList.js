import React, { useState, useEffect } from 'react'
import OrderTabs from './OrderTabs'
import '../../SASS/list.scss'
import '../../SASS/Components.scss'
import Breadcrumbs from '../Main/Breadcrumbs'
import SellerBackendList from '../Main/SellerBackendList'
import axios from 'axios'
import Table from '@material-ui/core/Table'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import { makeStyles } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles((theme) => ({
  itemTitle: {
    fontSize: 20
  },
  itemTxt: {
    fontSize: 16
  }
  // tableStyle: {
  //   marginTop: 50,
  //   border: 'double'
  //   // borderColor: 'grey'
  // }
}))

function OrderList () {
  const [data, setData] = useState([])
  const classes = useStyles()
  useEffect(() => {
    console.log('hi')
    axios({
      method: 'get',
      baseURL: 'http://localhost:3001',
      url: '/BackStage/orders',
      'Content-Type': 'application/json'
    }).then((a) => setData(a.data))
  }, [])

  return (
    <div className="sellerBackend_Member_Wrap">
      <div className="breadcrumbsArea">
        <Breadcrumbs />
      </div>
      <div className="sellerBackend_Member_Container">
        <div className="List">
          <SellerBackendList />
        </div>
        <div className="Table_wrap">
          <OrderTabs />
          <TableContainer className="Table_container">
          <Table className={classes.tableStyle}>
            <>
              {data.map((item, index) => {
                return (
                  <>
                    <TableHead key={index}>
                      <TableRow>
                        <TableCell colSpan={4} className={classes.itemTitle}>
                          買家:{item.userId}
                          <FontAwesomeIcon icon={faCommentDots} />
                        </TableCell>

                        <TableCell className={classes.itemTxt}>
                          訂單編號:{item.orderId}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="center" className={classes.itemTitle}>
                          圖片
                        </TableCell>
                        <TableCell align="center" className={classes.itemTitle}>
                          項目
                        </TableCell>
                        <TableCell align="center" className={classes.itemTitle}>
                          日期
                        </TableCell>
                        <TableCell align="center" className={classes.itemTitle}>
                          預計出貨時間
                        </TableCell>
                        <TableCell align="center" className={classes.itemTitle}>
                          價錢
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell align="center" className={classes.itemTxt}>
                          null
                        </TableCell>
                        <TableCell align="center" className={classes.itemTxt}>
                          {item.productName}
                        </TableCell>
                        <TableCell align="center" className={classes.itemTxt}>
                          {item.orderTime}
                        </TableCell>
                        <TableCell
                          align="center"
                          className={classes.itemTxt}
                        ></TableCell>
                        <TableCell align="center" className={classes.itemTxt}>
                          {item.nowPrice}
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell colSpan={4} className={classes.itemTxt}>
                          狀態:{item.orderStatusSeller}
                        </TableCell>
                        <TableCell align="center" className={classes.itemTxt}>
                          總計:
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell colSpan={5}>
                          <input
                            type="submit"
                            value="出貨"
                            className="button SetStoreInfo_Submit"
                          />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </>
                )
              })}
            </>
          </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  )
}

export default OrderList
