import "../App.css";
import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  
} from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

function Register() {
  //   const [name, setName] = useState("");
  const [registerMail, setRegisterMail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  //   const [description, setDescription] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerMail,
        registerPassword
      );
      console.log(user);
      setRegisterMail("");
      setRegisterPassword("");
      alert("id has successfully submitted");
        navigate("/")
    } catch (err) {
      console.log(err.message);
    }
  };



  return (
    <div>
      <form>
        {/* <div className="form-group">
          <label for="name">Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          /> */}
        {/* </div> */}
        <div className="form-group">
          <label htmlFor="mail">Email:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            id="mail"
            value={registerMail}
            onChange={(e) => setRegisterMail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwdd">Password:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            id="pwdd"
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
        </div>

        {/* <div className="form-group">
          <label for="comment">Comment:</label>
          <textarea
            className="form-control"
            rows="5"
            id="comment"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div> */}

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Register
        </button>
      </form>
    
    </div>
  );
}

export default Register;
