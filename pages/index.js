// Styles
const styles = {
  container: "h-full w-full px-12 flex flex-col",
  mainSection: "flex flex-row w-full",
  sidebarWidth: "w-1/5",
  mainWidth: "w-4/5",
};

// Components
import Nav from "../components/layout/Nav";
import Main from "../components/home/Main";
import Sidebar from "../components/home/Sidebar";

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <Nav />
        <section className={styles.mainSection}>
          <Sidebar className={styles.sidebarWidth} />
          <Main className={styles.mainWidth} />
        </section>
      </div>
    </>
  );
};

export default Home;
