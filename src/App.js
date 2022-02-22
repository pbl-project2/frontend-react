import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddUsers from "./1Components/AddUsers";
import Admin from "./1Components/Admin";
import Customer from "./1Components/Customer";
import { db } from "./firebase/firebase";

function App1() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "users"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let userArr = [];
      querySnapshot.forEach((doc) => {
        userArr.push({ ...doc.data(), id: doc.id });
      });
      setUser(userArr);
    });
    return () => unsubscribe();
  });

  const handleEdit = async (user, title) => {
    await updateDoc(doc(db, "users", user.id), { title: title });
  };
  const toggleComplete = async (user) => {
    await updateDoc(doc(db, "users", user.id), {
      completed: !user.completed,
    });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "users", id));
  };

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <AddUsers />
          </Route>
          <Route path="/admin" exact>
            <div className="user_container">
              <h1>ADMIN PAGE</h1>
              {users.map((user) => (
                <Admin key={user.id} user={user} handleDelete={handleDelete} />
              ))}
            </div>
          </Route>
          <Route path="/customer">
            <Customer />
          </Route>
        </Switch>
      </Router>
      {/* <div>
        <div>
          <Title />
        </div>
        <div>
          <AddUser />
        </div>
        <div className="todo_container">
          {users.map((user) => (
            <User
              key={user.id}
              user={user}
              toggleComplete={toggleComplete}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default App1;
