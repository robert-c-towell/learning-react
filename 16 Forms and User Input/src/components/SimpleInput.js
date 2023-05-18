import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsvalid, setEnteredNameIsValid] = useState(true);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    console.log(enteredName);
    setEnteredName("");
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={`form-control ${!enteredNameIsvalid ? "invalid" : ""}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={}
        />
        {!enteredNameIsvalid ? (
          <p className="error-text">Name must not be empty</p>
        ) : (
          <></>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
