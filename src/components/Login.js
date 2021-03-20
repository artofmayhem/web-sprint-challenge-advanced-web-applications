import React, { useEffect } from "react";
import axios from "axios";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  useEffect(()=>{
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login",  )
      .then((res) => {
        //console.log("Resolved Token Value", res.data.payload);
        localStorage.setItem("authToken", res.data.payload);
        // redirect to logged in homepage
        this.props.history.push("/protected");
      })
      .catch((err) => console.log(err));
  });
  return (
    <>
      <h1>
        Welcome to the Bubble App!
        <p>Build a login page here</p>
      </h1>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displayed display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.