import React, { useState } from 'react';
import './Preview.css';

const Preview = () => {
  const [activeTab, setActiveTab] = useState('Beginners Yoga');

  const tabContent = {
    'Beginners Yoga': 'This is a yoga class perfect for beginners. It focuses on basic poses and breathing techniques.',
    'Stretching': 'This class focuses on deep stretching to improve flexibility and relieve tension.',
    'Fly-Yoga': 'Fly-Yoga combines traditional yoga poses with aerial techniques using hammocks.',
    'Yin Yoga': 'A slower-paced class with deep stretches to target connective tissues.',
    'Flo Yoga': 'A dynamic, flowing yoga class that focuses on continuous movement and breath synchronization.',
  };

  return (
    <section className="yoga-section">
      <div className="section-container">
        <header className="section-header">
          <div className="header-content">
            <h1 className="section-title">Latest Classes</h1>
            <p className="section-subtitle">Sub Heading To Explain More</p>
          </div>
        </header>
      </div>

      <div className="content-container">
        <nav
          className="tabs-wrapper"
          role="navigation"
          aria-label="Yoga class types"
        >
          <div className="tabs-list">
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                className={`tab-item ${activeTab === tab ? 'tab-item-active' : ''}`}
                role="tab"
                aria-selected={activeTab === tab}
                tabIndex="0"
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </nav>

        <div className="content-grid">
          <div className="image-column">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd4dddbdbc9b597c5fc99a517ed51aa1098dd8555684e03d00e0e5f46c6816b2?placeholderIfAbsent=true&apiKey=2b6e8b961c0f4ec68177e45379ef793c"
              alt="Yoga class demonstration"
              className="yoga-image"
            />
          </div>

          <div className="content-column">
            <div className="content-header">
              <h2 className="content-title">{activeTab}</h2>
              <p className="content-description">{tabContent[activeTab]}</p>
            </div>

            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-number" aria-label="Feature 1">1</div>
                <h3 className="feature-title">Free Rugs</h3>
                <p className="feature-description">
                  Felis lectus sit aliquet gravida pretium dui netus et. Lacus
                  in molestie in diam lorem.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-number" aria-label="Feature 2">2</div>
                <h3 className="feature-title">Changing Room</h3>
                <p className="feature-description">
                  Felis lectus sit aliquet gravida pretium dui netus et. Lacus
                  in molestie in diam lorem.
                </p>
              </div>
            </div>

            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-number" aria-label="Feature 3">3</div>
                <h3 className="feature-title">Free Rugs</h3>
                <p className="feature-description">
                  Felis lectus sit aliquet gravida pretium dui netus et. Lacus
                  in molestie in diam lorem.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-number" aria-label="Feature 4">4</div>
                <h3 className="feature-title">Changing Room</h3>
                <p className="feature-description">
                  Felis lectus sit aliquet gravida pretium dui netus et. Lacus
                  in molestie in diam lorem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="cta-button" aria-label="Start free trial">
        Get A Free Trial
      </button>
    </section>
  );
};

export default Preview;
