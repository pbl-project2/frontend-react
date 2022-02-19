import React from "react";
import "../Styling/Login.css";

const Login = () => {
  return (
    <div className="main_login">
      <h3>UpMenu</h3>
      <header>
        <h1 className="heading">
          Let's Order Some <span>Food...</span>
        </h1>
      </header>
      <div className="input_fields">
        <p>Lets get you to our canteen menu</p>
        <div className="creds">
          <input type="text" placeholder="Enter your name" />
          <input type="tel" placeholder="Enter Your mobile number" />
          <button>Lesgo </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
