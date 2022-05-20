import { FaArrowRight } from "react-icons/fa";

// Helpers
import { shortName } from "../../../utils/helpers";

// Styles
const styles = {
  wrapper:
    "w-72 rounded border border-theme-sidebar p-6 transition duration-75 hover:shadow-xl cursor-pointer",
  imageContainer: "w-full rounded bg-blue-200 h-56",
  description: "flex flex-row justify-between items-center pt-2 text-sm",
  name: "font-semibold text-headline",
  coin: "text-xs text-paragraph",
};

const Card = ({ asset }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer} />
      <div className={styles.description}>
        <p className={styles.name}>{shortName(asset.name)}</p>
        <p>
          {asset.price} <span className={styles.coin}>NFTBC</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
