import React from 'react'

import {
  Typography,
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  FormHelperText
} from '@material-ui/core'

import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'

import useStyles from '../../styles/renewMemberPwdStyle'

const ForgetMemberPwd = () => {
  const classes = useStyles()

  return (
    <>
      <Typography variant='h2'>忘記密碼</Typography>
      <br />
      <FormGroup>
        {/* 舊密碼 */}
        <Typography variant='h5'>信箱</Typography>
        <FormControl className={classes.inline}>
          <InputLabel htmlFor='my-input'>ex. example@email.com</InputLabel>
          <Input id='my-input' type='password' />
          <FormHelperText id='my-helper-text'>
            請輸入註冊時填寫之email信箱
          </FormHelperText>
        </FormControl>
      </FormGroup>
      <br />
      <Button
        variant='contained'
        color='primary'
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
      <Button
        variant='contained'
        color='secondary'
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    </>
  )
}

export default ForgetMemberPwd
