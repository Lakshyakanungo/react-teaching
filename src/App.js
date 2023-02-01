import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const [Submitted, setSubmitted] = useState(false);

  function handleName(e) {
    // console.log(Name, "<---name");
    setName(e.target.value);
  }
  function handleEmail(e) {
    // console.log(Email, "<---name");
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    // console.log(Password, "<---name");
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    console.log(Name, "<--name");
    console.log(Email, "<--email");
    console.log(Password, "<--password");

    e.preventDefault();
    if (Name !== "" && Email !== "" && Password !== "") {
      setSubmitted(true);
    } else {
      console.log("error!");
    }
  }

  return (
    <div>
      <form>
        <label>Name : </label>
        <input type="text" onChange={handleName} name="name" value={Name} />
        <br />
        <label>Email :</label>
        <input type="email" onChange={handleEmail} name="email" value={Email} />
        <br />
        <label>Password</label>
        <input
          type="password"
          onChange={handlePassword}
          name="password"
          value={Password}
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      {Submitted ? <p>Form Submitted</p> : ""}
    </div>
  );
}
