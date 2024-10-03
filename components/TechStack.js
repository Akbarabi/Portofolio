import React from "react";

import { Col, Row } from "react-bootstrap";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
} from "react-icons/di";

import {
  SiPrisma,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiExpress,
  SiPostman,
} from "react-icons/si";

const icons = [
  { icon: DiHtml5 },
  { icon: DiCss3 },
  { icon: DiJavascript1 },
  { icon: DiReact },
  { icon: SiTailwindcss },
  { icon: DiNodejs },
  { icon: DiGit },
  { icon: SiPrisma },
  { icon: SiMysql },
  { icon: SiPostgresql },
  { icon: SiExpress },
];

function Techstack() {
  return (
    <Row className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 p-4 py-8">
      {icons.map((icon, index) => (
        <Col key={index} className="justify-center box text-center">
          <icon.icon className="text-white" size={80} smooth/>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
