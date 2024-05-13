"use client";
import { useState, useEffect } from "react";
import LandingCSS from "./landing-page.module.css";

export default function LandingPage() {
  const [showLandingPage, setShowLandingPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down the page
      if (window.scrollY > 0) {
        setShowLandingPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={
        showLandingPage
          ? LandingCSS.landingWrapper
          : `${LandingCSS.landingWrapper} ${LandingCSS.hidden}`
      }
    >
      <h1 className={LandingCSS.test}>Hello this is a test</h1>
    </div>
  );
}
