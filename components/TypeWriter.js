import React from "react";
import TypeWriter from "typewriter-effect";

const Typing = () => {
  return (
    <TypeWriter
      options={{
        loop: true,
        wrapperClassName: "text-4xl font-bold text-[#EBD3F8]",
        cursorClassName: "text-4xl",
        
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString("Web Developer")
          .pauseFor(2000)
          .deleteAll()
          .start();
      }}
    />
  );
};

export default Typing;
