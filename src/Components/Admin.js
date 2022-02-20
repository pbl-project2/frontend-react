import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import DisplayUser from "./AdminUsers";

//Styling
import "../Styling/Admin.css";
import AdminUser from "./AdminUsers";

const Admin = () => {
  const [user, setUsers] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "users"), orderBy("createdAt", "desc")),
      (snapshot) => {
        setUsers(snapshot.docs);
      }
    );
    return () => unsubscribe;
  }, [db]);
  return (
    <div>
      <h1>ADMIN</h1>
      <div className="container">
        {user.map((users) => (
          <AdminUser
            key={users.data().mobile_no}
            name={users.data().name}
            mobile_no={users.data().mobile_no}
            createdAt={users.data().createdAt}
          />
        ))}
      </div>
    </div>
  );
};

export default Admin;
