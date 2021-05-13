import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  inline: {
    width: '30rem',
    marginLeft: '2rem'
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
    padding: '2rem 0',
    fontSize: '2rem'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5rem 0'
  },
  btnGroup: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2rem'
  },
  inputGroup: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1rem 0'
  },
  addrInput: {
    margin: '1rem 16rem 1rem 21rem'
  },
  addrSelect: {
    width: '10rem',
    marginLeft: '2rem'
  },
  addrGroup: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1rem 8rem 1rem 0'
  }
}))

export default useStyles
