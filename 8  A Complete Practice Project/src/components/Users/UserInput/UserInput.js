import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./UserInput.module.css";

const UserInput = (props) => {
  const [enteredValue, setEnteredValue] = useState({ username: "", age: "" });
  const [isValid, setIsValid] = useState({ username: true, age: true });

  const inputChangeHandler = (event, field) => {
    switch (field) {
      case "username":
        if (event.target.value.trim().length > 0) {
          setIsValid((p) => {
            return { ...p, username: true };
          });
        }
        break;
      case "age":
        if (event.target.value >= 0) {
          setIsValid((p) => {
            return { ...p, age: true };
          });
        }
        break;
      default:
        throw new Error("Unexpected fieldname.");
    }

    setEnteredValue((prevValue) => {
      return {
        ...prevValue,
        [field]: event.target.value,
      };
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.username.trim().length === 0) {
      setIsValid((p) => {
        return { ...p, username: false };
      });
      return;
    }
    if (enteredValue.age === "") {
      setIsValid((p) => {
        return { ...p, age: false };
      });
      return;
    }
    props.onAddUser(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={styles["form-control"]}>
        <div className={`${!isValid.username ? styles.invalid : ""}`}>
          <label>Username</label>
          <input
            type="text"
            value={enteredValue.username}
            onChange={(e) => inputChangeHandler(e, "username")}
          />
        </div>
        <div className={`${!isValid.age ? styles.invalid : ""}`}>
          <label>Age (years)</label>
          <input
            type="text"
            value={enteredValue.age}
            onChange={(e) => inputChangeHandler(e, "age")}
          />
        </div>
      </div>
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default UserInput;
