import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-address">
                Our Address: Almaty Towers
            </div>
            <div className="footer-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2344.4985614306356!2d76.95782474764792!3d43.23326192068748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836f01e4f95767%3A0x2e0d024e159bd817!2sAlmaty%20Towers!5e0!3m2!1sru!2skz!4v1711388034203!5m2!1sru!2skz"
                    width="100%"
                    height="300"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Almaty Towers Map"
                ></iframe>
            </div>
        </div>
    );
};

export default Footer;
