/* eslint-disable space-before-function-paren */
import React from 'react'
import '../../../SASS/list.scss'
import '../../../SASS/Components.scss'

function Address() {
  // const [data, setDate] = useState(
  const data = [
    {
      id: 1,
      name: 'xia yi zhen',
      phone: '0911-111-123',
      convenience: '7-11',
      address: '台中市台中路168號'
    },
    {
      id: 1,
      name: 'xia yi zhen',
      phone: '0911-111-123',
      convenience: '7-11',
      address: '台中市台中路168號'
    }
  ]

  return (
    <>
      <div className="Address_wrap">
        <div className="btnArea">
          <button className="button">新增地址</button>
        </div>

        {data.map((item, index) => {
          return (
            <div key={index} className="Address_list">
              <button className="button">刪除</button>
              <div className="dataArea">
                <p>姓名：{item.name}</p>
                <p>手機：{item.phone}</p>
                <p>超商：{item.convenience}</p>
                <p>地址：{item.address}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Address
