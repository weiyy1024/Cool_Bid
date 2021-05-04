/* eslint-disable space-before-function-paren */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

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
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button>
        <ListItemText primary="會員編輯" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="更改密碼" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="收貨資訊" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="付款資訊" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="幣包/酷碰" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="購買清單" />
      </ListItem>
    </List>
  )
}
