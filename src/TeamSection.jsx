
import React from 'react';
import "./Team.css"




const TeamSection = () => {
  const teamMembersTop = [
    'https://cdn.builder.io/api/v1/image/assets/TEMP/7aba85b65f632da2d737925b6eb0f7f47e34d16028848374f92c73b2d7faa460',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/73b8ccacdcdb87fe0db2edf5ffefdcafaa23ffda5a0096d827562e85c502ef65',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/ce133556bb79de317ebd57516039c703ee0c5a7b3c72c3bbcc523f4b79f597d5',
  ];

  const teamMembersBottom = [
    'https://cdn.builder.io/api/v1/image/assets/TEMP/befc2d9e4240e1566a6130942e46b97d004499c37fb72e831c8a549a43265e51',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/995ecbdac83bbaad7b6bf0936732c5979f3f10f46f26794205b24757ab951bea',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/be70dec0b798093c3fe20d30dd36189c48f64bebfb8dc195fcaf2f698df9d3bf',
  ];

  return (
    <section className="team-section" aria-labelledby="team-section-title">
      <div className="team-container">
        <div className="team-content">
          <header className="team-header">
            <h2 id="team-section-title" className="team-title">
              <span>Our Great</span>
              <span>Team</span>
            </h2>
            <p className="team-subtitle">Sub Heading To Explain More</p>
          </header>
          <p className="team-description">
            At arcu neque aliquet laoreet. Id egestas mauris tincidunt ut nulla cras.
            Non eget sem curabitur vehicula diam integer. Magna tortor dignissim imperdiet
            pulvinar ante sed metus consequat in. Feugiat id ipsum lacinia nec nunc odio pellentesque.
          </p>
        </div>
      </div>
      
      <div className="team-grid-top">
        <div className="team-row">
          {teamMembersTop.map((src, index) => (
            <div className="team-member" key={`top-member-${index}`}>
              <img loading="lazy" src={src} className="member-image" alt={`Team member ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="team-grid-bottom">
        <div className="team-row">
          {teamMembersBottom.map((src, index) => (
            <div className="team-member" key={`bottom-member-${index}`}>
              <img loading="lazy" src={src} className="member-image" alt={`Team member ${index + 4}`} />
            </div>
          ))}
        </div>
        <button className="learn-more-btn" tabIndex="0">Learn More About Us</button>
      </div>
    </section>
  );
};

export default TeamSection;
