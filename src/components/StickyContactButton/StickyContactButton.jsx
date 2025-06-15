import { Link } from "react-router-dom";
import "./StickyContactButton.css";
import { useModal } from "../ModalContext";

const StickyContactButton = () => {
  const {openModal}=useModal();
  return (
    <div className="sticky-contact-button">
      {/* <Link to="/contact">Contact</Link> */}
      <button onClick={openModal}>Contact</button>
    </div>
  );
};

export default StickyContactButton;
