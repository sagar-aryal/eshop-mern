import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="form-container">
      <div className="form-content">
        <h1>Register</h1>
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
          </div>
          <div className="input-field">
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
            />
          </div>

          <div className="btn-field">
            <button>Register</button>
          </div>
          <div className="form-link">
            <span>
              Already have an account? <Link to="/login">Login</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
