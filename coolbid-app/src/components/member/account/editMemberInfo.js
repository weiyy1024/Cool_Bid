import React, { useState, useEffect } from 'react'
import axios from 'axios'
import swal from 'sweetalert'

import {
  Typography,
  FormGroup,
  FormControl,
  Input,
  FormHelperText,
  Button,
  Select,
  MenuItem
} from '@material-ui/core'

import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import useStyles from '../../../styles/editMemberInfoStyle'
import styled from '@emotion/styled'
import NestedList from '../../backstage/Main/MemberList'

// const EditContainer = styled.div`
//   width: 70%;
//   margin: 20rem auto;
//   display: flex;
// `
const FormControlWei = styled(FormControl)`
  width:300px;
`

const EditMemberInfo = () => {
  const classes = useStyles()
  const userInfo = JSON.parse(window.sessionStorage.getItem('userinfo'))

  const [lastName, setLastName] = useState()
  const [firstName, setFirstName] = useState()
  const [nickname, setNickname] = useState()
  const [gender, setGender] = useState('')
  const [birthday, setBirthday] = useState()
  const [phone, setPhone] = useState()
  const [email, setEmail] = useState()
  const [county, setCounty] = useState('')
  const [dist, setDist] = useState([])
  const [addr, setAddr] = useState()
  const [zipData, setZipData] = useState([])
  const [zip, setZip] = useState('')

  useEffect(() => {
    axios
      .post('http://localhost:3001/member/edit', {
        memberId: userInfo.memberId
      })
      .then((res) => {
        console.log(res.data)
        setLastName(res.data[0][0].lastName)
        setFirstName(res.data[0][0].firstName)
        setNickname(res.data[0][0].nickname)
        // setCounty(res.data[1][0].city)
        // setDist(res.data[1][0].district)
        setAddr(res.data[1][0].address)
        setGender(res.data[0][0].gender)
        setBirthday(res.data[0][0].birthday)
        setPhone(res.data[0][0].phone)
        setEmail(res.data[0][0].email)
        setZipData(res.data[2])
      })
  }, [])

  // find zip
  const countyData = zipData.map((zip) => {
    return zip.name
  })
  const distData = county ? zipData[countyData.indexOf(county)].districts : []
  // console.log(zipData)
  // console.log(countyData)
  // console.log(distData)

  const dateFormat = (date) => {
    const d = new Date(birthday)
    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }
  const handleNicknameChange = (e) => {
    setNickname(e.target.value)
  }
  const handleGenderChange = (e) => {
    setGender(e.target.value)
  }
  const handleBirthdayChange = (e) => {
    setBirthday(e.target.value)
  }
  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handleCountyChange = (e) => {
    setCounty(e.target.value)
  }
  const handleDistChange = (e) => {
    setDist(e.target.value)
    setZip(e.target.value)
  }
  const handleAddrChange = (e) => {
    setAddr(e.target.value)
  }

  const onSave = () => {
    axios.post('http://localhost:3001/member/edit', {
      isOverwrite: true,
      memberId: userInfo.memberId,
      lastName: lastName,
      firstName: firstName,
      nickname: nickname,
      gender: gender,
      birthday: birthday,
      phone: phone,
      email: email,
      address: addr,
      zipCode: zip
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
    setCounty('')
    setDist('')
    setAddr('')
  }

  return (
    <div className="sellerBackend_Member_Wrap">
      <div className="sellerBackend_Member_Container">
        <div className="backendLeft">
          <NestedList />
        </div>
        <div className="backendRight">
          <div className="backendRightContainer">
            <div className="content">
              <Typography variant="h2">會員資料更新</Typography>
              <br />
              <FormGroup>
                {/* 姓 */}
                <Typography variant="h5">姓氏</Typography>
                <FormControlWei className={classes.inline}>
                  <Input
                    id="lastName"
                    aria-describedby="my-helper-text"
                    onChange={handleLastNameChange}
                    value={lastName}
                  />
                  <FormHelperText id="my-helper-text">
                    僅收貨時使用，請填寫真實姓氏
                  </FormHelperText>
                </FormControlWei>
                <br />

                {/* 名 */}
                <Typography variant="h5">名字</Typography>
                <FormControlWei className={classes.inline}>
                  <Input
                    id="firstName"
                    aria-describedby="my-helper-text"
                    onChange={handleFirstNameChange}
                    value={firstName}
                  />
                  <FormHelperText id="my-helper-text">
                    僅收貨時使用，請填寫真實名字
                  </FormHelperText>
                </FormControlWei>
                <br />

                {/* 暱稱 */}
                <Typography variant="h5">暱稱</Typography>
                <FormControlWei className={classes.inline}>
                  <Input
                    id="nickname"
                    aria-describedby="my-helper-text"
                    onChange={handleNicknameChange}
                    value={nickname}
                  />
                </FormControlWei>
                <br />

                {/* 地址 */}
                <Typography>地址</Typography>
                <FormControlWei className={classes.FormControlWei}>
                  {/* 縣市 */}
                  <Select
                    id="county-select"
                    value={county}
                    onChange={handleCountyChange}
                  >
                    {zipData.map((zip) => {
                      return (
                        <MenuItem key={zip.name} value={zip.name}>
                          {zip.name}
                        </MenuItem>
                      )
                    })}
                  </Select>
                  {/* 行政區 */}
                  <Select
                    id="dist-select"
                    value={dist}
                    onChange={handleDistChange}
                  >
                    {distData.map((dist) => {
                      return (
                        <MenuItem key={dist.name} value={dist.zip}>
                          {dist.name}
                        </MenuItem>
                      )
                    })}
                  </Select>
                  {/* 詳細地址 */}
                  <Input
                    id="address"
                    aria-describedby="my-helper-text"
                    onChange={handleAddrChange}
                    value={addr}
                  />
                  <FormHelperText id="my-helper-text">
                    僅收貨時使用，請填寫真實地址
                  </FormHelperText>
                </FormControlWei>
                <br />

                {/* 性別 */}
                <Typography>性別</Typography>
                <FormControlWei className={classes.FormControl}>
                  <Select
                    id="gender-select"
                    value={gender}
                    onChange={handleGenderChange}
                  >
                    <MenuItem value={'男'}>男</MenuItem>
                    <MenuItem value={'女'}>女</MenuItem>
                    <MenuItem value={'其他'}>其他</MenuItem>
                  </Select>
                </FormControlWei>
                <br />

                {/* 生日 */}
                <Typography variant="h5">生日</Typography>
                <FormControlWei className={classes.inline}>
                  <Input
                    id="birthday"
                    type="date"
                    value={dateFormat(birthday)}
                    onChange={handleBirthdayChange}
                  />
                </FormControlWei>
                <br />

                {/* 手機 */}
                <Typography variant="h5">手機</Typography>
                <FormControlWei className={classes.inline}>
                  <Input
                    id="phone"
                    aria-describedby="my-helper-text"
                    onChange={handlePhoneChange}
                    value={phone}
                  />
                </FormControlWei>
                <br />

                {/* 信箱 */}
                <Typography variant="h5">信箱</Typography>
                <FormControlWei className={classes.inline}>
                  <Input
                    id="email"
                    aria-describedby="my-helper-text"
                    onChange={handleEmailChange}
                    value={email}
                  />
                </FormControlWei>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditMemberInfo
