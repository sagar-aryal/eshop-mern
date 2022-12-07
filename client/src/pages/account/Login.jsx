import { useState } from "react";
import { Link } from "react-router-dom";

import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="form-container">
      <div className="form-content">
        <h1>Login</h1>
        <form>
          <div className="input-field">
            <input
              type="text"
              name="email"
              placeholder="Email"
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
            <button>Login</button>
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
