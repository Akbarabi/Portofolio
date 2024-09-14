import React from "react";
import Image from "next/image";

const GithubProfile = () => {

  return (
      <div>
        <Image
          src="https://avatars.githubusercontent.com/u/105977749?v=4"
          alt="Avatar"
          width={300}
          height={300}
          className="rounded-lg"
        />
      </div>
  );
};

export default GithubProfile;
