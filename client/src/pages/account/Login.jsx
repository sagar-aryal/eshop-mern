import { Link } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
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
            />
          </div>
          <div className="input-field">
            <input type="password" name="password" placeholder="Password" />
            <FaEyeSlash
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
        </form>
      </div>
    </div>
  );
};

export default Login;
