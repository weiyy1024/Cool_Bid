import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 0)
  },
  productWrapper: {
    margin: '20px 0 50px'
  },
  mainMedia: {
    height: '400px',
    width: '400px'
  },
  smallMediaWrapper: {
    backgroundColor: '#ddd',
    width: '400px'
  },
  smallMedia: {
    display: 'inline-block',
    height: '90px',
    width: '90px',
    margin: '5px'
  },
  productInfoWrapper: {
    margin: '0 40px'
  },
  storeMedia: {
    height: '90px',
    width: '90px'
  }
}))

export default useStyles
