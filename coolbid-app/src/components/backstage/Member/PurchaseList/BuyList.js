/* eslint-disable space-before-function-paren */
import React from 'react'
import TableContainer from '@material-ui/core/TableContainer'
import OrderTabs from '../../Order22/OrderTabs'
import BuyListItem from './BuyListItem'
import '../../../SASS/list.scss'
import '../../../SASS/Components.scss'
import styled from '@emotion/styled'
import NestedList from '../../Main/MemberList'

const BuyListContainer = styled.div`
  width: 70%;
  margin: 20rem auto;
  display: flex;
  .shipList {
    width: 20%;
  }
`

function BuyList() {
  // const [list, setList] = useState(
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
          status: '',
          price: 3000
        },
        {
          id: 2,
          pic: 'null',
          name: 'coolbid2',
          orderData: '2021-05-20T10:30',
          status: '',
          price: 4000
        }
      ]
    },
    {
      buyer: 'weiwei',
      orderId: '202105201233',
      product: [
        {
          id: 3,
          pic: 'null',
          name: 'coolbid1',
          orderData: '2021-05-20T10:30',
          status: '',
          price: 3000
        },
        {
          id: 4,
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
    <BuyListContainer>
      <NestedList />
      <div className="Table_wrap">
        <OrderTabs />
        <TableContainer className="Table_container">
          {list.map((item) => {
            return <BuyListItem key={item.orderId} detail={item} />
          })}
        </TableContainer>
      </div>
    </BuyListContainer>
  )
}

export default BuyList
