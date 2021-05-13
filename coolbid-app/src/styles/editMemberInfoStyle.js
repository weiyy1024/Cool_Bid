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
  breadcrumb: {
    margin: '3rem 0'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnGroup: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputGroup: {
    display: 'flex'
  }
}))

export default useStyles
