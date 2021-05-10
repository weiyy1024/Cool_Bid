/* eslint-disable space-before-function-paren */
import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import '../../SASS/from.scss'
import '../../SASS/Components.scss'
// import Breadcrumbs from '../Main/Breadcrumbs'
import SellerBackendList from '../Main/SellerBackendList'

function SetStoreInfo() {
  // const [data, setData] = useState(
  const data = [{ StoreTitle: '', pic: '', description: '' }]

  const [state, setState] = React.useState({
    transfer: true,
    creditCard: true,
    COD: true,
    family: true,
    seveneleven: true,
    delivery: true
  })

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  const [descWord, setDescWord] = useState('')
  console.log(descWord)

  return (
    <div className="sellerBackend_Member_Wrap">
      <div className="breadcrumbsArea">賣家專區/賣場設定
        {/* <Breadcrumbs /> */}
      </div>
      <div className="sellerBackend_Member_Container">
        <div className="List">
          <SellerBackendList />
        </div>
        <div>
          <div className="form_warp">
            <form>
              <div className="form_row">
                <label>
                  賣場名稱:&emsp;&emsp;
                  <TextField
                    label="賣場名稱"
                    value={data.StoreTitle}
                    name="StoreTitle"
                    variant="outlined"
                    className="mininput"
                  />
                </label>
              </div>

              <div className="form_row">
                <label>
                  賣場圖片:&emsp;
                  <p></p>
                </label>
              </div>

              <div className="form_row">
                <Typography variant="h4" style={ { fontWeight: 'bold', margin: '2rem 0 1rem' } }>賣場描述：</Typography>
                  <CKEditor
                    editor={ ClassicEditor }
                    onChange={(event, editor) => {
                      setDescWord(editor.getData())
                    } }
                  />
                  {/* <TextField
                    label="賣場描述"
                    value={data.description}
                    name="description"
                    variant="outlined"
                    className="txtinput"
                    multiline={true}
                    rows="6"
                  /> */}
              </div>
              <div className="form_row">
                <label>
                  運送方式:&emsp;&emsp;
                  <FormGroup row>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.delivery}
                          onChange={handleChange}
                          name="delivery"
                          color="primary"
                        />
                      }
                    /><p>宅配</p>&emsp;
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.family}
                          onChange={handleChange}
                          name="family"
                          color="primary"
                        />
                      }
                    /><p>全家</p>&emsp;&emsp;
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.seveneleven}
                          onChange={handleChange}
                          name="seveneleven"
                          color="primary"
                        />
                      }
                    /><p>7-11</p>
                  </FormGroup>
                </label>
              </div>

              <div className="form_row">
                <label>
                  付款方式:&emsp;
                  <FormGroup row>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.transfer}
                          onChange={handleChange}
                          name="transfer"
                          color="primary"
                        />
                      }
                    /><p>轉帳</p>&emsp;
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.creditCard}
                          onChange={handleChange}
                          name="creditCard"
                          color="primary"
                        />
                      }
                    /><p>信用卡</p>&emsp;
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.COD}
                          onChange={handleChange}
                          name="COD"
                          color="primary"
                          className="Mui-checked"
                        />
                      }
                    /><p>貨到付款</p>
                  </FormGroup>
                </label>
              </div>
              <input type="submit" value="提交" className="button" />
           <br/>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SetStoreInfo
