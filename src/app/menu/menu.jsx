"use client";

import "bootstrap/dist/css/bootstrap.min.css";

import { Accordion } from "react-bootstrap";
import Materials from "./materials/materials";
import CareInstructions from "./careInstructions/careInstructions";
import Recycle from "./recycle/recycle";

export default function Menu({ data }) {
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Materials</Accordion.Header>
          <Accordion.Body>
            <Materials materials={data.materials} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Care Instructions</Accordion.Header>
          <Accordion.Body>
           <CareInstructions careInstructions={data.careInstructions}/>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Recycle and Repurpose</Accordion.Header>
          <Accordion.Body>
            <Recycle recycle={data.recycle}/>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
