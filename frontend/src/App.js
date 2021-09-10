import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import ShippingPage from "./pages/ShippingPage";
import PaymentPage from "./pages/PaymentPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import OrderPage from "./pages/OrderPage";
import OrderListPage from "./pages/OrderListPage";
import UserListPage from "./pages/UserListPage";
import UserEditPage from "./pages/UserEditPage";
import ProductListPage from "./pages/ProductListPage";
import ProductEditPage from "./pages/ProductEditPage";

function App() {
    return (
        <Router>
            <Header />
            <main className="py-3">
                <Container>
                    <Route path="/" component={HomePage} exact />
                    <Route path="/search/:keyword" component={HomePage} exact />
                    <Route
                        path="/page/:pageNumber"
                        component={HomePage}
                        exact
                    />
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
                    <Route path="/admin/user-list" component={UserListPage} />
                    <Route
                        path="/admin/product-list"
                        component={ProductListPage}
                        exact
                    />
                    <Route
                        path="/admin/product-list/:pageNumber"
                        component={ProductListPage}
                        exact
                    />
                    <Route path="/admin/order-list" component={OrderListPage} />
                    <Route
                        path="/admin/product/:id/edit"
                        component={ProductEditPage}
                    />
                    <Route
                        path="/admin/user/:id/edit"
                        component={UserEditPage}
                    />
                </Container>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
