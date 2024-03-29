import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import SearchBox from "./SearchBox";
import { logout } from "../redux/actions/userActions";

const Header = () => {
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const logoutHandler = () => {
        dispatch(logout());
    };
    return (
        <header>
            <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Rockstar Shop</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Route
                            render={({ history }) => (
                                <SearchBox history={history} />
                            )}
                        />
                        <Nav className="ml-auto">
                            <LinkContainer to="/cart">
                                <Nav.Link>
                                    <i className="fas fa-shopping-cart"></i>{" "}
                                    Cart
                                </Nav.Link>
                            </LinkContainer>
                            {userInfo ? (
                                <NavDropdown
                                    title={`${userInfo.name} ${
                                        userInfo.isAdmin ? "(Admin)" : ""
                                    }`}
                                    id="userName"
                                >
                                    <LinkContainer to="/profile">
                                        <NavDropdown.Item>
                                            Profile
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    {userInfo.isAdmin && (
                                        <Fragment>
                                            <LinkContainer to="/admin/user-list">
                                                <NavDropdown.Item>
                                                    Users
                                                </NavDropdown.Item>
                                            </LinkContainer>
                                            <LinkContainer to="/admin/product-list">
                                                <NavDropdown.Item>
                                                    Products
                                                </NavDropdown.Item>
                                            </LinkContainer>
                                            <LinkContainer to="/admin/order-list">
                                                <NavDropdown.Item>
                                                    Orders
                                                </NavDropdown.Item>
                                            </LinkContainer>
                                        </Fragment>
                                    )}
                                    <NavDropdown.Item onClick={logoutHandler}>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <LinkContainer to="/login">
                                    <Nav.Link>
                                        <i className="fas fa-user"></i> Sign In
                                    </Nav.Link>
                                </LinkContainer>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
