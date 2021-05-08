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
import Add from './components/backstage/product1920/Add'
import productpage from './components/backstage/product1920/productpage'
// import AddProductEdit from './components/backstage/product1920/AddProductEdit'
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
// import CloseAuction from './components/backstage/product1920/CloseAuction'
import ShoppingCart from './components/member/carts/shoppingCart'
//
import SellerPageHero from './components/backstage/SellerPageHero23/SellerPageHero'

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

{/* 2021/05/07測試賣場首頁,放入資料庫連線 */}
<Route path="/BackStage/SellerPageHero" component={SellerPageHero} exact />

          {/* Seller */}
          <Route path="/BackStage" component={Backstage} exact />
          <Route path="/BackStage/product/all" component={productpage} exact />
          {/* <Route path="/Shopping/product/:CloseAuction" component={CloseAuction} exact />
          <Route path="/Shopping/product/:SoldOut" component={SoldOut} exact />
          <Route path="/Shopping/product/:Biding" component={Biding} exact /> */}
          <Route
            path="/BackStage/editProduct"
            component={Add}
            exact
          />
          <Route path="/BackStage/sellerInfo" component={SetStoreInfo} exact />
          <Route path="/BackStage/orders" component={OrderList} exact />

          {/* Shopping */}
          <Route path="/Shopping/Cart" component={ShoppingCart} exact />
          <Route path="/Shopping/Bidding" component={Login} exact />
          <Route path="/Shopping/WishList" component={ShoppingCart} exact />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
