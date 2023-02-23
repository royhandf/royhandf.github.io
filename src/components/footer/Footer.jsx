import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <h1 className="footer-title">Royhan</h1>
        <ul className="footer-list">
          <li>
            <a href="#about" className="footer-link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#services" className="footer-link">
              Services
            </a>
          </li>
        </ul>
        <div className="footer-social">
          <a
            href="https://www.instagram.com/royhandf_/"
            className="footer-social-link"
            target="_blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/royhandf/"
            className="footer-social-link"
            target="_blank"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://web.facebook.com/even842/"
            className="footer-social-link"
            target="_blank"
          >
            <i class="bx bxl-facebook"></i>
          </a>
          <a
            href="https://github.com/royhandf"
            className="footer-social-link"
            target="_blank"
          >
            <i class="bx bxl-github"></i>
          </a>
        </div>
        <span className="footer-copy">
          &#169; M. Royhan Daffa. All rights reserved
        </span>
      </div>
    </footer>
  )
}

export default Footer
