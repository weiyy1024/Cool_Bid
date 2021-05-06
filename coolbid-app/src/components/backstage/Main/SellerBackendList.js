/* eslint-disable space-before-function-paren */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 150,
    marginRight: 40,

    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}))

export default function NestedList() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button component={Link} to="/BackStage">
        <ListItemText primary="首頁" />
      </ListItem>
      <ListItem button component={Link} to="/BackStage/orders">
        <ListItemText primary="訂單" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="商品" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            button
            className={classes.nested}
            component={Link}
            to="/BackStage/product/All"
          >
            <ListItemText primary="商品清單" />
          </ListItem>
        </List>
      </Collapse>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            button
            className={classes.nested}
            component={Link}
            to="/BackStage/editProduct"
          >
            <ListItemText primary="新增商品" />
          </ListItem>
        </List>
      </Collapse>
      {/* <ListItem button>
        <ListItemText primary="金流" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="數據" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="聊聊" />
      </ListItem> */}
      <ListItem button component={Link} to="/BackStage/sellerInfo">
        <ListItemText primary="設定" />
      </ListItem>
    </List>
  )
}
