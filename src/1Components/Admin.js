import React from "react";
import "../Styling/Admin.css";

function Admin({ user, handleDelete }) {
  return (
      <>
      <div className="adminuser">
      <h1>{user.token}</h1>
      <p>{user.name}</p>
      <button onClick={() => handleDelete(user.id)}>Delete</button>
      </div>
      </>
  );
}

export default Admin;
