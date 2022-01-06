import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { auth } from "./firebase";

const Login = () => {
  const [userMail, setUserMail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate()
  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        userMail,
        password
      )
      setUserMail("")
      setPassword("")
        console.log(user)
        alert("successfully sign in")
        navigate("/")
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="header">
      <form>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            id="email"
            value={userMail}
            onChange={(e) => setUserMail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            id="pwd"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-success" onClick={loginSubmit}>
          login
        </button>
      </form>
    </div>
  );
};

export default Login;
