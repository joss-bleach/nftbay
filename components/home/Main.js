// Components
import Cards from "./cards/Cards";

// Styles
const styles = {
  container: "pl-14 w-4/5 ml-auto",
  intro: "w-3/5 flex flex-col space-y-4 pb-8",
  heading: "text-3xl font-semibold text-headline",
  subheading: "text-xl text-paragraph",
};

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <h1 className={styles.heading}>
          Discover, collect and purchase premium NFTs from the world&apos;s best
          marketplace.
        </h1>
        <h3 className={styles.subheading}>
          View our highly&#8209;curated NFT marketplace, where you can purchase
          exclusive digital assets with NFTBay coin.
        </h3>
      </div>
      <Cards />
    </div>
  );
};

export default Main;
