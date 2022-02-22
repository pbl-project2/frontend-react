import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { db } from "../firebase/firebase";
import "../Styling/Login.css";

function AddUsers() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const history = useHistory();
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     if (name !== "" || mobile !== "") {
  //       let timestamp = serverTimestamp();
  //       let token = Math.floor(Math.random() * 100 + 1);
  //       await addDoc(collection(db, "todos"), {
  //         name,
  //         mobile,
  //         token,
  //         timestamp,
  //         completed: false,
  //       });
  //       setMobile("");
  //       setName("");
  //       history.replace("/user");
  //     }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name !== "" || mobile !== "") {
      let timestamp = serverTimestamp();
      let token = Math.floor(Math.random() * 100 + 1);
      await addDoc(collection(db, "todos"), {
        name,
        mobile,
        token,
        timestamp,
        completed: false,
      });
      setMobile("");
      setName("");
      history.replace("/user");
    }
  };
  return (
    <div className="main_login">
      <div className="container">
        <h3>UpMenu</h3>
        <button>Login</button>
      </div>
      <header>
        <h1 className="heading">
          Let's Order Some <span>Food...</span>
        </h1>
      </header>
      <div className="input_fields">
        <p>Lets get you to our canteen menu</p>
        <form action="" onSubmit={handleSubmit}>
          <div className="creds">
            <input
              type="text"
              placeholder="Enter Name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Mobile number..."
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <button>Lesgo</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUsers;
