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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { makeStyles } from '@material-ui/core/styles'
// import Breadcrumbs from '../../Main/Breadcrumbs'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'

const useStyles = makeStyles((theme) => ({
  itemTitle: {
    fontSize: 20
  },
  itemTxt: {
    fontSize: 16
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    width: 800,
    height: 300,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  spacing: {
    width: 150
  },
  imgStyle: {
    width: 80
  }
}))

function getSteps () {
  return ['訂單成立', '撿貨中', '運送中', '已送達']
}

function BuyList () {
  const steps = getSteps()
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const classes = useStyles()
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
      <div className="breadcrumbsArea">買家專區/購買清單
        {/* <Breadcrumbs /> */}
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
                      <TableCell colSpan={4} className={classes.itemTxt}>
                        買家:{item.shopName}
                        <FontAwesomeIcon icon={faCommentDots} />
                      </TableCell>
                      <TableCell className={classes.itemTxt}>訂單編號:{item.orderId}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center" className={classes.itemTitle}>圖片</TableCell>
                      <TableCell align="center" className={classes.itemTitle}>項目</TableCell>
                      <TableCell align="center" className={classes.itemTitle}>日期</TableCell>
                      <TableCell align="center" className={classes.itemTitle}>狀態</TableCell>
                      <TableCell align="center" className={classes.itemTitle}>價錢</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    <TableRow>
                      <TableCell align="center" className={classes.itemTxt}>
                      <img src={'/imgs/' + item.productId + '.jpg'} className={classes.imgStyle}/>
                      </TableCell>
                      <TableCell align="center" className={classes.itemTxt}>{item.productName}</TableCell>
                      <TableCell align="center" className={classes.itemTxt}>{item.orderTime}</TableCell>
                      <TableCell align="center" className={classes.itemTxt}>訂單成立</TableCell>
                      <TableCell align="center" className={classes.itemTxt}>{item.nowPrice}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell colSpan={4} className={classes.itemTxt}>狀態:
                      <a onClick={handleOpen} style={{ cursor: 'pointer', color: 'rgb(11, 96, 175)' }}>{item.orderStatusBuyer}</a>
                      &emsp;{item.orderStatusDate}</TableCell>
                      <TableCell align="center" className={classes.itemTxt}>總計:</TableCell>
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
        <>
        <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <Stepper alternativeLabel>
        {steps.map((label) => (
          <Step key={label} className={classes.spacing}>
            <StepLabel><h1>{label}</h1></StepLabel>
          </Step>
        ))}
      </Stepper>
          </div>
        </Fade>
      </Modal>
      </>
        </div>
      </div>
    </div>

  )
}

export default BuyList
