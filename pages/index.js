// Styles
const styles = {
  container: "h-full w-full px-12 flex flex-col",
  mainSection: "flex flex-row",
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
          <Sidebar />
          <Main />
        </section>
      </div>
    </>
  );
};

export default Home;
