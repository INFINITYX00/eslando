import React from "react";
import Title from "../title/title";

export default function Certifications({ certifications }) {
  return (
    <div>
      <Title title="Certifications" />
      {certifications.recycle && (
        <div>
          <img src="recycleImage" alt="recyle image" />
        </div>
      )}
      {certifications.wash && (
        <div>
          <img src="washImage" alt="wash image" />
        </div>
      )}
    </div>
  );
}
