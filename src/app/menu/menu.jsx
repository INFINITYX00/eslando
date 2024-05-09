"use client";

import "bootstrap/dist/css/bootstrap.min.css";

import { Accordion } from "react-bootstrap";
import Materials from "./materials/materials";
import CareInstructions from "./careInstructions/careInstructions";
import Recycle from "./recycle/recycle";
import Certifications from "./certifications/certifications";
import "./menu.css";

export default function Menu({ data }) {
  return (
    <>
      <Accordion className="">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Materials</Accordion.Header>
          <Accordion.Body>
            <Materials materials={data.materials} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Care Instructions</Accordion.Header>
          <Accordion.Body>
            <CareInstructions careInstructions={data.careInstructions} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Recycle and Repurpose</Accordion.Header>
          <Accordion.Body>
            <Recycle recycle={data.recycle} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Certifications</Accordion.Header>
          <Accordion.Body>
            <Certifications certifications={data.certifications} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
