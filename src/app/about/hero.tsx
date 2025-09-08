import React from "react";

const AboutHero = () => (
  <section
    className="about-hero-section"
    style={{
      position: "relative",
      width: "100%",
      minHeight: "60vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(120deg, #e3f0ff 60%, #f9f9f9 100%)",
      overflow: "hidden",
      padding: "0",
    }}
  >
    {/* Optional background image */}
    <img
      src="/about/about-hero.jpg"
      alt="About Us"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        opacity: 0.18,
        zIndex: 0,
        pointerEvents: "none",
        userSelect: "none",
      }}
    />
    {/* Overlay */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(120deg, rgba(227,240,255,0.8), rgba(249,249,249,0.8))",
        zIndex: 1,
      }}
    />
    {/* Content */}
    <div
      style={{
        position: "relative",
        zIndex: 2,
        textAlign: "center",
        maxWidth: 700,
        margin: "0 auto",
        padding: "2rem 1rem",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(2rem, 5vw, 2.8rem)",
          fontWeight: 800,
          color: "#034897",
          marginBottom: "1rem",
          lineHeight: 1.1,
        }}
      >
        About Us
      </h1>
      <p
        style={{
          fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
          color: "#333",
          marginBottom: "1.5rem",
          lineHeight: 1.6,
        }}
      >
        We are passionate about powering the future with innovative battery and energy solutions.
        Our mission is to deliver reliable, sustainable, and cutting-edge technology for a greener tomorrow.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.2rem",
          flexWrap: "wrap",
        }}
      >
        <a
          href="/"
          style={{
            background: "#034897",
            color: "#fff",
            padding: "0.8rem 2rem",
            borderRadius: "2rem",
            fontWeight: 600,
            textDecoration: "none",
            transition: "background 0.2s, transform 0.2s",
            boxShadow: "0 2px 8px rgba(3,72,151,0.08)",
            display: "inline-block",
          }}
          onMouseOver={e => (e.currentTarget.style.background = "#0070f3")}
          onMouseOut={e => (e.currentTarget.style.background = "#034897")}
        >
          Home
        </a>
        <a
          href="/Contact"
          style={{
            background: "#fff",
            color: "#034897",
            border: "2px solid #034897",
            padding: "0.8rem 2rem",
            borderRadius: "2rem",
            fontWeight: 600,
            textDecoration: "none",
            transition: "background 0.2s, color 0.2s, transform 0.2s",
            boxShadow: "0 2px 8px rgba(3,72,151,0.04)",
            display: "inline-block",
          }}
          onMouseOver={e => {
            e.currentTarget.style.background = "#034897";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseOut={e => {
            e.currentTarget.style.background = "#fff";
            e.currentTarget.style.color = "#034897";
          }}
        >
          Contact Us
        </a>
      </div>
    </div>
    {/* Responsive styles */}
    <style jsx>{`
      @media (max-width: 600px) {
        .about-hero-section {
          min-height: 40vh !important;
        }
      }
    `}</style>
  </section>
);

export default AboutHero;