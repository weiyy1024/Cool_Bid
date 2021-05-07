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

function SoldOut() {
  const classes = useStyles()
  // const [list, setList] = useState(
  const list = [
    {
      id: 1,
      pic: 'null',
      name: 'coolBid1',
      kind: '手錶',
      bid: 1000,
      basic: 2000,
      per: 100,
      direct: 9000,
      winTheBidTime: '2021-05-27T10:30',
      status: '已售出'
    },
    {
      id: 2,
      pic: 'null',
      name: 'coolBid2',
      kind: '包包',
      bid: 1010,
      basic: 2020,
      per: 200,
      direct: 12000,
      winTheBidTime: '2021-05-22T10:30',
      status: '已售出'
    }
  ]

  return (
    <div className="Table_wrap" id='SoldOutId'>
      <TableContainer className="Table_container">
        <Table>
          <TableHead>
            <TableRow>
              {/* 遞減排序功能 */}
              <TableCell align="center" className={classes.itemTitle}>圖片</TableCell>
              <TableCell align="center" className={classes.itemTitle}>項目</TableCell>
              <TableCell align="center" className={classes.itemTitle}>類別</TableCell>
              <TableCell align="center" className={classes.itemTitle} >競標</TableCell>
              <TableCell align="center" className={classes.itemTitle}>起標</TableCell>
              <TableCell align="center" className={classes.itemTitle}>出價</TableCell>
              <TableCell align="center" className={classes.itemTitle}>直購</TableCell>
              <TableCell align="center" className={classes.itemTitle}>得標</TableCell>
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
                  <TableCell align="center" className={classes.itemTxt}>{item.basic}</TableCell>
                  <TableCell align="center" className={classes.itemTxt}>{item.per}</TableCell>
                  <TableCell align="center" className={classes.itemTxt}>{item.direct}</TableCell>
                  <TableCell align="center" className={classes.itemTxt}>{item.winTheBidTime}</TableCell>
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

export default SoldOut
