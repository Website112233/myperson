import React from "react";
import {
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-contact">
                  <a href="mailto:rapi007001@gmail.com"> <p><Mail size={16} /> rapi007001@gmail.com</p></a> 
                   <a href="https://wa.me/6289503566412" > <p><Phone size={16} /> 089 503 566 412</p></a>
                </div>

                <div className="footer-socials">
                    <a href="https://www.instagram.com/_tidyx" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
                    <a href="https://www.linkedin.com/in/rapi-maulana1/" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
                </div>

                <div className="footer-made">
                    <p>Made with ❤️ by Rapicode</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
