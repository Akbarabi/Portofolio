import React from "react";
import TypeWriter from "typewriter-effect";

const Typing = () => {
  return (
    <TypeWriter
      onInit={(typewriter) => {
        typewriter
          .typeString("Web Developer")
          .pauseFor(2000)
          .deleteAll()
          .start()
      }}
      options={{ loop: true }}
    />
  );
};

export default Typing;
