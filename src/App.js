import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.scss";
import "./App.css";

function App() {

  
 
    const logout = () => {
      alert("You have been logged out. Thank you for visiting");
      localStorage.clear();
      return <Redirect to='/login' />
    };

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
          <Link to='bubbles' >BubblePage</Link>
          <Link onClick={() => logout()}>Logout</Link>
        </div>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/bubbles" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
