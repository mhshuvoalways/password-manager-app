import React from "react";
import { Footer, Navbar, Register } from "../components";
import styles from "../style";

const RegisterPage = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Register />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
