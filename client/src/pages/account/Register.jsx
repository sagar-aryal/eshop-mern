import { useState } from "react";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";

const initialInputValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};

const Register = () => {
  const [inputValues, setInputValues] = useState(initialInputValues);

  const handleChange = (event) => {
    setInputValues((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValues);
    toast.success("Registered Successfully");
    setInputValues(initialInputValues);
  };

  return (
    <div className="form-container">
      <div className="form-content">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={inputValues.name}
              onChange={handleChange}
              autoComplete="off"
              required
              autoFocus
            />
          </div>
          <div className="input-field">
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={inputValues.name}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <div className="input-field">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={inputValues.name}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={inputValues.name}
              onChange={handleChange}
              required
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
