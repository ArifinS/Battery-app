import React from "react";

const HeroSections = () => (
  <section
    className="hero-section"
    style={{
      padding: 0,
      margin: 0,
      minHeight: "100vh",
      width: "100%",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Video background */}
    <video
      autoPlay
      loop
      muted
      playsInline
      poster="/images/hero.gif" // Use GIF as fallback if video fails
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: 0,
      }}
    >
      <source
        src="/images/hero.gif"
        type="video/mp4"
      />
      <img
        src="/images/hero.gif" // Reference the GIF in the public/images folder
        alt="Hero Animation"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </video>

    {/* Overlay (optional gradient) */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        // background:
        //   "linear-gradient(120deg, rgba(227,240,255,0.4), rgba(249,249,249,0.4))",
        zIndex: 1,
      }}
    />

    {/* Buttons only */}
    <div
      style={{
        position: "relative",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        padding: "0 1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      ></div>
    </div>
  </section>
);

export default HeroSections;