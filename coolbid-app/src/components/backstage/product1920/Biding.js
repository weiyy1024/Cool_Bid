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

function BidingList() {
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
    <div className="Table_wrap">
      <ProductTabs />
      <TableContainer className="Table_container">
        <Table>
          <TableHead>
            <TableRow>
              {/* 遞減排序功能 */}
              <TableCell align="center">圖片</TableCell>
              <TableCell align="center">項目</TableCell>
              <TableCell align="center">類別</TableCell>
              <TableCell align="center">競標</TableCell>
              <TableCell align="center">截標</TableCell>
              <TableCell align="center">狀態</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {list.map((item) => {
              return (
                <TableRow key={item.id}>
                  <TableCell align="center">{item.pic}</TableCell>
                  <TableCell align="center">{item.name}</TableCell>
                  <TableCell align="center">{item.kind}</TableCell>
                  <TableCell align="center">{item.bid}</TableCell>
                  <TableCell align="center">{item.deliveryTime}</TableCell>
                  <TableCell align="center">{item.status}</TableCell>
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
