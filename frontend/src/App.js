import React, { Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <Fragment>
            <Header />
            <main>
                <HomePage />
            </main>
            <Footer />
        </Fragment>
    );
}

export default App;
