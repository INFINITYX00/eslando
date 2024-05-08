import React from "react";
import Title from "../title/title";

export default function Certifications({ certifications }) {
  return (
    <div>
      <Title title="Certifications" />
      {certifications.BCorp && (
        <div>
          <img src="recycleImage" alt="BCorp image" />
        </div>
      )}
      {certifications.GOTS && (
        <div>
          <img src="washImage" alt="GOTS image" />
        </div>
      )}
    </div>
  );
}
