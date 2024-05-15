import React from "react";
import Title from "../title/title";
import CertCSS from "./certifications.module.css";

export default function Certifications({ certifications }) {
  return (
    <div>
      <Title title="Certifications" />
      <div className={CertCSS.imgContainer}>
        {certifications.BCI && (
          <div>
            <img className={CertCSS.BCIImage} src="./BCI.png" alt="BCI image" />
          </div>
        )}
        {certifications.BCorp && (
          <div>
            <img
              className={CertCSS.bcorpImage}
              src="./bcorp.png"
              alt="BCorp image"
            />
          </div>
        )}
        {certifications.BLUESIGN && (
          <div>
            <img
              className={CertCSS.BLUESIGNImage}
              src="./BLUESIGN.png"
              alt="BLUESIGN image"
            />
          </div>
        )}
        {certifications.Fairtrade && (
          <div>
            <img
              className={CertCSS.FairtradeImage}
              src="./Fairtrade.png"
              alt="Fairtrade image"
            />
          </div>
        )}
        {certifications.FSC && (
          <div>
            <img className={CertCSS.FSCImage} src="./FSC.png" alt="FSC image" />
          </div>
        )}
        {certifications.GOTS && (
          <div>
            <img
              className={CertCSS.gotsImage}
              src="./gots.png"
              alt="GOTS image"
            />
          </div>
        )}
        {certifications.OKEOTEX && (
          <div>
            <img
              className={CertCSS.OKEOTEXImage}
              src="./OKEOTEX.png"
              alt="OKEOTEX image"
            />
          </div>
        )}
        {certifications.WRAP && (
          <div>
            <img
              className={CertCSS.WRAPImage}
              src="./WRAP.png"
              alt="WRAP image"
            />
          </div>
        )}
      </div>
    </div>
  );
}
