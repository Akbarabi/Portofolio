import React from "react";
import About from "./About";
import FormContact from "./FormContact";

const Contact = () => {
  return (
    <div className="flex flex-row mx-28 mt-10">
        <FormContact />
        <About />
    </div>
  );
};

export default Contact;
