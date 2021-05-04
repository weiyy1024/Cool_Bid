/* eslint-disable space-before-function-paren */
import React from 'react'
import TableContainer from '@material-ui/core/TableContainer'
import CarTabs from './CarTabs'
import CarTotal from './CarTotal'
import CarContainer from './CarContainer'
import '../../../SASS/list.scss'
import '../../../SASS/Components.scss'

function Cat() {
  // const [list, setList] = useState(
  const list = [
    {
      storeId: 122,
      store: '香奈兒精品',
      title: '超級酷斃賣家',
      product: [
        {
          productId: 1,
          pic: 'null',
          name: '可愛包包',
          date: '2021-05-27T10:30',
          price: '3000'
        },
        {
          productId: 2,
          pic: 'null',
          name: '好看鞋子',
          date: '2021-05-27T10:30',
          price: '5000'
        }
      ]
    },
    {
      storeId: 123,
      store: '耐吉專賣',
      title: '超級酷斃賣家',
      product: [
        {
          productId: 3,
          pic: 'null',
          name: '超貴手錶',
          date: '2021-05-27T10:30',
          price: '6000'
        },
        {
          productId: 4,
          pic: 'null',
          name: '時尚衣服',
          date: '2021-05-27T10:30',
          price: '4000'
        }
      ]
    }
  ]

  return (
    <>
      <div className="Table_wrap">
        <CarTabs />
        <TableContainer className="Table_container">
          {list.map((item) => {
            return <CarContainer key={item.storeId} carDetail={item} />
          })}
        </TableContainer>
      </div>

      <div className="Table_wrap">
        <CarTotal />
      </div>
    </>
  )
}

export default Cat
