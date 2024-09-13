import React, { useState } from "react";
import {
  AddPassword,
  Footer,
  ListPassword,
  Modal,
  Navbar,
  ReOrder,
  UpdatePass,
} from "../components";
import styles from "../style";

const PassManagerPage = () => {
  const [modal, setModal] = useState({
    modal: false,
    value: "",
  });

  const [modalReorder, setModalReorder] = useState(false);

  const modalHandler = (id) => {
    setModal({
      modal: !modal.modal,
      value: id,
    });
  };

  const reorderHandler = () => {
    setModalReorder(!modalReorder);
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
          <ListPassword
            modalHandler={modalHandler}
            reorderHandler={reorderHandler}
          />
          {modal.modal && modal.value && (
            <Modal modalHandler={modalHandler}>
              <UpdatePass modalHandler={modalHandler} updateId={modal.value} />
            </Modal>
          )}
          {modalReorder && (
            <Modal modalHandler={reorderHandler}>
              <ReOrder modalHandler={reorderHandler} />
            </Modal>
          )}
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default PassManagerPage;
