import React, { useState, useEffect } from 'react'
// import React, { useState } from 'react'
import axios from 'axios'

import {
  Typography,
  FormGroup,
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  Button
} from '@material-ui/core'

import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import useStyles from '../../../styles/editMemberInfoStyle'
import styled from '@emotion/styled'
import NestedList from '../../backstage/Main/MemberList'

const EditContainer = styled.div`
  width: 70%;
  margin: 20rem auto;
  display: flex;
`

const EditMemberInfo = () => {
  const classes = useStyles()

  const userInfo = JSON.parse(window.sessionStorage.getItem('userinfo'))
  const [member, setMember] = useState([])

  useEffect(() => {
    axios
      .post('http://localhost:3001/member/edit', {
        memberId: userInfo.memberId
      })
      .then(res => setMember(res.data))
  }, [])

  const [lastName, setLastName] = useState(member.length === 0 ? '' : member[0].lastName)
  console.log(member)
  console.log(lastName)

  const handleNameChange = e => {
    setLastName(e.target.value)
  }

  return (
    <EditContainer>
      <NestedList className="content" />
      <div className="content">
        <Typography variant="h2">會員資料更新</Typography>
        <Typography variant="h6" className={classes.inline}>
          * 為必填
        </Typography>
        <br />
        <FormGroup>
          {/* 姓名 */}
          <Typography variant="h5">* 姓名</Typography>
          <FormControl className={classes.inline}>
            <InputLabel htmlFor="name">ex. 蔡小明</InputLabel>
            <Input
              id="name"
              aria-describedby="my-helper-text"
              onChange={handleNameChange}
              value={lastName}
            />
            <FormHelperText id="my-helper-text">
              僅收貨時使用，請填寫真實姓名
            </FormHelperText>
          </FormControl>
          <br />

          {/* 暱稱 */}
          <Typography variant="h5">* 暱稱</Typography>
          <FormControl className={classes.inline}>
            <InputLabel htmlFor="nickname">ex. 小菜</InputLabel>
            <Input
              id="nickname"
              aria-describedby="my-helper-text"
            />
          </FormControl>
          <br />
          <Typography variant="h5">地址：台中市台中路168號</Typography>
          <br />

          {/* 性別 */}
          <Typography>性別</Typography>
          <FormControl className={classes.inline}>
            <InputLabel htmlFor="gender">ex. 男</InputLabel>
            <Input
              id="gender"
              aria-describedby="my-helper-text"
            />
          </FormControl>
          <br />

          {/* 生日 */}
          <Typography variant="h5">生日</Typography>
          <FormControl className={classes.inline}>
            <InputLabel htmlFor="birthday">ex. 1999/12/31</InputLabel>
            <Input
              id="birthday"
              aria-describedby="my-helper-text"
            />
          </FormControl>
          <br />

          {/* 手機 */}
          <Typography variant="h5">* 手機</Typography>
          <FormControl className={classes.inline}>
            <InputLabel htmlFor="phone">ex. 0912345678</InputLabel>
            <Input
              id="phone"
              aria-describedby="my-helper-text"
            />
          </FormControl>
          <br />

          {/* 信箱 */}
          <Typography variant="h5">* 信箱</Typography>
          <FormControl className={classes.inline}>
            <InputLabel htmlFor="email">ex. example@email.com</InputLabel>
            <Input
              id="email"
              aria-describedby="my-helper-text"
            />
          </FormControl>
        </FormGroup>
        <br />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </div>
    </EditContainer>
  )
}

export default EditMemberInfo
