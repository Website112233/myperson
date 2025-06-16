import React from "react";
import {
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Download,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2 className="footer-title">Connect with Me</h2>
        <p className="footer-subtitle">Let’s build something cool together.</p>
      </div>

      <div className="footer-content">
        <div className="footer-contact">
          <a href="mailto:rapi007001@gmail.com">
            <Mail size={18} />
            <span>Email</span>
          </a>
          <a href="https://wa.me/6289503566412" target="_blank" rel="noopener noreferrer">
            <Phone size={18} />
            <span>WhatsApp</span>
          </a>
        </div>

        <div className="footer-socials">
          <a href="https://www.instagram.com/_tidyx" target="_blank" rel="noopener noreferrer">
            <Instagram size={20} />
            <span>Instagram</span>
          </a>
          <a href="https://www.linkedin.com/in/rapi-maulana1/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      <div className="footer-made">
        <p>Made with ❤️ by <strong>Rapicode</strong></p>
      </div>
    </footer>
  );
};

export default Footer;
