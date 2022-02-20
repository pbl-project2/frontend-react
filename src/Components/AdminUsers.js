import React from "react";
import "../Styling/AdminUsers.css";

const AdminUser = ({ name, mobile_no }) => {
  return (
    <>
      <div className="adminuser">
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

export default AdminUser;
