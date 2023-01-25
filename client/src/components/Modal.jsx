import React from "react";

const Modal = ({ children, modalHandler }) => {
  return (
    <div className="fixed inset-0 z-50 py-10 px-10 sm:px-48">
      {children}
      <div
        className="fixed -z-10 inset-0 bg-black opacity-60"
        onClick={modalHandler}
      ></div>
    </div>
  );
};

export default Modal;
