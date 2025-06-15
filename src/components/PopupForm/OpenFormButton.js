// components/PopupForm/OpenFormButton.js
import React from "react";
import { useForm } from "../FormContext/FormContext";

const OpenFormButton = ({ className = "", label = "Book Now" }) => {
  const { openForm } = useForm();

  return (
    <button
      type="button"
      className={className}
      onClick={(e) => {
        e.preventDefault();
        openForm();
      }}
    >
      {label}
    </button>
  );
};

export default OpenFormButton;
