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

function SoldOut() {
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
              <TableCell align="center">起標</TableCell>
              <TableCell align="center">出價</TableCell>
              <TableCell align="center">直購</TableCell>
              <TableCell align="center">得標</TableCell>
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
                  <TableCell align="center">{item.basic}</TableCell>
                  <TableCell align="center">{item.per}</TableCell>
                  <TableCell align="center">{item.direct}</TableCell>
                  <TableCell align="center">{item.winTheBidTime}</TableCell>
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

export default SoldOut
