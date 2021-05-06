/* eslint-disable space-before-function-paren */
import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import ProductTabs from './ProductTabs'
import SellerBackendList from '../Main/SellerBackendList'
import Breadcrumbs from '../Main/Breadcrumbs'
import '../../SASS/list.scss'
import '../../SASS/Components.scss'
import '../../SASS/Main.scss'

function CloseAuction() {
  // const [list, setList] = useState(
  const list = [
    {
      id: 1,
      pic: 'null',
      name: 'coolBid1',
      kind: '手錶',
      buyer: 'JON',
      bid: 1000,
      deliveryTime: '2021-05-27T10:30',
      status: '已結標'
    },
    {
      id: 2,
      pic: 'null',
      name: 'coolBid2',
      kind: '包包',
      buyer: 'WEI',
      bid: 1234,
      deliveryTime: '2021-05-29T10:30',
      status: '已結標'
    }
  ]

  return (
    <div className="sellerBackend_Member_Wrap">
      <div className="breadcrumbsArea">
        <Breadcrumbs />
      </div>
      <div className="sellerBackend_Member_Container">
        <div className="List">
          <SellerBackendList />
        </div>
        <div>
          <ProductTabs />
          <TableContainer className="Table_container">
            <Table>
              <TableHead>
                <TableRow>
                  {/* 遞減排序功能 */}
                  <TableCell align="center">圖片</TableCell>
                  <TableCell align="center">項目</TableCell>
                  <TableCell align="center">類別</TableCell>
                  <TableCell align="center">買家</TableCell>
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
                      <TableCell align="center">{item.buyer}</TableCell>
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
      </div>
    </div>
  )
}

export default CloseAuction
