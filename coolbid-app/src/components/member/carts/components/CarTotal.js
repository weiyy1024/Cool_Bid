/* eslint-disable space-before-function-paren */
import React from 'react'
import Table from '@material-ui/core/Table'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import '../../../SASS/list.scss'
import '../../../SASS/Components.scss'

function CarTotal() {
  const [state, setState] = React.useState({
    checked: true
  })

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  return (
    // <TableContainer class="Table_wrap">
    <TableContainer className="Table_container">
      <Table>
        <TableRow>
          <TableCell align="left">
            &emsp;&emsp;
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checked}
                  onChange={handleChange}
                  name="checked"
                  color="primary"
                />
              }
              label="全選"
            />
          </TableCell>

          <TableCell colSpan={4} align="right">
            (1個商品)總計NT3,000
          </TableCell>
          <TableCell>
            <input
              type="submit"
              value="結帳"
              className="button SetStoreInfo_Submit"
            />
          </TableCell>
        </TableRow>
      </Table>
    </TableContainer>
  )
}

export default CarTotal
