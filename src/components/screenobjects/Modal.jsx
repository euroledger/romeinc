import React from 'react';
import './modal.css';

const Modal = ({ show, onClose, title, imageSrc }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">{title}</h4>
          <button onClick={onClose} className="close-button">&times;</button>
        </div>
        <div className="modal-body">
          {/* Display the cropped image here */}
          {imageSrc && <img src={imageSrc} alt="Zoomed Area" style={{ maxWidth: '100%', height: 'auto' }} />}
        </div>
      </div>
    </div>
  );
};

export default Modal;
