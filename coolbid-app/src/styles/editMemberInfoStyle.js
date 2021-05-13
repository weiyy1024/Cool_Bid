import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  inline: {
    width: '300px'
  },
  button: {
    margin: theme.spacing(1)
  },
  imgUpload: {
    width: '40rem',
    height: '40rem',
    border: '1px solid black'
  },
  profilePic: {
    width: '20rem',
    height: '20rem',
    border: '1px solid black'
  }
}))

export default useStyles
