import React from 'react'

import {
  Typography,
  FormGroup,
  FormControl,
  Input,
  FormHelperText,
  Button
} from '@material-ui/core'

import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import DeleteIcon from '@material-ui/icons/Delete'

import useStyles from '../../../styles/renewMemberPwdStyle'

const RenewMemberPwd = () => {
  const classes = useStyles()

  return (
    <>
      <Typography variant='h2'>會員密碼更新</Typography>
      <Typography variant='h6' className={classes.inline}>
        * 為必填
      </Typography>
      <br />
      <FormGroup>
        {/* 舊密碼 */}
        <Typography variant='h5'>* 舊的密碼</Typography>
        <FormControl className={classes.inline}>
          <Input id='my-input' type='password' />
        </FormControl>
        <br />

        {/* 新密碼 */}
        <Typography variant='h5'>* 新的密碼</Typography>
        <FormControl className={classes.inline}>
          <Input id='my-input' type='password' />
        </FormControl>
        <br />

        {/* 確認密碼 */}
        <Typography variant='h5'>* 確認密碼</Typography>
        <FormControl className={classes.inline}>
          <Input
            id='my-input'
            type='password'
            aria-describedby='my-helper-text'
          />
          <FormHelperText id='my-helper-text'>請與新密碼一致</FormHelperText>
        </FormControl>
      </FormGroup>
      <br />
      <Button
        variant='contained'
        color='primary'
        className={classes.button}
        startIcon={<CloudUploadIcon />}
      >
        Upload
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

export default RenewMemberPwd
