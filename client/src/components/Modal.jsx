const Modal = ({ children }) => {
  return (
    <div>
      <div className="fixed w-10/12 mx-auto container inset-0 z-50 flex justify-center items-center">
        <div className="shadow-lg rounded-lg w-full lg:w-6/12 max-h-[90vh] relative">
          <div className="px-5 md:px-10 my-10">{children}</div>
        </div>
      </div>
      <p className="fixed inset-0 bg-gray-700 opacity-50 z-40"></p>
    </div>
  );
};

export default Modal;
