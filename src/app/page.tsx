import styles from "./Page.module.scss";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigations/Navigation";
import Sidebar from "./components/Sidebar/Sidebar";
import { FC } from "react";

const Home: FC = () => {
  return (

        <main className={styles.layout}>
          <div>
            <Navigation />
          </div>
          <div className={styles.center}>
            <Sidebar />
          </div>
          <div className={styles.footer}>
            <Footer />
          </div>
        </main>

  );
};

export default Home;
