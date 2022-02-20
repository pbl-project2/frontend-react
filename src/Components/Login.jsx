import React, { useState } from "react";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import "../Styling/Login.css";
import { db } from "../firebase/firebase";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [data, setData] = useState({
    name: "",
    mobile_no: "",
    error: null,
    type:"",
  });
  const { name, mobile_no } = data;
  const handleChangeName = (e) => {
    e.preventDefault();
    setData({
      ...data,
      name: e.target.value,
    });
    // console.log(data);
  };
  const handleChangeMobile = (e) => {
    e.preventDefault();
    setData({
      ...data,
      mobile_no: e.target.value,
    });
    // console.log(data);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !mobile_no) {
      alert("Please enter name and mobile number!");
    } else {
      try {
        await addDoc(collection(db, "users"), {
          name,
          mobile_no,
          createdAt: Timestamp.fromDate(new Date()),
          type: "customer",
        });
        // console.log(data.name," ",data.mobile_no, " ", data.error);
        setData({
          name: "",
          mobile_no: "",
          error: null,
          type:"",
        });
        // console.log(data.name," ",data.mobile_no, " ", data.error);
        history.replace("/admin");
      } catch (error) {
        setData({ ...data, error: error.message });
      }
    }
  };
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
          <input
            type="text"
            placeholder="Enter your name"
            onChange={handleChangeName}
          />
          <input
            type="tel"
            placeholder="Enter Your mobile number"
            onChange={handleChangeMobile}
          />
          <button onClick={handleSubmit}>Lesgo</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
