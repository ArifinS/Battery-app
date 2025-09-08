'use client'

import React, { useState } from "react";

const slides = [
  {
    image: "/solutions/battery-storage-1.jpg",
    caption: "Advanced Lithium-ion Storage Solutions",
  },
  {
    image: "/solutions/battery-storage-2.jpg",
    caption: "Seamless Integration for Homes & Industry",
  },
  {
    image: "/solutions/battery-storage-3.jpg",
    caption: "Reliable Backup for Renewable Energy",
  },
];

const BatteryStorageHero = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      className="battery-hero-section"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "65vh",
        background: "linear-gradient(120deg, #e3f0ff 60%, #f9f9f9 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "0",
      }}
    >
      {/* Slide Image */}
      <img
        src={slides[current].image}
        alt={slides[current].caption}
        style={{
          width: "100%",
          height: "65vh",
          objectFit: "cover",
          opacity: 0.18,
          position: "absolute",
          top: 0,
          left: 0,
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
          background: "linear-gradient(120deg, rgba(227,240,255,0.92), rgba(249,249,249,0.92))",
          zIndex: 1,
        }}
      />
      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 900,
          margin: "0 auto",
          padding: "2.5rem 1.5rem",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3rem)",
            fontWeight: 800,
            color: "#034897",
            marginBottom: "1.2rem",
            lineHeight: 1.1,
            letterSpacing: "-1px",
          }}
        >
          Battery Storage Solutions
        </h1>
        <p
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.25rem)",
            color: "#333",
            marginBottom: "1.7rem",
            lineHeight: 1.7,
            fontWeight: 500,
          }}
        >
          Discover our advanced battery storage systems designed for efficiency, safety, and seamless integration with renewable energy sources. Whether for home, business, or industry, our solutions ensure reliable power when you need it most.
        </p>
        {/* Slide Caption */}
        <div
          style={{
            background: "#fff",
            color: "#034897",
            borderRadius: "1.5rem",
            boxShadow: "0 2px 8px rgba(3,72,151,0.08)",
            padding: "0.7rem 1.5rem",
            fontWeight: 600,
            fontSize: "1.1rem",
            marginBottom: "1.2rem",
            display: "inline-block",
            minWidth: 220,
            maxWidth: "90vw",
          }}
        >
          {slides[current].caption}
        </div>
        {/* Slide Controls */}
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", marginBottom: "1.5rem" }}>
          <button
            onClick={prevSlide}
            aria-label="Previous"
            style={{
              background: "#034897",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: 40,
              height: 40,
              fontSize: "1.5rem",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
          >
            &#8592;
          </button>
          <span style={{ fontWeight: 600, color: "#034897" }}>
            {current + 1} / {slides.length}
          </span>
          <button
            onClick={nextSlide}
            aria-label="Next"
            style={{
              background: "#034897",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: 40,
              height: 40,
              fontSize: "1.5rem",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
          >
            &#8594;
          </button>
        </div>
        {/* Call to Action */}
        <a
          href="/Contact"
          style={{
            background: "#0070f3",
            color: "#fff",
            padding: "0.9rem 2.2rem",
            borderRadius: "2rem",
            fontWeight: 700,
            textDecoration: "none",
            fontSize: "1.1rem",
            boxShadow: "0 2px 8px rgba(0,112,243,0.08)",
            transition: "background 0.2s, transform 0.2s",
            display: "inline-block",
          }}
          onMouseOver={e => (e.currentTarget.style.background = "#034897")}
          onMouseOut={e => (e.currentTarget.style.background = "#0070f3")}
        >
          Get a Free Consultation
        </a>
      </div>
      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 700px) {
          .battery-hero-section {
            min-height: 45vh !important;
          }
          .battery-hero-section h1 {
            font-size: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default BatteryStorageHero;