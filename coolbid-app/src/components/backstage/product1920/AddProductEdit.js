import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import '../../SASS/from.scss'
import '../../SASS/Components.scss'

const EditProduct = (props) => {
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
  const [product, setProduct] = useState(
    props.editing ? props.currentProduct : initialFormState
  )

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setProduct({ ...product, [name]: value })
  }

  useEffect(() => {
    setProduct(props.currentProduct)
  }, [props])

  const resetAddProduct = () => {
    props.setEditing(false)
    setProduct(initialFormState)
    props.setCurrentProduct(initialFormState)
  }

  const [kind, setKind] = React.useState('')
  const handleChangekind = (event) => {
    setKind(event.target.value)
  }

  const [brand, setbrand] = React.useState('')
  const handleChangebrand = (event) => {
    setbrand(event.target.value)
  }

  return (
    <form
      className="form_warp"
      onSubmit={(event) => {
        event.preventDefault()
        if (
          !product.name ||
          !product.bid ||
          !product.basic ||
          !product.per ||
          !product.direct
        ) {
          return
        }

        props.editing
          ? props.updateProduct(product.id, product)
          : props.addProduct(product)
        resetAddProduct()
      }}
    >
      <div className="form_row">
        <label>
          *商品標題:&emsp;&emsp;
          <TextField
            type="text"
            name="name"
            value={product.name}
            onChange={handleInputChange}
            variant="outlined"
            label="商品標題"
            className="mininput"
          />
        </label>
      </div>

      <div className="form_row">
        <label htmlFor="deadline">
          *截標日期:&emsp;&emsp;
          <TextField
            id="deadline"
            type="datetime-local"
            name="deadline"
            value={product.deadline}
            onChange={handleInputChange}
            variant="outlined"
            label="DataTime"
            className="dateinput"
            InputLabelProps={{ shrink: true }}
          />
        </label>
      </div>

      <div className="form_row">
        <label htmlFor="kind">
          *商品類型:&emsp;&emsp;
          <FormControl variant="outlined" className="mininput">
            <InputLabel id="kind">kind</InputLabel>
            <Select
              labelId="kind"
              id="kind"
              value={kind}
              onChange={handleChangekind}
              label="kind"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'shoes'}>鞋子</MenuItem>
              <MenuItem value={'clothes'}>衣服</MenuItem>
              <MenuItem value={'bag'}>包包</MenuItem>
              <MenuItem value={'Watch'}>手錶</MenuItem>
            </Select>
          </FormControl>
        </label>
      </div>

      <label htmlFor="brand">
        *商品品牌:&emsp;&emsp;
        <FormControl variant="outlined" className="mininput">
          <InputLabel id="brand">brand</InputLabel>
          <Select
            labelId="brand"
            id="brand"
            value={brand}
            onChange={handleChangebrand}
            label="brand"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'UnderArmour'}>UnderArmour</MenuItem>
            <MenuItem value={'Nike'}>Nike</MenuItem>
            <MenuItem value={'Adidas'}>Adidas</MenuItem>
          </Select>
        </FormControl>
      </label>

      <div className="form_row">
        <label>
          商品顏色:&emsp;&emsp;
          <TextField
            type="text"
            name="colour"
            value={product.colour}
            onChange={handleInputChange}
            variant="outlined"
            label="商品顏色"
            className="mininput"
          />
        </label>
      </div>

      <div className="form_row">
        <label>
          商品尺寸:&emsp;&emsp;
          <TextField
            type="text"
            name="size"
            value={product.size}
            onChange={handleInputChange}
            variant="outlined"
            label="商品尺寸"
            className="mininput"
          />
        </label>
      </div>

      <div className="from_row">
        <label>
          {' '}
          商品狀況:
          <RadioGroup
            row
            aria-label="productStatus"
            name="productStatus"
            defaultValue="new"
          >
            <FormControlLabel
              value="new"
              control={<Radio color="primary" />}
              label="全新"
            />
            <FormControlLabel
              value="used"
              control={<Radio color="primary" />}
              label="二手"
            />
          </RadioGroup>
        </label>
      </div>

      <div className="form_row">
        <label htmlFor="bid">
          *競標價格:&emsp;&emsp;
          <TextField
            type="number"
            name="bid"
            value={product.bid}
            onChange={handleInputChange}
            variant="outlined"
            label="bid"
            className="mininput"
            InputLabelProps={{ shrink: true }}
          />
        </label>
      </div>

      <div className="form_row">
        <label htmlFor="basic">
          *起標價格:&emsp;&emsp;
          <TextField
            id="basic"
            type="number"
            name="basic"
            value={product.basic}
            onChange={handleInputChange}
            variant="outlined"
            label="basic"
            className="mininput"
            InputLabelProps={{ shrink: true }}
          />
        </label>
      </div>

      <div className="form_row">
        <label htmlFor="per">
          *出價增額:&emsp;&emsp;
          <TextField
            type="number"
            name="per"
            value={product.per}
            onChange={handleInputChange}
            variant="outlined"
            label="per"
            className="mininput"
            InputLabelProps={{ shrink: true }}
          />
        </label>
      </div>

      <div className="form_row">
        <label htmlFor="direct">
          直購價格:
          <br />
          <TextField
            type="number"
            name="direct"
            value={product.direct}
            onChange={handleInputChange}
            variant="outlined"
            label="direct"
            className="mininput"
            InputLabelProps={{ shrink: true }}
          />
        </label>
      </div>

      <div className="form_row">
        <label>圖片檔案:&emsp; null</label>
      </div>

      <div className="form_row">
        <label>
          商品描述:&emsp;&emsp;
          <TextField
            id="description"
            type="text"
            name="description"
            value={product.description}
            onChange={handleInputChange}
            label="買場描述"
            variant="outlined"
            multiline={true}
            rows={6}
            className="txtinput"
            InputLabelProps={{ shrink: true }}
          />
        </label>
      </div>

      <button className="button">{props.editing ? '修改' : '新增'}</button>
      {props.editing && (
        <button onClick={resetAddProduct} className="button">
          取消
        </button>
      )}
    </form>
  )
}

export default EditProduct
