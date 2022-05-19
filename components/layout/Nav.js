// Web3
import { ConnectButton } from "web3uikit";

// Styles
const styles = {
  header: "w-full py-6",
  nav: "flex flex-row justify-between items-center",
  logo: "text-lg font-semibold text-theme-button",
};

const Nav = () => {
  return (
    <header className={styles.header}>
      <div className={styles.nav}>
        <h3 className={styles.logo}>NFTBay</h3>
        <ConnectButton />
      </div>
    </header>
  );
};

export default Nav;
