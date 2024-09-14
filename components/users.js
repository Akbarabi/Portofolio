import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import GithubProfile from "./image";

const API_URL = "https://api.github.com/users/Akbarabi";

const Users = () => {
  const [result, setResult] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setResult(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      {result && (
        <div>
          <h1>My name is {result.name}</h1>
          <h1>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</h1>
          <h1>I`m interested in building a <span className="text-blue-200">Web Technologies and Products</span></h1>
        </div>
      )}
    </>
  );
};

export default Users;
