import React from "react";
import dayjs from "dayjs";
import "./HomeFooter.css";
import { FaMailBulk, FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiFillControl } from "react-icons/ai";
export default function HomeFooter() {
  return (
    <React.Fragment>
      <footer className="home-footer">
        <div className="footer-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3542.269300796015!2d-55.91599382517728!3d-27.398526713676322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9457be422ced0e49%3A0xb6ece7619141bec9!2sHotel%20Santa%20Catalina!5e0!3m2!1ses!2sar!4v1746588307514!5m2!1ses!2sar"
            width="100%"
            height="400"
            style={{ border: 0, margin: 0, padding: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>
        <div className="footer-section footer-brand">
          <h2>Partido Democrata</h2>
          <p>© {dayjs().year()} Partido Democrata. Todos los derechos reservados.</p>
          <p>Web oficial del partido — compromiso y voz ciudadana.</p>
          <div className="social-links">
            <a href="https://wa.me/tu-numero" aria-label="Whatsapp"><FaWhatsapp /></a>
            <a href="mailto:tu@email.com" aria-label="Email"><FaMailBulk /></a>
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
          </div>
          <p>Desarrollado por Pelinski Carlos</p>
          <div className="social-links">
            <a href="https://wa.me/tu-numero" aria-label="Whatsapp"><FaWhatsapp /></a>
            <a href="mailto:tu@email.com" aria-label="Email"><FaMailBulk /></a>
            <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
          </div>
          <div className="footer-divider"></div>
          <a href="/authentication" className="footer-link"><AiFillControl/> Panel de control</a>

        </div>
      </footer>
    </React.Fragment>
  );
}
