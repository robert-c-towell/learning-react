import React, { useState } from "react";

import UserList from "./components/Users/UserList/UserList";
import UserInput from "./components/Users/UserInput/UserInput";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);

  const addUserHandler = (newUser) => {
    setUsers((oldUsers) => {
      const updatedUsers = [...oldUsers];
      updatedUsers.unshift({
        username: newUser.username,
        age: newUser.age,
        id: Math.random().toString(),
      });
      return updatedUsers;
    });
  };

  const deleteItemHandler = (userId) => {
    setUsers((oldUsers) => {
      const updatedUsers = oldUsers.filter((user) => user.id !== userId);
      return updatedUsers;
    });
  };

  let content = <p style={{ textAlign: "center" }}>No users found.</p>;

  if (users.length > 0) {
    content = <UserList items={users} onDeleteItem={deleteItemHandler} />;
  }

  return (
    <div>
      <section id="goal-form">
        <UserInput onAddUser={addUserHandler} />
      </section>
      <section id="goals">{content}</section>
    </div>
  );
};

export default App;
