import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./styles/bootstrap.min.css";
import "./styles/index.css";
import App from "./App";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
