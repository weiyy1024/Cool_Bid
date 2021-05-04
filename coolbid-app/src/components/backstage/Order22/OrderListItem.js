/* eslint-disable space-before-function-paren */
import React from 'react'
import Table from '@material-ui/core/Table'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import '../../SASS/list.scss'
import '../../SASS/Components.scss'

function OrderListItem(props) {
  const { detail } = props

  function handleClickShip(e) {
    e.preventDefault()
    alert('出貨')
  }
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={4}>
              買家:{detail.buyer} <FontAwesomeIcon icon={faCommentDots} />
            </TableCell>
            <TableCell>訂單編號:{detail.orderId}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">圖片</TableCell>
            <TableCell align="center">項目</TableCell>
            <TableCell align="center">日期</TableCell>
            <TableCell align="center">預計出貨時間</TableCell>
            <TableCell align="center">價錢</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {detail.product.map((list, index) => {
            return (
              <TableRow key={index}>
                <TableCell align="center">null</TableCell>
                <TableCell align="center">{list.name}</TableCell>
                <TableCell align="center">{list.orderData}</TableCell>
                <TableCell align="center">{list.deliveryTime}</TableCell>
                <TableCell align="center">{list.price}</TableCell>
              </TableRow>
            )
          })}

          <TableRow>
            <TableCell colSpan={4}>狀態:</TableCell>
            <TableCell align="center">總計:NT7,000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={5}>
              <input
                type="submit"
                value="出貨"
                className="button SetStoreInfo_Submit"
                onClick={handleClickShip}
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}
export default OrderListItem
