import React, { useState } from "react";
import { axiosWithAuth } from "../helpers/axiosWithAuth";
import { useHistory } from "react-router";
import { Button, TextField } from '@material-ui/core'
import lady from "../assets/streetart.png";

const initialCredentials = {
  username: "",
  password: "",
};

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const history = useHistory();
  const [credentials, SetCredentials] = useState(initialCredentials);

  const handleChange = (e) => {
    SetCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
    console.log(credentials);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
    .post("http://localhost:5000/api/login", credentials)
    .then(res => {
      localStorage.setItem('authToken', res.data.payload )
      history.push('/bubbles')
    })
    .catch(error => {
      console.log('ERR_1: This error is from Login', error)
    })
  };

 
  return (
    <div className="parallax-wrapperSeven" style={{ marginTop: "300vh" }}>
      <div className="content" style={{ textAlign: "right" }}>
          <h1>ログインする</h1>
          <h3>- L O G I N -</h3>
        <img src={lady} alt="street number one" />
        <form
          onSubmit={handleSubmit}
          className="d-flex justify-content-start flex-column"
          style={{ maxWidth: "20%", textAlign: "center" }}
        >
        
          <TextField
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            variant="outlined"
            label="Username"
            margin="dense"
            color="primary"
            style={{ backgroundColor: "white" }}
          />
          <TextField
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            variant="outlined"
            label="Password"
            margin="dense"
            color="primary"
            style={{ backgroundColor: "white" }}
          />

          <Button onClick={handleSubmit} style={{color: 'white', border: '.5px solid white'}}>Login</Button>
        </form>
        <div
          className="d-flex flex-column justify-content-between align-items-center"
          style={{
            minHeight: "10vh",
            backgroundColor: "#222",
            color: "white",
          }}
        >
          <div className="d-flex flex-column justify-content-between align-items-center">
            <h6 style={{ marginTop: "10rem" }}>- C O L O R P A G E S -</h6>
            <h6 style={{ lineHeight: "2" }}>
              Tokyo . Honolulu . Los Angeles . Seattle
            </h6>
            <h3>カラーページ</h3>
          </div>
          <div>
            <h6>Contact us: tony.miller@blackthought.tech</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displayed display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
