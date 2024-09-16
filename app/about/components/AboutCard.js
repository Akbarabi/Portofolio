import React from "react";
import Image from "next/image";

import { ImPointRight } from "react-icons/im";

const AboutCard = () => {
  return (
    <div className="flex flex-col justify-center text-white mt-40">
      <div className="w-[70vh] my-5">
        <h1 className="text-5xl font-semibold text-center mt-5">
          Know Who I`M
        </h1>
      </div>
      <div className="flex md:flex lg:flex-row">
        <div className="md:w-1/2 flex flex-col">
          <p className="text-2xl w-[95vh]">
            Hi,{" "}
            <span className="text-[#EBD3F8]">
              I am Muhammad Akbar Abi Santoso
            </span>{" "}
            from Indonesia. <br />I am a{" "}
            <span className="text-[#EBD3F8]">Web Developer</span> with a passion
            for bulding innovative website. <br />{" "}
            <span>
              Aside from coding, I enjoy spending time with my family and other
              activities :
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
          <Image
            src={"/about.png"}
            alt="profile"
            width={600}
            height={600}
            className="-right-36 -top-14 image flex relative"
            priority
          />
      </div>
    </div>
  );
};

export default AboutCard;
