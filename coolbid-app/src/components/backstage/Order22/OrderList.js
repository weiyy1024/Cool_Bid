/* eslint-disable space-before-function-paren */
import React from 'react'
import TableContainer from '@material-ui/core/TableContainer'
import OrderListItem from './OrderListItem'
import OrderTabs from './OrderTabs'
import '../../SASS/list.scss'
import '../../SASS/Components.scss'
import Breadcrumbs from '../Main/Breadcrumbs'
import SellerBackendList from '../Main/SellerBackendList'

function OrderList() {
  // const [list, setList] = useState([
  const list = [
    {
      buyer: 'xia yi zhen',
      orderId: '202105201233',
      product: [
        {
          id: 1,
          pic: 'null',
          name: 'coolbid1',
          orderData: '2021-05-20T10:30',
          deliveryTime: '2021-05-27T10:30',
          price: 3000
        },
        {
          id: 2,
          pic: 'null',
          name: 'coolbid2',
          orderData: '2021-05-20T10:30',
          deliveryTime: '2021-05-27T10:30',
          price: 4000
        }
      ]
    },
    {
      buyer: 'weiwei',
      orderId: '202105201233',
      product: [
        {
          id: 1,
          pic: 'null',
          name: 'coolbid3',
          orderData: '2021-05-20T10:30',
          deliveryTime: '2021-05-27T10:30',
          price: 3000
        },
        {
          id: 2,
          pic: 'null',
          name: 'coolbid4',
          orderData: '2021-05-20T10:30',
          deliveryTime: '2021-05-27T10:30',
          price: 4000
        }
      ]
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
          <div className="Table_wrap">
            <OrderTabs />
            <TableContainer className="Table_container">
              {list.map((item) => {
                return <OrderListItem key={item.orderId} detail={item} />
              })}
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderList
