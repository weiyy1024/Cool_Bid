import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  inline: {
    width: '300px'
  },
  button: {
    margin: theme.spacing(1)
  },
  breadcrumb: {
    padding: '2rem 0',
    fontSize: '2rem'
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
