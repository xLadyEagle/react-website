import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join our newsletter to receive our best vacation deals
                </p>
                <p className="footersubscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
                        <button className="sub-btn">Subscribe</button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                <div className="footer-link-item">
                        <h2>Contact Us</h2>
                        <Link to="/">Contact</Link>
                        <Link to="/">Support</Link>
                        <Link to="/">Destinations</Link>
                        <Link to="/">Sponsorships</Link>
                    </div>
                    <div className="footer-link-item">
                        <h2>Social Media</h2>
                        <a href="https://www.instagram.com/xladyeagle/" target="_blank">Instagram</a>
                        <a href="https://www.facebook.com/giulietta.montenegro" target="_blank">Facebook</a>
                        <a href="https://www.linkedin.com/in/giulietta-montenegro-3276921b8" target="_blank">LinkedIn</a>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            JAPAN <i className="fas fa-spa" />
                        </Link>
                    </div>
                    <small className="website-rights">Giulietta Montenegro&copy;</small>
                    <div className="social-icons">
                        <a 
                            className="social-icon-link facebook"
                            href="https://www.facebook.com/giulietta.montenegro" 
                            target="_blank" 
                            aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f"/>
                        </a>
                        <a
                            className="social-icon-link instagram"
                            href="https://www.instagram.com/xladyeagle/" 
                            target="_blank" 
                            aria-label="Instagram"
                        >
                            <i className="fab fa-instagram"/>
                        </a>
                        <a 
                            className="social-icon-link linkedin"
                            href="https://www.linkedin.com/in/giulietta-montenegro-3276921b8" 
                            target="_blank" 
                            aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin"/>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;
