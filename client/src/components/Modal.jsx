const Modal = ({ children }) => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex justify-center items-center">
        <div className="w-full lg:w-5/12 relative">
          <div className="px-5 md:px-10 my-10">{children}</div>
        </div>
      </div>
      <p className="fixed inset-0 bg-gray-700 opacity-50 z-40"></p>
    </>
  );
};

export default Modal;
