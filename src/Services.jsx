import React from "react";
import "./Services.css"; // Assuming the CSS is in this file
import backy from "./assets/Vector.png"











const Services = () => {
  return (
    <div className="whole">

    <div className="services-section">
      <div className="services-container">
        <div className="header-wrapper">
          <div className="header-content">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">Sub Heading To Explain More</p>
          </div>
        </div>
     

      <div className="services-grid">
        <div className="services-row">
          {/* Trial Card */}
          <div className="trial-card">
            <div className="trial-content">
              <h3 className="trial-title">Get Started With Your Free Trial</h3>
              <div className="trial-wrapper">
                <p className="trial-description">
                  Libero nunc facilisis auctor diam suspendisse pharetra nisi.
                  Mauris ornare imperdiet.
                </p>
                <button className="trial-button" tabIndex="0">
                  Get Started Today
                </button>
              </div>
            </div>
          </div>

          {/* Service Cards */}
          {serviceCards.map((card, index) => (
            <div className="service-card" key={index}>
              <img
                src={card.imgSrc}
                alt={card.alt}
                className="service-icon"
                loading="lazy"
              />
              <div className="service-content">
                <h3 className="service-title">{card.title}</h3>
                <div className="service-wrapper">
                  <p className="service-description">{card.description}</p>
                  <button className="service-button" tabIndex="0">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
<img src={backy} alt="" />

    </div>
    </div>
    </div>
  );
};

const serviceCards = [
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5968b87e04b8dd4affff2ba1c13983d0dd4375f68bca34bba1ae43ca072665d7",
    alt: "Spa Area Services Icon",
    title: "Spa Area",
    description:
      "Libero nunc facilisis auctor diam suspendisse pharetra nisi. Mauris ornare imperdiet.",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/52754793fafdfcf99e2629fb17535e89af5ebb26b50eb3ff1bc1a3cf136423aa",
    alt: "Changing Rooms Icon",
    title: "Changing Rooms",
    description:
      "Libero nunc facilisis auctor diam suspendisse pharetra nisi. Mauris ornare imperdiet.",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/52754793fafdfcf99e2629fb17535e89af5ebb26b50eb3ff1bc1a3cf136423aa",
    alt: "Changing Rooms Icon",
    title: "Changing Rooms",
    description:
      "Libero nunc facilisis auctor diam suspendisse pharetra nisi. Mauris ornare imperdiet.",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/52754793fafdfcf99e2629fb17535e89af5ebb26b50eb3ff1bc1a3cf136423aa",
    alt: "Changing Rooms Icon",
    title: "Changing Rooms",
    description:
      "Libero nunc facilisis auctor diam suspendisse pharetra nisi. Mauris ornare imperdiet.",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d375d085804c23538dd1c9743e068c828467758b66c91498df888559ab48ca88",
    alt: "Free Lessons Icon",
    title: "Free Lessons",
    description:
      "Libero nunc facilisis auctor diam suspendisse pharetra nisi. Mauris ornare imperdiet.",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2be970befdc4f553f364f383c432c0b5c90f525959fa5d41dbbfda187d5c775c",
    alt: "Free Rugs Icon",
    title: "Free Rugs",
    description:
      "Libero nunc facilisis auctor diam suspendisse pharetra nisi. Mauris ornare imperdiet.",
     
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d375d085804c23538dd1c9743e068c828467758b66c91498df888559ab48ca88",
    alt: "Free Lessons Icon",
    title: "Free Lessons",
    description:
      "Libero nunc facilisis auctor diam suspendisse pharetra nisi. Mauris ornare imperdiet.",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2be970befdc4f553f364f383c432c0b5c90f525959fa5d41dbbfda187d5c775c",
    alt: "Free Rugs Icon",
    title: "Free Rugs",
    description:
      "Libero nunc facilisis auctor diam suspendisse pharetra nisi. Mauris ornare imperdiet.",
     
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d375d085804c23538dd1c9743e068c828467758b66c91498df888559ab48ca88",
    alt: "Free Lessons Icon",
    title: "Free Lessons",
    description:
      "Libero nunc facilisis auctor diam suspendisse pharetra nisi. Mauris ornare imperdiet.",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2be970befdc4f553f364f383c432c0b5c90f525959fa5d41dbbfda187d5c775c",
    alt: "Free Rugs Icon",
    title: "Free Rugs",
    description:
      "Libero nunc facilisis auctor diam suspendisse pharetra nisi. Mauris ornare imperdiet.",
     
  },
];

export default Services;
