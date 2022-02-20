// import { collection, query, where, onSnapshot, doc } from "firebase/firestore";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import DisplayUser from "./DisplayUser";

const Display = () => {
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
      {user.map(users => (
        <DisplayUser
          key={users.data().mobile_no}
          name={users.data().name}
          mobile_no={users.data().mobile_no}
          createdAt={users.data().createdAt}
        />
      ))}
    </div>
  );
};

export default Display;
