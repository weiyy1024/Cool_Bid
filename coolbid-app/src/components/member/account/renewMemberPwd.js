import React, { useState, useEffect } from 'react'
import axios from 'axios'
import swal from 'sweetalert'

import {
  Typography,
  FormGroup,
  FormControl,
  Input,
  FormHelperText,
  Button
} from '@material-ui/core'

import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'

import useStyles from '../../../styles/renewMemberPwdStyle'
import styled from '@emotion/styled'
import NestedList from '../../backstage/Main/MemberList'

const RenewContainer = styled.div`
  width: 70%;
  margin: 20rem auto;
  display: flex;
`
const RenewMemberPwd = () => {
  const classes = useStyles()
  const userInfo = JSON.parse(window.sessionStorage.getItem('userinfo'))

  useEffect(() => {
    axios
      .post('http://localhost:3001/member/renewMemberPwd', {
        memberId: userInfo.memberId
      })
      .then(res => setDbPassword(res.data.toString()))
  }, [])

  const [dbPassword, setDbPassword] = useState()
  const [oldPassword, setOldPassword] = useState()
  const [newPassword, setNewPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()

  const handleOldPasswordChange = e => {
    setOldPassword(e.target.value)
  }
  const handleNewPasswordChange = e => {
    setNewPassword(e.target.value)
  }
  const handleConfirmPasswordChange = e => {
    setConfirmPassword(e.target.value)
  }

  const onSave = () => {
    if (dbPassword === oldPassword) {
      if (newPassword === confirmPassword) {
        axios
          .post('http://localhost:3001/member/renewMemberPwd', {
            isOverwrite: true,
            memberId: userInfo.memberId,
            newPassword: newPassword
          })

        swal({
          title: '密碼已更新',
          icon: 'success',
          button: '確認'
        })
      } else {
        setNewPassword('')
        setConfirmPassword('')

        swal({
          title: '確認密碼與新密碼不一致，請重新輸入',
          icon: 'warning',
          button: '確認'
        })
      }
    } else {
      setOldPassword('')
      setNewPassword('')
      setConfirmPassword('')

      swal({
        title: '舊密碼輸入錯誤，請重新輸入',
        icon: 'warning',
        button: '確認'
      })
    }
  }

  const onDelete = () => {
    setOldPassword('')
    setNewPassword('')
    setConfirmPassword('')
  }

  return (
    <RenewContainer>
      <NestedList />
      <div>
        <Typography variant="h2">會員密碼更新</Typography>
        <Typography variant="h6" className={classes.inline}>
          * 為必填
        </Typography>
        <br />
        <FormGroup>
          {/* 舊密碼 */}
          <Typography variant="h5">* 舊的密碼</Typography>
          <FormControl className={classes.inline}>
            <Input
              id="old-password"
              type="password"
              onChange={handleOldPasswordChange}
              value={oldPassword}
            />
          </FormControl>
          <br />

          {/* 新密碼 */}
          <Typography variant="h5">* 新的密碼</Typography>
          <FormControl className={classes.inline}>
            <Input
              id="new-password"
              type="password"
              onChange={handleNewPasswordChange}
              value={newPassword}
            />
          </FormControl>
          <br />

          {/* 確認密碼 */}
          <Typography variant="h5">* 確認密碼</Typography>
          <FormControl className={classes.inline}>
            <Input
              id="confirm-password"
              type="password"
              aria-describedby="my-helper-text"
              onChange={handleConfirmPasswordChange}
              value={confirmPassword}
            />
            <FormHelperText id="my-helper-text">請與新密碼一致</FormHelperText>
          </FormControl>
        </FormGroup>
        <br />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<SaveIcon />}
          onClick={onSave}
        >
          Save
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<DeleteIcon />}
          onClick={onDelete}
        >
          Delete
        </Button>
      </div>
    </RenewContainer>
  )
}

export default RenewMemberPwd
