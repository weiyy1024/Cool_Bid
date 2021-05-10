import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import Typography from '@material-ui/core/Typography'
import '../../SASS/from.scss'
import '../../SASS/Components.scss'
// import Breadcrumbs from '../Main/Breadcrumbs'
import SellerBackendList from '../Main/SellerBackendList'

function AddProduct () {
  const [descWord, setDescWord] = useState('')
  console.log(descWord)

  return (
    <div className="sellerBackend_Member_Wrap">
      <div className="breadcrumbsArea">
        賣家專區/新增商品
        {/* <Breadcrumbs /> */}
      </div>
      <div className="sellerBackend_Member_Container">
        <div className="List">
          <SellerBackendList />
        </div>
        <form className="form_warp">
          <div className="form_row">
            <label>
              *商品標題:
              <br />
              <TextField
                type="text"
                name="name"
                value=""
                onChange=""
                variant="outlined"
                label="商品標題"
                className="mininput"
              />
            </label>
          </div>

          <div className="form_row">
            <label htmlFor="deadline">
              *截標日期:
              <br />
              <TextField
                id="deadline"
                type="datetime-local"
                name="deadline"
                value=""
                onChange=""
                variant="outlined"
                label="DataTime"
                className="dateinput"
                InputLabelProps={{ shrink: true }}
              />
            </label>
          </div>

          <div className="form_row">
            <label htmlFor="kind">
              *商品類型:
              <br />
              <FormControl variant="outlined" className="mininput">
                <InputLabel id="kind">kind</InputLabel>
                <Select
                  labelId="kind"
                  id="kind"
                  value=""
                  onChange=""
                  label="kind"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem>鞋子</MenuItem>
                  <MenuItem>衣服</MenuItem>
                  <MenuItem>包包</MenuItem>
                  <MenuItem>手錶</MenuItem>
                </Select>
              </FormControl>
            </label>
          </div>

          <label htmlFor="brand">
            *商品品牌:
            <br />
            <FormControl variant="outlined" className="mininput">
              <InputLabel id="brand">brand</InputLabel>
              <Select
                labelId="brand"
                id="brand"
                value=""
                onChange=""
                label="brand"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem>UnderArmour</MenuItem>
                <MenuItem>Nike</MenuItem>
                <MenuItem>Adidas</MenuItem>
              </Select>
            </FormControl>
          </label>

          <div className="form_row">
            <label>
              商品顏色:
              <br />
              <TextField
                type="text"
                name="colour"
                value=""
                onChange=""
                variant="outlined"
                label="商品顏色"
                className="mininput"
              />
            </label>
          </div>

          <div className="form_row">
            <label>
              商品尺寸:
              <br />
              <TextField
                type="text"
                name="size"
                value=""
                onChange=""
                variant="outlined"
                label="商品尺寸"
                className="mininput"
              />
            </label>
          </div>

          <div className="from_row">
            <label>
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
              *競標價格:
              <br />
              <TextField
                type="number"
                name="bid"
                value=""
                onChange=""
                variant="outlined"
                label="bid"
                className="mininput"
                InputLabelProps={{ shrink: true }}
              />
            </label>
          </div>

          <div className="form_row">
            <label htmlFor="basic">
              *起標價格:
              <br />
              <TextField
                id="basic"
                type="number"
                name="basic"
                value=""
                onChange=""
                variant="outlined"
                label="basic"
                className="mininput"
                InputLabelProps={{ shrink: true }}
              />
            </label>
          </div>

          <div className="form_row">
            <label htmlFor="per">
              *出價增額:
              <br />
              <TextField
                type="number"
                name="per"
                value=""
                onChange=""
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
                value=""
                onChange=""
                variant="outlined"
                label="direct"
                className="mininput"
                InputLabelProps={{ shrink: true }}
              />
            </label>
          </div>

          <div className="form_row">
            <label>圖片檔案: null</label>
          </div>

          <div className="form_row">
            <Typography
              variant="h4"
              style={{ fontWeight: 'bold', margin: '2rem 0 1rem' }}
            >
              賣場描述：
            </Typography>
            <CKEditor
              editor={ClassicEditor}
              onChange={(event, editor) => {
                setDescWord(editor.getData())
              }}
            />
            {/* <label>
          商品描述:
          <br/>
          <TextField
            id="description"
            type="text"
            name="description"
            value=""
            onChange=""
            label="買場描述"
            variant="outlined"
            multiline={true}
            rows={6}
            className="txtinput"
            InputLabelProps={{ shrink: true }}
          />
        </label> */}
          </div>

          <button className="button">新增</button>
        </form>
      </div>{' '}
    </div>
  )
}

export default AddProduct
