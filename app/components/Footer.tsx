import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-info flex w-full text-center justify-evenly">
          <ul className="footer-info-item-wrapper footer-info-location">
            <li className="footer-info-item-header font-italianno text-[27px]">Location</li>
            <li className="footer-info-item foter-item-decor mb-[22px]">130 Fulton St, New York </li>
            <li className="footer-info-item">NY 10038, USA</li>
          </ul>

          <ul className="footer-info-item-wrapper footer-info-openingHours">
            <li className="footer-info-item-header font-italianno text-[27px]">Opening hours</li>
            <li className="footer-info-item mb-[22px]">Mon - Sat: 11:00 - 23:00</li>
            <li className="footer-info-item mb-[22px]">Sun: 11:00 - 19:00</li>
            <li className="footer-info-item">Food in the restaurant and takeaway!</li>
          </ul>

          <ul className="footer-info-item-wrapper footer-info-socials">
            <li className="footer-info-item-header font-italianno text-[27px]">Sociale</li>
            <li className="footer-info-item mb-[8px]">Instagram</li>
            <li className="footer-info-item mb-[8px]">Facebook</li>
            <li className="footer-info-item">Twitter</li>
          </ul>
        </div>
        <div className="footer-copyright text-center mt-[56px]">
          Copyright ©2021 by Bonbons Chocolate
        </div>
      </div>
    </footer>
  );
}

export default Footer;
