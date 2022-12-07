import { useState } from "react";
import { Link } from "react-router-dom";

import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const initialInputValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [inputValues, setInputValues] = useState(initialInputValues);
  const [passwordShown, setPasswordShown] = useState(false);

  const handleChange = (event) => {
    setInputValues((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValues);
    toast.success("Loggin Successfully");
    setInputValues(initialInputValues);
  };

  // Password toggle handler
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="form-container">
      <div className="form-content">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={inputValues.name}
              onChange={handleChange}
              autoComplete="off"
              required
              autoFocus
            />
          </div>
          <div className="input-field">
            <input
              type={passwordShown ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={inputValues.name}
              onChange={handleChange}
              required
            />
            <FaEyeSlash
              onClick={togglePassword}
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                cursor: "pointer",
                color: "rgb(68, 66, 66)",
              }}
            />
          </div>
          <div className="form-link">
            <Link>Forget pasword?</Link>
          </div>
          <div className="btn-field">
            <button type="submit">Login</button>
          </div>
          <div className="form-link">
            <span>
              Don't have an account? <Link to="/register">Register</Link>
            </span>
          </div>
          <div className="line">
            <h2>
              <span>Or</span>
            </h2>
          </div>
          <div className="btn-field google-login">
            <button>
              <FcGoogle
                style={{
                  background: "#fff",
                  height: "25px",
                  width: "25px",
                  borderRadius: "50%",
                  padding: "2px",
                }}
              />
              <span>Login with Google</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
