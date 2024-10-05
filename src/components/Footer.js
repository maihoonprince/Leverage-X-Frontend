import React from 'react';
import '../styles/footer.css';


const Footer = () => {
  return (
    <footer className="main">
        <p>© 2024 LeverageX All Rights Reserved.</p>
        <div className="footer-links">
          {/* <Link to="/term"> Term  </Link> */}
          <a href="/term" >Terms & Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a >Refund Policy</a>
        </div>
      </footer>
  )
}

export default Footer;