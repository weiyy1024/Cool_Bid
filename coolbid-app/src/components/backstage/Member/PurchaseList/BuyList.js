// /* eslint-disable space-before-function-paren */
// import React, { useEffect } from 'react'
// import TableContainer from '@material-ui/core/TableContainer'
// import OrderTabs from '../../Order22/OrderTabs'
// import BuyListItem from './BuyListItem'
// import '../../../SASS/list.scss'
// import '../../../SASS/Components.scss'
// import styled from '@emotion/styled'
// import NestedList from '../../Main/MemberList'
// import axios from 'axios'

// const BuyListContainer = styled.div`
//   width: 70%;
//   margin: 20rem auto;
//   display: flex;
//   .shipList {
//     width: 20%;
//   }
// `

// function BuyList() {
//   // const [list, setList] = useState(
//   const list = [
//     {
//       buyer: 'xia yi zhen',
//       orderId: '202105201233',
//       product: [
//         {
//           id: 1,
//           pic: 'null',
//           name: 'coolbid1',
//           orderData: '2021-05-20T10:30',
//           status: '',
//           price: 3000
//         },
//         {
//           id: 2,
//           pic: 'null',
//           name: 'coolbid2',
//           orderData: '2021-05-20T10:30',
//           status: '',
//           price: 4000
//         }
//       ]
//     },
//     {
//       buyer: 'weiwei',
//       orderId: '202105201233',
//       product: [
//         {
//           id: 3,
//           pic: 'null',
//           name: 'coolbid1',
//           orderData: '2021-05-20T10:30',
//           status: '',
//           price: 3000
//         },
//         {
//           id: 4,
//           pic: 'null',
//           name: 'coolbid4',
//           orderData: '2021-05-20T10:30',
//           deliveryTime: '2021-05-27T10:30',
//           price: 4000
//         }
//       ]
//     }
//   ]
//   useEffect(() => {
//     console.log('hi')
//     axios({
//       method: 'get',
//       baseURL: 'http://localhost:3001',
//       url: '/member/purchase',
//       'Content-Type': 'application/json'
//     }).then((a) => console.log(a.data))
//   }, [])

//   return (
//     <BuyListContainer>
//       <NestedList />
//       <div className="Table_wrap">
//         <OrderTabs />
//         <TableContainer className="Table_container">
//           {list.map((item) => {
//             return <BuyListItem key={item.orderId} detail={item} />
//           })}
//         </TableContainer>
//       </div>
//     </BuyListContainer>
//   )
// }

// export default BuyList

/* eslint-disable space-before-function-paren */
import React, { useState, useEffect } from 'react'
import TableContainer from '@material-ui/core/TableContainer'
import OrderTabs from '../../Order22/OrderTabs'
import '../../../SASS/list.scss'
import '../../../SASS/Components.scss'
import '../../../SASS/Main.scss'
import NestedList from '../../Main/MemberList'
import axios from 'axios'
import Table from '@material-ui/core/Table'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
// import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import Breadcrumbs from '../../Main/Breadcrumbs'
// eslint-disable-next-line no-undef

// eslint-disable-next-line no-undef
// const BuyListContainer = styled.div`
//   width: 70%;
//   margin: 20rem auto;
//   display: flex;
//   .shipList {
//     width: 20%;
//   }
// `
function BuyList() {
  const [data, setData] = useState([])
  useEffect(() => {
    console.log('hiiiiii')
    axios({
      method: 'get',
      baseURL: 'http://localhost:3001',
      url: '/member/purchase',
      'Content-Type': 'application/json'
    }).then((a) => setData(a.data))
  }, [])

  return (
      <div className="sellerBackend_Member_Wrap">
      <div className="breadcrumbsArea">
        <Breadcrumbs />
      </div>
      <div className="sellerBackend_Member_Container">
        <div className="Member_List">
          <NestedList/>
        </div>

      <div className="Table_wrap">
        <OrderTabs />
        <TableContainer className="Table_container">
          <Table>
            {data.map((item, index) => {
              return (
                <>
                  <TableHead key={index}>
                    <TableRow>
                      <TableCell colSpan={4}>
                        買家:{item.shopName}
                        <FontAwesomeIcon icon={faCommentDots} />
                      </TableCell>
                      <TableCell>訂單編號:{item.orderId}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">圖片</TableCell>
                      <TableCell align="center">項目</TableCell>
                      <TableCell align="center">日期</TableCell>
                      <TableCell align="center">狀態</TableCell>
                      <TableCell align="center">價錢</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    <TableRow>
                      <TableCell align="center">null</TableCell>
                      <TableCell align="center">{item.productName}</TableCell>
                      <TableCell align="center">{item.orderTime}</TableCell>
                      <TableCell align="center">訂單成立</TableCell>
                      <TableCell align="center">{item.nowPrice}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell colSpan={4}>狀態:{item.orderStatusBuyer}&emsp;{item.orderStatusDate}</TableCell>
                      <TableCell align="center">總計:</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={5}>
                        <input
                          type="submit"
                          value="完成訂單"
                          className="button SetStoreInfo_Submit"
                        />
                        <input
                          type="submit"
                          value="評價"
                          className="button SetStoreInfo_Submit"
                        />

                        <input
                          type="submit"
                          value="退貨/退款"
                          className="button SetStoreInfo_Submit"
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </>
              )
            })}
          </Table>
        </TableContainer>
        </div>
      </div>
    </div>

  )
}

export default BuyList
