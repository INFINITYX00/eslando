import React from "react";
import Title from "../title/title";
import CertCSS from "./certifications.module.css";

export default function Certifications({ certifications }) {
  return (
    <div>
      <Title title="Certifications" />
      <div className={CertCSS.imgContainer}>
        {certifications.BCorp && (
          <div>
            <img
              className={CertCSS.bcorpImage}
              src="./bcorp.png"
              alt="BCorp image"
            />
          </div>
        )}
        {certifications.GOTS && (
          <div>
            <img className={CertCSS.gotsImage} src="./gots.png" alt="GOTS image" />
          </div>
        )}
      </div>
    </div>
  );
}
