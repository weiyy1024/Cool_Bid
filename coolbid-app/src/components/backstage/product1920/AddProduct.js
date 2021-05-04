import React, { useState } from 'react'
import AddProductEdit from './AddProductEdit'
import AddProductTable from './AddProductTable'

// 按編輯後取消底下資料不會清空
// 商品類型與狀況跟品牌如何帶入?
// 如何上傳圖片?
// 如何偵測商品狀況
const App = () => {
  const ProductsData = [
    {
      id: 1,
      pic: 'null',
      name: 'coolbid1',
      kind: 'shoes',
      brand: 'UnderArmour',
      colour: '紅色',
      size: '23.5cm',
      productStatus: 'new',
      bid: 7000,
      basic: 2000,
      per: 100,
      direct: 9000,
      deadline: '2021-05-20T10:30',
      status: '',
      description: '1'
    },
    {
      id: 2,
      pic: 'null',
      name: 'coolbid2',
      kind: 'shoes',
      brand: 'UnderArmour',
      colour: '紅色',
      size: '23.5cm',
      productStatus: 'used',
      bid: 7000,
      basic: 2000,
      per: 100,
      direct: 9000,
      deadline: '2021-05-20T10:30',
      status: '',
      description: '2'
    },
    {
      id: 3,
      pic: 'null',
      name: 'coolbid3',
      kind: 'shoes',
      brand: 'UnderArmour',
      colour: '紅色',
      size: '23.5cm',
      productStatus: 'new',
      bid: 7000,
      basic: 2000,
      per: 100,
      direct: 9000,
      deadline: '2021-05-20T10:30',
      status: '',
      description: '3'
    }
  ]
  const initialFormState = {
    id: undefined,
    pic: '',
    name: '',
    kind: '',
    brand: '',
    colour: '',
    size: '',
    productStatus: '',
    bid: undefined,
    basic: undefined,
    per: undefined,
    direct: undefined,
    deadline: '',
    status: ''
  }

  const [products, setProducts] = useState(ProductsData)
  const [editing, setEditing] = useState(false)
  const [currentProduct, setCurrentProduct] = useState(initialFormState)

  const addProduct = (product) => {
    product.id = products.length + 1
    setProducts([...products, product])
  }

  const deleteProduct = (id) => {
    setEditing(false)
    setProducts(products.filter((product) => product.id !== id))
  }

  const editRow = (product) => {
    setEditing(true)

    setCurrentProduct(product)
  }

  const updateProduct = (id, updatedProduct) => {
    setEditing(false)
    setProducts(
      products.map((product) => (product.id === id ? updatedProduct : product))
    )
  }

  return (
    <div>
      <h2>{editing ? '編輯商品' : '新增商品'}</h2>
      <br />
      <AddProductEdit
        editing={editing}
        setEditing={setEditing}
        currentProduct={currentProduct}
        setCurrentProduct={setCurrentProduct}
        updateProduct={updateProduct}
        addProduct={addProduct}
      />

      <AddProductTable
        products={products}
        editRow={editRow}
        deleteProduct={deleteProduct}
      />
    </div>
  )
}

export default App
