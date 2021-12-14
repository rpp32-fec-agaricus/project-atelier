import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import sebData from './sebDummyData.js'

ReactDOM.render(<App sebData={sebData}/>, document.getElementById("app"));