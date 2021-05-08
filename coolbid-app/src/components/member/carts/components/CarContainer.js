/* eslint-disable space-before-function-paren */
import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import Checkbox from '@material-ui/core/Checkbox'
import TableRow from '@material-ui/core/TableRow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem } from '@fortawesome/free-solid-svg-icons'
import '../../../SASS/list.scss'
import '../../../SASS/Components.scss'

function CarContainer(props) {
  const { carDetail } = props
  const [state, setState] = React.useState({
    checked: true
  })

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <Checkbox
                checked={state.checked}
                onChange={handleChange}
                name="checked"
                color="primary"
              />
            </TableCell>
            <TableCell colSpan={5}>
              {carDetail.store}&emsp;
              <FontAwesomeIcon icon={faGem} />
              &emsp;{carDetail.title}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell align="center"></TableCell>
            <TableCell align="center">圖片</TableCell>
            <TableCell align="center">項目</TableCell>
            <TableCell align="center">日期</TableCell>
            <TableCell align="center">價錢</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {carDetail.product.map((list, index) => {
            return (
              <TableRow key={index}>
                <TableCell align="center">
                  <Checkbox
                    checked={state.checked}
                    onChange={handleChange}
                    name="checked"
                    color="primary"
                  />
                </TableCell>
                <TableCell align="center">{list.pic}</TableCell>
                <TableCell align="center">{list.name}</TableCell>
                <TableCell align="center">{list.date}</TableCell>
                <TableCell align="center">{list.price}</TableCell>
                <TableCell align="center">
                  <input
                    type="submit"
                    value="取消購買"
                    className="button SetStoreInfo_Submit"
                  />
                </TableCell>
              </TableRow>
            )
          })}

          <TableRow>
            <TableCell colSpan={5} align="right">
              總計:NT3,000
            </TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}

export default CarContainer
