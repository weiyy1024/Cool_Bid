import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  bidFuncWrapper: {
    padding: theme.spacing(4, 3)
  },
  directBuy: {
    display: 'inline-block',
    fontSize: '2rem',
    marginRight: '10px'
  },
  directBuyGroup: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1rem 0'
  },
  bidFuncGroup: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  autoBidGroup: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1rem'
  },
  directBidGroup: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1rem'
  },
  bidNowGroup: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  go: {
    fontSize: '2rem',
    margin: '.5rem 0 2.5rem'
  },
  save: {
    padding: '2rem 5rem',
    backgroundColor: '#eee'
  }
}))

export default useStyles
