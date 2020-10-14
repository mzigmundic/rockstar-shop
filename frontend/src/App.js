import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <Fragment>
            <Header />
            <main className="py-3">
                <Container>
                    <HomePage />
                </Container>
            </main>
            <Footer />
        </Fragment>
    );
}

export default App;
