"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const API_URL = "https://api.github.com/users/Akbarabi";

const GithubProfile = () => {
  const [user, setUser] = useState(null);

  const fetchUsers = async () => {
    try {
      const result = await fetch(API_URL);
      const data = await result.json();
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  });

  return (
    <div>
      {user && (
        <div className="flex flex-row">
          <Image
            src={user.avatar_url}
            alt="Avatar"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <div>
            <h1>My name is {user.name}</h1>
            <h1>
              {user.bio}
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default GithubProfile;
