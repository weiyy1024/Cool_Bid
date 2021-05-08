/* eslint-disable space-before-function-paren */
import React from 'react'
import './homepage.css'
// import styled from '@emotion/styled'

// const TitleBtn = styled.div`
//   color: white;
//   font-size: 4rem;
//   width: 10rem;
//   text-align: center;
//   padding: 2rem;
//   margin: 3rem;
//   display: inline-block;
//   margin-top: 30rem;
//   font-weight: 400;
//   padding: 20px 40px;
//   background: none;
//   border: none;
//   position: relative;
//   text-transform: uppercase;
//   font-weight: bold;
//   letter-spacing: 3px;
//   cursor: pointer;
//   &:after,
//   &:before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     bottom: 0;
//     right: 0;
//     border: 0.2rem solid white;
//     transition: transform 0.2s;
//   }
//   &:after {
//     transform: translate(3px, 3px);
//   }
//   &:before {
//     transform: translate(-3px, -3px);
//   }
//   &:hover {
//     &:after,
//     &:before {
//       transform: translate(0);
//     }
//   }
// `
// const entryPage = (page) => {
//   window.location.href = `http://localhost:3000/${page}`
// }

export default function Homepage() {
  return (
    <div className="loader">
      <div className="second"></div>
      <div className="image"></div>
      <div className="first-loader"></div>
      <div className="second-loader"></div>
      <div className="image-loader">
        {/* <TitleBtn
          onClick={() => {
            entryPage('Ahomepage')
          }}
        >
          bid Now
        </TitleBtn>
        <TitleBtn
          onClick={() => {
            entryPage('Chomepage')
          }}
        >
          auc tion
        </TitleBtn> */}
      </div>
      <div className="loader-text background-text">
        wel
        <br />
        come<span className="full-stop">.</span>
      </div>
    </div>
  )
}
