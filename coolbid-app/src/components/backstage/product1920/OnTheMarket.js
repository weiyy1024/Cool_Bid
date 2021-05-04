/* eslint-disable space-before-function-paren */
import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import ProductTabs from './ProductTabs'
import '../../SASS/list.scss'
import '../../SASS/Components.scss'

function Date(id, pic, name, kind, bid, basic, per, direct, deadline, status) {
  return { id, pic, name, kind, bid, basic, per, direct, deadline, status }
}

const rows = [
  Date(
    1,
    'null',
    'coolAdidas',
    '衣服',
    1000,
    1000,
    200,
    5000,
    '2021/05/20 15:00',
    '未出貨'
  ),
  Date(
    2,
    'null',
    'coolAdidas',
    '衣服',
    1000,
    1000,
    200,
    5000,
    '2021/05/20 15:00',
    '未出貨'
  ),
  Date(
    3,
    'null',
    'coolAdidas',
    '衣服',
    1000,
    1000,
    200,
    5000,
    '2021/05/20 15:00',
    '未出貨'
  )
]

function handleClick(e) {
  alert(e.target.id)
}

export default function OnTheMarket() {
  return (
    <div className="Table_wrap">
      <ProductTabs />
      <TableContainer className="Table_container">
        <Table>
          <TableHead>
            <TableRow>
              {/* 遞減排序功能,截標倒數計時 */}
              <TableCell align="center">圖片</TableCell>
              <TableCell align="center">項目</TableCell>
              <TableCell align="center">類別</TableCell>
              <TableCell align="center">競標</TableCell>
              <TableCell align="center">起標</TableCell>
              <TableCell align="center">出價</TableCell>
              <TableCell align="center">直購</TableCell>
              <TableCell align="center">截標</TableCell>
              <TableCell align="center">狀態</TableCell>
              <TableCell align="center">操作</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} id={row.id}>
                <TableCell align="center">{row.pic}</TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.kind}</TableCell>
                <TableCell align="center">{row.bid}</TableCell>
                <TableCell align="center">{row.basic}</TableCell>
                <TableCell align="center">{row.per}</TableCell>
                <TableCell align="center">{row.direct}</TableCell>
                <TableCell align="center">{row.deadline}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
                <TableCell align="center">
                  {/* <input type="submit" value="編輯" class="button SetStoreInfo_Submit" onClick={handleClickEdit}/> */}
                  <input
                    type="submit"
                    value="刪除"
                    className="button SetStoreInfo_Submit"
                    id={row.id}
                    onClick={handleClick}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
