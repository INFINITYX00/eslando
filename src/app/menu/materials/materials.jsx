"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "./materials.css";

import { Tab, Tabs } from "react-bootstrap";

export default function Materials({ materials }) {
  const tabs = materials;
  return (
    <div className="materials">
      <Tabs id="uncontrolled-tab-example" className="mb-3" fill>
        {materials.map((material) => (
          <Tab
            key={material.name}
            title={material.name}
            eventKey={material.name}
          >
            {Object.entries(material).map(([key, value]) => {
              console.log("Hello");
              if (key == "name") {
                return;
              } else {
                return <p key="value">{value}</p>;
              }
            })}
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
