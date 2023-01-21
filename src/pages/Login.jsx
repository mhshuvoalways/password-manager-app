import React from "react";
import { Footer, Navbar, Login } from "../components";
import styles from "../style";

const LoginPage = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Login />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
