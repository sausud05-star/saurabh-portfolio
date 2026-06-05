import React from 'react';

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav id="mainNav" className={scrolled ? "scrolled" : ""}>
        <div className="nav-name">Saurabh Sudhir</div>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a className="nav-resume" href="Saurabh_Sudhir_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
        <button 
          className={`nav-hamburger ${menuOpen ? 'open' : ''}`} 
          id="hamburger" 
          onClick={toggleMenu} 
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobileMenu">
        <a href="#work" onClick={closeMenu}>Work</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a className="mob-resume" href="Saurabh_Sudhir_Resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
      </div>
    </>
  );
};
