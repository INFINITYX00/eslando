"use client";
import { useState, useEffect } from "react";
import LandingCSS from "./landing-page.module.css";

// Landing page component
// This component will be displayed when the user first visits the website
// As the user scrolls down the page, the landing page will be hidden

export default function LandingPage() {
  // State to determine if the landing page should be displayed
  const [showLandingPage, setShowLandingPage] = useState(true);

  // Event listener to check if the user has scrolled down the page
  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down the page
      if (window.scrollY > 0) {
        // Hide the landing page
        setShowLandingPage(false);
      }
    };
    // Add event listener to check if the user has scrolled down the page
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        <img className={LandingCSS.bgImage} src="https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?q=80&w=3284&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" alt="Clothing image"></img>

        <div className={LandingCSS.header}>
          <h1>RELABEL</h1>
        </div>
        <div className={LandingCSS.landingText}>
          <p>
            LET&apos;S FIND OUT MORE ABOUT YOUR
            <br />
            <b>FLEECE DENIM JACKET</b> <br />
            FROM
            <br />
            <b>DENIMOLOGY</b>
          </p>
        </div>
        <div className={LandingCSS.landingScroll}>
          <p>SCROLL DOWN</p>
          <img className={LandingCSS.arrow} src="arrow-down-svgrepo-com.svg" />
        </div>
        </div>
    </>
  );
}
