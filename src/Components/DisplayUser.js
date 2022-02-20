import React from "react";
import "../Styling/DisplayUser.css";

const DisplayUser = ({ name, createdAt, mobile_no }) => {
  return (
    <>
      <div className="displayuser">
        <div className="user">
          <div className="user">
            <p>{name}</p>
            <p>{mobile_no}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayUser;
