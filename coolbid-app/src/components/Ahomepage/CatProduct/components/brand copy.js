/* eslint-disable space-before-function-paren */
import React from 'react'
import styled from '@emotion/styled'
import '../style/brand.css'

const BrandContainer = styled.div`
  margin-top: 13rem;
  margin-left: 8rem;
  width: 30rem;
`

export default function Brands(props) {
  const brandName = [1, 2, 3, 4, 5, 6]
  console.log(props.cat)
  return (
    <BrandContainer>
      <div className="col">
        <div className="tabs">
          {brandName.map((item, index) => {
            return (
              <div key={index} className="tab">
                <input
                  className="brand"
                  type="radio"
                  id={'rd' + { index }}
                  name="rd"
                />
                <label className="tab-label" htmlFor={'rd' + { index }}>
                  Item 1
                </label>
                <div className="tab-content">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos,
                  facilis.
                </div>
              </div>
            )
          })}
          <div className="tab">
            <input className="brand" type="radio" id="rd" name="rd" />
            <label htmlFor="rd3" className="tab-close">
              Close others &times;
            </label>
          </div>
        </div>
      </div>
    </BrandContainer>
    // <BrandContainer>
    //   <nav className="menu">
    //     <input type="checkbox" id="togglemenu" checked />
    //     <ul>
    //       <li>
    //         <a href="">BRAND 1</a>
    //       </li>
    //       <li>
    //         <a href="">BRAND 2</a>
    //       </li>
    //       <li>
    //         <a href="">BRAND 3</a>
    //       </li>
    //       <li>
    //         <a href="">BRAND 4</a>
    //       </li>
    //     </ul>
    //   </nav>
    // </BrandContainer>
  )
}
