import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";

import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.scss";
import "./App.css";

function App() {
  return (
    <Router>
      <div
        className="App d-flex flex-column justify-content-center"
        style={{ textAlign: "center" }}
      >
        <div
          className="d-flex flex-column justify-content-center"
          style={{
            position: "absolute",
            marginTop: "-25vh",
            textAlign: "center",
          }}
        >
          <h1 className="display-2" style={{ margin: '0 15vw' }}>
            Welcome to Color Pages
          </h1>
          <h3  style={{ margin: "5vh 10vw" }}>
            Scroll Down To Login
          </h3>
        </div>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/protected" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
