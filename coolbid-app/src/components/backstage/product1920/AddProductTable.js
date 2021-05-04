/* eslint-disable multiline-ternary */
import React from 'react'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import ProductTabs from './ProductTabs'
import '../../SASS/list.scss'
import '../../SASS/Components.scss'

const ProductTable = (props) => (
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
          {props.products.length > 0 ? (
            props.products.map((product) => (
              <TableRow key={product.id} id={product.id}>
                <TableCell align="center">{product.pic}</TableCell>
                <TableCell align="center">{product.name}</TableCell>
                <TableCell align="center">{product.kind}</TableCell>
                <TableCell align="center">{product.bid}</TableCell>
                <TableCell align="center">{product.basic}</TableCell>
                <TableCell align="center">{product.per}</TableCell>
                <TableCell align="center">{product.direct}</TableCell>
                <TableCell align="center">{product.deadline}</TableCell>
                <TableCell align="center">{product.status}</TableCell>
                <TableCell align="center">
                  <button
                    className="button muted-button"
                    onClick={() => {
                      props.editRow(product)
                    }}
                  >
                    編輯
                  </button>

                  <button
                    className="button muted-button"
                    onClick={() => props.deleteProduct(product.id)}
                  >
                    刪除
                  </button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={10}>目前沒有任何資料</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
)

export default ProductTable
