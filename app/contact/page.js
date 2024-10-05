import React from "react";
import About from "./About";
import FormContact from "./FormContact";

const Page = () => {
  return (
    <div className="flex flex-row mx-28 mt-10 items-center h-screen gap-10">
      <div className="w-1/2">
        <FormContact />
      </div>
      <div className="w-1/2">
        <About />
      </div>
    </div>
  );
};

export default Page;
