import React from 'react';

export const ContactSection: React.FC = () => {
  return (
    <>
      <section id="contact">
        <div className="section-header fade-up visible">
          <span className="section-num">03</span>
          <h2 className="section-title">Contact &amp; Resume</h2>
          <div className="section-rule"></div>
        </div>

        <div className="contact-grid">
          <div>
            <div className="contact-headline">
              Let&apos;s build something <br />that <em>solves</em> a real problem.
            </div>
            <p className="contact-body">
              I am open to full-time Product Management roles, consulting opportunities, and conversations about AI product design, systems thinking, and structural problem-solving.
            </p>
            <div className="contact-links">
              <a className="contact-link" href="mailto:sausud05@gmail.com">
                <div>
                  <div className="contact-link-label">Email</div>
                  <div className="contact-link-value">sausud05@gmail.com</div>
                </div>
                <div className="contact-link-arrow">↗</div>
              </a>
              <a className="contact-link" href="https://linkedin.com/in/saurabh0501" target="_blank" rel="noopener noreferrer">
                <div>
                  <div className="contact-link-label">LinkedIn</div>
                  <div className="contact-link-value">linkedin.com/in/saurabh0501</div>
                </div>
                <div className="contact-link-arrow">↗</div>
              </a>
              <a className="contact-link" href="tel:+917829391665">
                <div>
                  <div className="contact-link-label">Phone</div>
                  <div className="contact-link-value">+91 78293 91665</div>
                </div>
                <div className="contact-link-arrow">↗</div>
              </a>
            </div>
          </div>

          <div>
            <div className="contact-resume-block">
              <span className="contact-resume-label">Download Area</span>
              <div className="contact-resume-title">Looking for a Product Manager who gets the details?</div>
              <p className="contact-resume-note">
                Download my complete, direct-application resume to view my full employment chronology, specific technology proficiencies, and detailed enterprise product achievements.
              </p>
              <a className="btn-resume" href="Saurabh_Sudhir_Resume.pdf" target="_blank" rel="noopener noreferrer">
                Download Resume PDF (154 KB) ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-copy">&copy; {new Date().getFullYear()} Saurabh Sudhir. All rights reserved.</div>
        <div className="footer-name">Saurabh Sudhir &nbsp;·&nbsp; AI Product Manager</div>
      </footer>
    </>
  );
};
