import React, { useState } from "react";
import styles from "../style";
import {
  Footer,
  Navbar,
  AddPassword,
  ListPassword,
  UpdatePass,
  Modal,
} from "../components";

const PassManagerPage = () => {
  const [modal, setModal] = useState({
    modal: false,
    updateId: "",
  });

  const modalHandler = (id) => {
    setModal({
      modal: !modal.modal,
      updateId: id,
    });
  };

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <AddPassword />
          <ListPassword modalHandler={modalHandler} />
          {modal.modal && (
            <Modal modalHandler={modalHandler}>
              <UpdatePass
                modalHandler={modalHandler}
                updateId={modal.updateId}
              />
            </Modal>
          )}
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default PassManagerPage;
