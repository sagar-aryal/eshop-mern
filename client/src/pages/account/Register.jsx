import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./Form.css";
import { toast } from "react-toastify";

const initialInputValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};

const Register = () => {
  const [inputValues, setInputValues] = useState(initialInputValues);

  const navigate = useNavigate();

  const registerUser = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/user/register",
        inputValues,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      const data = await response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setInputValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    registerUser();
    toast.success("Registered Successfully");
    setInputValues(initialInputValues);
    navigate("/login");
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
