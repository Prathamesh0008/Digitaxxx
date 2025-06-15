import React from "react";
import "./WhatsAppButton.css";
import whatsappIcon from "../../images/whatsapp.png"; 

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919999999999" // ✅ Replace with your actual number
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </a>
  );
};

export default WhatsAppButton;
