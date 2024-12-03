import React from 'react';
import "./CtaSec.css"
const CtaSection = () => {
  return (
    <section className="cta-section" aria-label="Membership Call to Action">
      <div className="cta-container">
        <div className="cta-row">
          <div className="image-col" role="presentation"></div>
          <div className="content-col">
            <div className="content-card">
              <div className="content-wrapper">
                <h2 className="membership-title">Free 30-Day Membership</h2>
                <p className="membership-description">
                  At arcu neque aliquet laoreet. Id egestas mauris tincidunt ut nulla cras.
                  Non eget sem curabitur vehicula diam integer. Magna tortor dignissim imperdiet
                  pulvinar ante sed metus consequat in. Feugiat id ipsum lacinia nec nunc odio pellentesque.
                </p>
              </div>
              <div className="action-buttons">
                <button className="primary-button" tabIndex="0">Book A Session</button>
                <button className="secondary-button" tabIndex="0">
                  Contact Us
                  <img 
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/badedd5b644f7204002f7d5d312d8c826b247409fea35e951dd91d4a47cb1787?placeholderIfAbsent=true&apiKey=2b6e8b961c0f4ec68177e45379ef793c" 
                    className="button-icon" 
                    alt=""
                    role="presentation"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
