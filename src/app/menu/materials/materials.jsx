"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "./materials.css";

import { Tab, Tabs } from "react-bootstrap";
import { useState } from "react";

export default function Materials({ materials }) {
  const [key, setKey] = useState(materials[0].name);
  function handleSelect(k) {
    setKey(k);
  }
  const tabs = materials;
  return (
    <div className="materials">
      <Tabs
        id="uncontrolled-tab-example"
        className="mb-0"
        activeKey={key}
        onSelect={(k) => handleSelect(k)}
      >
        {materials.map((material, index) => (
          <Tab
            key={material.name}
            title={material.name}
            
            eventKey={material.name}
            fill="true"
          >
            {index == 0 ? (
              <div className="tab" id="first-tab">
                {Object.entries(material).map(([key, value]) => {
                  if (key == "name") {
                    return;
                  } else {
                    return (
                      <p key={value} className="tabText">
                        {value}
                      </p>
                    );
                  }
                })}
              </div>
            ) : (
              <div className="tab" id="nth-tab">
                {Object.entries(material).map(([key, value]) => {
                  if (key == "name") {
                    return;
                  } else {
                    return (
                      <p key={value} className="tabText">
                        {value}
                      </p>
                    );
                  }
                })}
              </div>
            )}
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
