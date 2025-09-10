import React from 'react';
import './HoverTipBox.css';

const HoverTipBox = () => {
  // Scroll to top handler
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="hover">
      <div className="scroll-to-top-container">
        <div
          className="scroll-to-top-btn"
          onClick={handleScrollToTop}
          title="Scroll to top"
        >
          ↑
        </div>
      </div>
      <div className="hover-tip-container">
        <div className="hover-tip-icon">i</div>
        <div className="hover-tip-box">
          <h4>Tips:</h4>
          <ul>
            <li>Hover near the top of the screen to reveal the navigation bar.</li>
            <li>Click any card to view details or be redirected to the linked page.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HoverTipBox;
