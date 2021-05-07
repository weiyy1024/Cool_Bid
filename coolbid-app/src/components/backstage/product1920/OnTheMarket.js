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

export default function OnTheMarket() {
  const classes = useStyles()
  const list = [
    {
      id: 1,
      pic: 'null',
      name: 'coolAdidas',
      kind: '手錶',
      bid: 1000,
      basic: 2000,
      per: 100,
      direct: 9000,
      deadline: '2021-05-27T10:30',
      status: '未出貨'
    }
  ]

  return (
    <div className="Table_wrap" id='OnTheMarketId'>
      <TableContainer className="Table_container">
        <Table>
          <TableHead>
            <TableRow>
              {/* 遞減排序功能,截標倒數計時 */}
              <TableCell align="center" className={classes.itemTitle}>圖片</TableCell>
              <TableCell align="center" className={classes.itemTitle}>項目</TableCell>
              <TableCell align="center" className={classes.itemTitle}>類別</TableCell>
              <TableCell align="center" className={classes.itemTitle}>競標</TableCell>
              <TableCell align="center" className={classes.itemTitle}>起標</TableCell>
              <TableCell align="center" className={classes.itemTitle}>出價</TableCell>
              <TableCell align="center" className={classes.itemTitle}>直購</TableCell>
              <TableCell align="center" className={classes.itemTitle}>截標</TableCell>
              <TableCell align="center" className={classes.itemTitle}>狀態</TableCell>
              <TableCell align="center" className={classes.itemTitle}>操作</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {list.map((item) => {
              return (
                <TableRow key={item.id}>
                <TableCell align="center" className={classes.itemTxt}>{item.pic}</TableCell>
                <TableCell align="center" className={classes.itemTxt}>{item.name}</TableCell>
                <TableCell align="center" className={classes.itemTxt}>{item.kind}</TableCell>
                <TableCell align="center" className={classes.itemTxt}>{item.basic}</TableCell>
                <TableCell align="center" className={classes.itemTxt}>{item.per}</TableCell>
                <TableCell align="center" className={classes.itemTxt}>{item.direct}</TableCell>
                <TableCell align="center" className={classes.itemTxt}>{item.deadline}</TableCell>
                <TableCell align="center" className={classes.itemTxt}>{item.status}</TableCell>
                <TableCell align="center" colSpan={2}>
                  <input
                  type="submit"
                  value="編輯"
                  className="button SetStoreInfo_Submit"/>
                  <br/>
                  <input
                    type="submit"
                    value="刪除"
                    className="button SetStoreInfo_Submit"
                    id={item.id}
                  />
                </TableCell>
              </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
