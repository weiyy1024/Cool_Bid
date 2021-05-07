/* eslint-disable space-before-function-paren */
import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
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
  }
}))

function BidingList() {
  const classes = useStyles()
  // const [list, setList] = useState(
  const list = [
    {
      id: 1,
      pic: 'null',
      name: 'coolBid1',
      kind: '手錶',
      bid: 1000,
      deliveryTime: '2021-05-27T10:30',
      status: '競標中'
    },
    {
      id: 2,
      pic: 'null',
      name: 'coolBid1',
      kind: '包包',
      bid: 2000,
      deliveryTime: '2021-05-27T10:30',
      status: '競標中'
    }
  ]

  return (
    <div className="Table_wrap" id='BidingId'>
      <TableContainer className="Table_container">
        <Table>
          <TableHead>
            <TableRow>
              {/* 遞減排序功能 */}
              <TableCell align="center" className={classes.itemTitle}>圖片</TableCell>
              <TableCell align="center" className={classes.itemTitle}>項目</TableCell>
              <TableCell align="center" className={classes.itemTitle}>類別</TableCell>
              <TableCell align="center" className={classes.itemTitle}>競標</TableCell>
              <TableCell align="center" className={classes.itemTitle}>截標</TableCell>
              <TableCell align="center" className={classes.itemTitle}>狀態</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {list.map((item) => {
              return (
                <TableRow key={item.id}>
                  <TableCell align="center" className={classes.itemTxt}>{item.pic}</TableCell>
                  <TableCell align="center" className={classes.itemTxt}>{item.name}</TableCell>
                  <TableCell align="center" className={classes.itemTxt}>{item.kind}</TableCell>
                  <TableCell align="center" className={classes.itemTxt}>{item.bid}</TableCell>
                  <TableCell align="center" className={classes.itemTxt}>{item.deliveryTime}</TableCell>
                  <TableCell align="center" className={classes.itemTxt}>{item.status}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default BidingList
