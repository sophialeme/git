import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer">
      <p>&copy; 2025 Loja Online. Todos os direitos reservados.</p>
      <div className="social-icons">
        <img src="../assets/images/facebook-icon.png" alt="Facebook" />
        <img src="../assets/images/instagram-icon.png" alt="Instagram" />
        <img src="../assets/images/twitter-icon.png" alt="Twitter" />
      </div>
    </footer>
  );
};

export default Footer;
