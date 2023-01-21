import styles from "../style";
import { Footer, Navbar, AddPassword, ListPassword } from "../components";

const PassManagerPage = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <AddPassword />
        <ListPassword />
        <Footer />
      </div>
    </div>
  </div>
);

export default PassManagerPage;
