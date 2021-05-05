/* eslint-disable no-unused-vars */
/* eslint-disable space-before-function-paren */
import React from 'react'
import Breadcrumbs from './Main/Breadcrumbs'
import SellerBackendList from './Main/SellerBackendList'
import '../SASS/Main.scss'
import OrderList from './Order22/OrderList'

export default function Backstage() {
  return (
    <div className="sellerBackend_Member_Wrap">
      <div className="breadcrumbsArea">
        <Breadcrumbs />
      </div>
      <div className="sellerBackend_Member_Container">
        <div className="List">
          <SellerBackendList />
        </div>
        <div>
          <OrderList />
        </div>
      </div>
    </div>
  )
}
