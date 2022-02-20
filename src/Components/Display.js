import { collection, query, where, onSnapshot, doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";

const Display = () => {
//   const [data, setData] = useState([]);
  useEffect(() => {
    const ref = collection(db, "users");
    const q = query(ref, where("name", "==", "Mrudul"));
    const unsub = onSnapshot(q, (snapshot) => {
      let data = [];
      snapshot.forEach((doc) => {
        console.log(doc.data());
      });
    //   setData(data);
    });
    return () => {
      unsub();
    };
  }, []);
//   console.log(data);
  return (
    <div>
      {/* <h1>Hello World</h1> */}
      <p>Hello</p>
    </div>
  );
};

export default Display;
