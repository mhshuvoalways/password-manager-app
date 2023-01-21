import styles from "../style";
import { Footer, Navbar, PassGen, PasswordTip } from "../components";

const PassGenPage = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <PassGen />
        <PasswordTip />
        <Footer />
      </div>
    </div>
  </div>
);

export default PassGenPage;
