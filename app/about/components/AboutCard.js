import React from "react";
import Image from "next/image";

import { ImPointRight } from "react-icons/im";

const AboutCard = () => {
  return (
    <div className="flex flex-col justify-center text-white mt-20 sm:mt-40">
      <div className="w-full sm:w-[70vh] my-5">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mt-5">
          Know Who I`M
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col">
          <p className="text-lg sm:text-xl md:text-2xl w-full lg:w-[95vh]">
            Hi,{" "}
            <span className="text-[#EBD3F8]">
              I am Muhammad Akbar Abi Santoso
            </span>{" "}
            from Indonesia. <br />I am a{" "}
            <span className="text-[#EBD3F8]">Web Developer</span> with a passion
            for building innovative websites. <br />{" "}
            <span>
              Aside from coding, I enjoy spending time with my family and other
              activities:
            </span>
          </p>
          <ul className="py-3">
            <li className="flex flex-row gap-2 py-2">
              <ImPointRight /> Playing Games
            </li>
            <li className="flex flex-row gap-2 py-2">
              <ImPointRight /> Watering Plant
            </li>
            <li className="flex flex-row gap-2 py-2">
              <ImPointRight /> Read Comic
            </li>
          </ul>
        </div>
        <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
          <Image
            src={"/about.png"}
            alt="profile"
            width={600}
            height={600}
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] relative lg:-right-32 lg:-top-14"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
