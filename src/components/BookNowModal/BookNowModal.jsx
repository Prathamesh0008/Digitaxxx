// src/components/BookNowModal.jsx
import React from "react";
import "./BookNowModal.css";
import { useModal } from "../ModalContext"; // Adjust path if needed

const BookNowModal = () => {
  const { isModalOpen, closeModal } = useModal(); // ✅ use closeModal instead of setIsModalOpen

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    console.log("Form data:", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
    closeModal(); // ✅ close the modal
  };

  if (!isModalOpen) return null;

  return (
    <div className="booknow-overlay" onClick={closeModal}>
      <div className="booknow-modal" onClick={(e) => e.stopPropagation()}>
        <h2>Book Your Appointment</h2>
        <form className="booknow-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message (optional)"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit" className="submit-btn">Submit</button>
          <button type="button" className="close-btn" onClick={closeModal}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookNowModal;
