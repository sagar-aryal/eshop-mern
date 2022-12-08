import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

axios.defaults.withCredentials = true;

const User = () => {
  const [user, setUser] = useState("");

  const getUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/user/getUser",
        {
          withCredentials: true,
        }
      );
      const data = await response.data;
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser().then((data) => setUser((prev) => ({ ...prev, data })));
  }, []);

  return <div>{user && <h1>Welcome {user.firstname}</h1>}</div>;
};

export default User;
