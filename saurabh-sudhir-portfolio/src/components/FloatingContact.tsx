import React from 'react';

export const FloatingContact: React.FC = () => {
  const [pinned, setPinned] = React.useState(false);

  const pinFloat = () => {
    setPinned(!pinned);
  };

  return (
    <div className="float-contact" id="floatContact">
      <div className={`float-contact-inner ${pinned ? 'pinned' : ''}`} id="floatInner">
        <div className="float-icon-tab" onClick={pinFloat} title="Contact">
          <svg viewBox="0 0 24 24">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <a className="float-item" href="mailto:sausud05@gmail.com">
          <svg viewBox="0 0 24 24">
            <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>sausud05@gmail.com</span>
        </a>
        <a className="float-item" href="https://linkedin.com/in/saurabh0501" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 10v7M7 7v.01M12 17v-4a2 2 0 014 0v4M12 13v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>linkedin.com/in/saurabh0501</span>
        </a>
        <a className="float-item" href="tel:+917829391665">
          <svg viewBox="0 0 24 24">
            <path d="M6 2h4l2 5-2.5 1.5a11 11 0 005 5L16 11l5 2v4a2 2 0 01-2 2A17 17 0 014 4a2 2 0 012-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>+91 78293 91665</span>
        </a>
        <a className="float-item hi-item" href="Saurabh_Sudhir_Resume.pdf" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24">
            <path d="M12 3v13M7 11l5 5 5-5M3 20h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Download Resume</span>
        </a>
      </div>
    </div>
  );
};
