import React from 'react';

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="modalOverlay">
      <div className="modalContainer">
        <div className="modalSettings">
          <p onClick={onClose} className="modalCloseBtn">
            X
          </p>
          <div className="btnContainer">
            <a href="/">
              <button className="modalLogout"> ๋ก๊ทธ์์ </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
