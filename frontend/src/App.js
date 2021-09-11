import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routing from "./routing/Routing";

function App() {
    return (
        <Router>
            <Header />
            <main className="py-3">
                <Container>
                    <Routing />
                </Container>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
