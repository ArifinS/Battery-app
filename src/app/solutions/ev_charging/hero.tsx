import React, { useState } from "react";

const slides = [
  {
    image: "/solutions/ev-charging-1.jpg",
    caption: "Fast & Reliable EV Charging Stations",
  },
  {
    image: "/solutions/ev-charging-2.jpg",
    caption: "Smart Charging for Homes & Businesses",
  },
  {
    image: "/solutions/ev-charging-3.jpg",
    caption: "Sustainable Mobility for the Future",
  },
];

const EVChargingHero = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      className="ev-hero-section"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "65vh",
        background: "linear-gradient(120deg, #e0f7fa 60%, #f9fbe7 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "0",
      }}
    >
      {/* Decorative SVG wave top */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 2,
        pointerEvents: "none"
      }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "60px" }}>
          <path fill="#e0f7fa" fillOpacity="1" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,56C672,48,768,32,864,26.7C960,21,1056,27,1152,34.7C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
      {/* Slide Image */}
      <img
        src={slides[current].image}
        alt={slides[current].caption}
        style={{
          width: "100%",
          height: "65vh",
          objectFit: "cover",
          opacity: 0.13,
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
          background: "linear-gradient(120deg, rgba(224,247,250,0.92), rgba(249,251,231,0.92))",
          zIndex: 1,
        }}
      />
      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          maxWidth: 1000,
          margin: "0 auto",
          padding: "2.5rem 1.5rem",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
          flexWrap: "wrap",
        }}
      >
        {/* Left: Text */}
        <div style={{
          flex: "1 1 350px",
          textAlign: "left",
          maxWidth: 540,
        }}>
          <h1
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3rem)",
              fontWeight: 800,
              color: "#00838f",
              marginBottom: "1.2rem",
              lineHeight: 1.1,
              letterSpacing: "-1px",
            }}
          >
            EV Charging Solutions
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
            Power your electric journey with our next-generation EV charging stations. Enjoy ultra-fast, safe, and smart charging for your home, business, or on the go. Join the green mobility revolution!
          </p>
          {/* Slide Caption */}
          <div
            style={{
              background: "#fff",
              color: "#00838f",
              borderRadius: "1.5rem",
              boxShadow: "0 2px 8px rgba(0,131,143,0.08)",
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
                background: "#00838f",
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
            <span style={{ fontWeight: 600, color: "#00838f" }}>
              {current + 1} / {slides.length}
            </span>
            <button
              onClick={nextSlide}
              aria-label="Next"
              style={{
                background: "#00838f",
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
              background: "#00bfae",
              color: "#fff",
              padding: "0.9rem 2.2rem",
              borderRadius: "2rem",
              fontWeight: 700,
              textDecoration: "none",
              fontSize: "1.1rem",
              boxShadow: "0 2px 8px rgba(0,191,174,0.08)",
              transition: "background 0.2s, transform 0.2s",
              display: "inline-block",
            }}
            onMouseOver={e => (e.currentTarget.style.background = "#00838f")}
            onMouseOut={e => (e.currentTarget.style.background = "#00bfae")}
          >
            Get a Free EV Consultation
          </a>
        </div>
        {/* Right: Slide Image (for desktop) */}
        <div style={{
          flex: "0 1 320px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <img
            src={slides[current].image}
            alt={slides[current].caption}
            style={{
              width: "100%",
              maxWidth: 320,
              minWidth: 180,
              height: "auto",
              borderRadius: "1.5rem",
              boxShadow: "0 4px 24px rgba(0,191,174,0.08)",
              background: "#fff",
              zIndex: 4,
            }}
          />
        </div>
      </div>
      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 900px) {
          .ev-hero-section > div[style*="flex-direction: row"] {
            flex-direction: column !important;
            gap: 1.5rem !important;
            padding: 2rem 0.5rem !important;
          }
          .ev-hero-section h1 {
            font-size: 2rem !important;
          }
        }
        @media (max-width: 600px) {
          .ev-hero-section {
            min-height: 40vh !important;
          }
          .ev-hero-section h1 {
            font-size: 1.3rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default EVChargingHero;