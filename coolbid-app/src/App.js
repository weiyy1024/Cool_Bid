/* eslint-disable space-before-function-paren */
import React from 'react'
// import NavBar from './components/navbar/navbar'
import Ahomepage from './components/Ahomepage/aHomepage'
import Category from './components/Ahomepage/CatProduct/category'
import Homepage from './components/Homepage/homepage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Search from './components/Ahomepage/search/search'
import Auction from './Auction'
import Login from './components/member/login'
import Logout from './components/member/logout'
import AddProductEdit from './components/backstage/product1920/AddProductEdit'
import AddProductTable from './components/backstage/product1920/AddProductTable'
import SetStoreInfo from './components/backstage/SetStoreInfo21/SetStoreInfo'
import OrderList from './components/backstage/Order22/OrderList'
import EditMemberInfo from './components/member/account/editMemberInfo'
import RenewMemberPwd from './components/member/account/renewMemberPwd'
import ForgetMemberPwd from './components/member/forgetMemberPwd'
import BidPage from './components/Ahomepage/bidding/bidPage'
import NavBar from './components/navbar/navbar'
import Backstage from './components/backstage/backStage'
import AuctionCountdown from './AuctionCountdown'
import BuyList from './components/backstage/Member/PurchaseList/BuyList'
import Address from './components/backstage/Member/info/Address'

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          {/* entry page */}
          <Route path="/" component={Homepage} exact />
          {/* Ahomepage */}
          <Route path="/Ahomepage" component={Ahomepage} exact />
          <Route
            path="/Ahomepage/:category"
            exact
            render={({ match }) => <Category data={match} />}
          />
          <Route
            path="/Ahomepage/product/:product_id"
            exact
            render={({ match }) => <BidPage data={match} />}
          />
          <Route
            path="/Ahomepage/search/:search"
            render={({ match }) => <Search data={match} />}
          />
          {/* Chomepage */}
          <Route path="/Chomepage" component={Auction} exact />
          <Route path="/Chomepage/coming" component={AuctionCountdown} exact />
          {/* Member */}
          <Route path="/member/signin" component={Login} exact />
          <Route path="/member/signout" component={Logout} exact />
          <Route path="/member/edit" component={EditMemberInfo} exact />
          <Route
            path="/member/renewMemberPwd"
            component={RenewMemberPwd}
            exact
          />
          <Route
            path="/member/forgetMemberPwd"
            component={ForgetMemberPwd}
            exact
          />
          <Route path="/member/shippingInfo" component={Address} exact />
          <Route path="/member/paymentInfo" component={Login} exact />
          <Route path="/member/coolCoin" component={Login} exact />
          <Route path="/member/purchase" component={BuyList} exact />

          {/* Seller */}
          <Route path="/BackStage" component={Backstage} exact />
          <Route path="/BackStage/product" component={AddProductEdit} exact />
          <Route
            path="/BackStage/editProduct"
            component={AddProductTable}
            exact
          />
          <Route path="/BackStage/sellerInfo" component={SetStoreInfo} exact />
          <Route path="/BackStage/orders" component={OrderList} exact />

          {/* Shopping */}
          <Route path="/Shopping/Cart" component={Login} exact />
          <Route path="/Shopping/Bidding" component={Login} exact />
          <Route path="/Shopping/WishList" component={Login} exact />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
