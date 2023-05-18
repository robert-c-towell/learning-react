import React from "react";

import UserListItem from "../UserListItem/UserListItem";
import "./UserList.css";

const UserList = (props) => {
  return (
    <ul className="goal-list">
      {props.items.map((user) => (
        <UserListItem key={user.id} id={user.id} username={user.username} age={user.age} onDelete={props.onDeleteItem}>
          {user.username} ({user.age} years old)
        </UserListItem>
      ))}
    </ul>
  );
};

export default UserList;
