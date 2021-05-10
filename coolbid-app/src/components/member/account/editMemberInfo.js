import React, { useState, useEffect } from 'react'
// import React, { useState } from 'react'
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
  const [lastName, setLastName] = useState()
  const [firstName, setFirstName] = useState()
  const [nickname, setNickname] = useState()
  const [gender, setGender] = useState()
  const [birthday, setBirthday] = useState()
  const [phone, setPhone] = useState()
  const [email, setEmail] = useState()

  useEffect(() => {
    axios
      .post('http://localhost:3001/member/edit', {
        memberId: userInfo.memberId
      })
      .then(res => {
        // console.log(res.data[0])
        setLastName(res.data[0].lastName)
        setFirstName(res.data[0].firstName)
        setNickname(res.data[0].nickname)
        setGender(res.data[0].gender)
        setBirthday(res.data[0].birthday)
        setPhone(res.data[0].phone)
        setEmail(res.data[0].email)
      })
  }, [])

  const handleLastNameChange = e => {
    setLastName(e.target.value)
  }
  const handleFirstNameChange = e => {
    setFirstName(e.target.value)
  }
  const handleNicknameChange = e => {
    setNickname(e.target.value)
  }
  const handleGenderChange = e => {
    setGender(e.target.value)
  }
  const handleBirthdayChange = e => {
    setBirthday(e.target.value)
  }
  const handlePhoneChange = e => {
    setPhone(e.target.value)
  }
  const handleEmailChange = e => {
    setEmail(e.target.value)
  }

  const onSave = () => {
    axios
      .post('http://localhost:3001/member/edit', {
        isOverwrite: true,
        memberId: userInfo.memberId,
        lastName: lastName,
        firstName: firstName,
        nickname: nickname,
        gender: gender,
        birthday: birthday,
        phone: phone,
        email: email
      })

    swal({
      title: '會員資料已更新',
      icon: 'success',
      button: '確認'
    })
  }

  const onDelete = () => {
    setLastName('')
    setFirstName('')
    setNickname('')
    setGender('')
    setBirthday('')
    setPhone('')
    setEmail('')
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
          {/* 姓 */}
          <Typography variant="h5">* 姓</Typography>
          <FormControl className={classes.inline}>
            <Input
              id="lastName"
              aria-describedby="my-helper-text"
              onChange={handleLastNameChange}
              value={lastName}
            />
            <FormHelperText id="my-helper-text">
              僅收貨時使用，請填寫真實姓名
            </FormHelperText>
          </FormControl>
          <br />

          {/* 名 */}
          <Typography variant="h5">* 名</Typography>
          <FormControl className={classes.inline}>
            <Input
              id="firstName"
              aria-describedby="my-helper-text"
              onChange={handleFirstNameChange}
              value={firstName}
            />
            <FormHelperText id="my-helper-text">
              僅收貨時使用，請填寫真實姓名
            </FormHelperText>
          </FormControl>
          <br />

          {/* 暱稱 */}
          <Typography variant="h5">* 暱稱</Typography>
          <FormControl className={classes.inline}>
            <Input
              id="nickname"
              aria-describedby="my-helper-text"
              onChange={handleNicknameChange}
              value={nickname}
            />
          </FormControl>
          <br />

          {/* 地址 */}
          <Typography variant="h5">地址：台中市台中路168號</Typography>
          <br />

          {/* 性別 */}
          <Typography>性別</Typography>
          <FormControl className={classes.inline}>
            <Input
              id="gender"
              aria-describedby="my-helper-text"
              onChange={handleGenderChange}
              value={gender}
            />
          </FormControl>
          <br />

          {/* 生日 */}
          <Typography variant="h5">生日</Typography>
          <FormControl className={classes.inline}>
            <Input
              id="birthday"
              aria-describedby="my-helper-text"
              onChange={handleBirthdayChange}
              value={birthday}
            />
          </FormControl>
          <br />

          {/* 手機 */}
          <Typography variant="h5">* 手機</Typography>
          <FormControl className={classes.inline}>
            <Input
              id="phone"
              aria-describedby="my-helper-text"
              onChange={handlePhoneChange}
              value={phone}
            />
          </FormControl>
          <br />

          {/* 信箱 */}
          <Typography variant="h5">* 信箱</Typography>
          <FormControl className={classes.inline}>
            <Input
              id="email"
              aria-describedby="my-helper-text"
              onChange={handleEmailChange}
              value={email}
            />
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
    </EditContainer>
  )
}

export default EditMemberInfo
