"use client";
import { useState, useEffect } from "react";
import LandingCSS from "./landing-page.module.css";

// Landing page component
// This component will be displayed when the user first visits the website
// As the user scrolls down the page, the landing page will be hidden

export default function LandingPage({ productName, brand, bgImage }) {
  // State to determine if the landing page should be displayed
  const [showLandingPage, setShowLandingPage] = useState(true);

  // Return the landing page component

  return (
    <>
      <div
        className={
          showLandingPage
            ? LandingCSS.landingBackground
            : `${LandingCSS.landingBackground} ${LandingCSS.hidden}`
        }
      >
        <img
          className={LandingCSS.bgImage}
          src={bgImage} />

        <div className={`${LandingCSS.header} ${LandingCSS.fadeInUpAnimation}`}>
        <img src="./relabel.png" alt="Relabel" />
        </div>
        <div
          className={`${LandingCSS.landingText} ${LandingCSS.fadeInUpAnimation}`}
        >
          <p>
            LET&apos;S FIND OUT MORE ABOUT YOUR
            <br />
            <b>{productName.toUpperCase()}</b> <br />
            FROM
            <br />
            <b>{brand.toUpperCase()}</b>
          </p>
        </div>
        <div
          className={`${LandingCSS.landingScroll} ${LandingCSS.fadeInUpAnimation}`}
        >
          <p>SWIPE UP</p>
          <img className={LandingCSS.arrow} src="arrow-down-svgrepo-com.svg" />
        </div>
      </div>
    </>
  );
}
