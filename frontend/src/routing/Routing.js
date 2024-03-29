import React from "react";
import { Switch, Route } from "react-router";

import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProfilePage from "../pages/ProfilePage";
import ShippingPage from "../pages/ShippingPage";
import PaymentPage from "../pages/PaymentPage";
import PlaceOrderPage from "../pages/PlaceOrderPage";
import OrderPage from "../pages/OrderPage";
import AdminOrderListPage from "../pages/AdminOrderListPage";
import AdminUserListPage from "../pages/AdminUserListPage";
import AdminUserEditPage from "../pages/AdminUserEditPage";
import AdminProductListPage from "../pages/AdminProductListPage";
import AdminProductEditPage from "../pages/AdminProductEditPage";

const Routing = () => {
    return (
        <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/search/:keyword" component={HomePage} exact />
            <Route path="/page/:pageNumber" component={HomePage} exact />
            <Route
                path="/search/:keyword/page/:pageNumber"
                component={HomePage}
                exact
            />
            <Route path="/product/:id" component={ProductPage} />
            <Route path="/cart/:id?" component={CartPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/shipping" component={ShippingPage} />
            <Route path="/payment" component={PaymentPage} />
            <Route path="/place-order" component={PlaceOrderPage} />
            <Route path="/order/:id" component={OrderPage} />
            <Route path="/admin/user-list" component={AdminUserListPage} />
            <Route
                path="/admin/product-list"
                component={AdminProductListPage}
                exact
            />
            <Route
                path="/admin/product-list/:pageNumber"
                component={AdminProductListPage}
                exact
            />
            <Route path="/admin/order-list" component={AdminOrderListPage} />
            <Route
                path="/admin/product/:id/edit"
                component={AdminProductEditPage}
            />
            <Route path="/admin/user/:id/edit" component={AdminUserEditPage} />
        </Switch>
    );
};

export default Routing;
