import { useContext } from "react";
import Image from "next/image";

// Context
import { NFTBayContext } from "../../context/NFTBayContext";

// Icons
import {
  FaHistory,
  FaDollarSign,
  FaCompass,
  FaChartLine,
  FaCog,
  FaExclamation,
  FaBook,
} from "react-icons/fa";

// Styles
const styles = {
  container: "w-1/5 flex flex-col space-y-4",
  menuWrapper: "bg-theme-sidebar rounded py-4 px-3",
  profileInfoWrapper: "flex flex-row items-center space-x-2",
  profileImage: "",
  profileDetails: "flex flex-col",
  profileName: "font-semibold text-theme-headline",
  profileLink:
    "text-xs font-semibold text-theme-button underline cursor-pointer",
  list: "space-y-2",
  listItem:
    "flex items-center p-2 text-theme-headline rounded hover:bg-theme-sidebar-hover cursor-pointer",
  linkIcon: "text-theme-button mr-3",
};

const Sidebar = () => {
  const { isAuthenticated, username } = useContext(NFTBayContext);

  return (
    <div className={styles.container}>
      {isAuthenticated && (
        <div className={styles.menuWrapper}>
          <div className={styles.profileInfoWrapper}>
            <Image
              src={`https://avatars.dicebear.com/api/pixel-art/${username}.svg`}
              alt={username}
              height={75}
              width={75}
            />
            <div className={styles.profileDetails}>
              {username && (
                <h3 className={styles.profileName}>Welcome, {username}</h3>
              )}
              <p className={styles.profileLink}>View Profile</p>
            </div>
          </div>
        </div>
      )}

      <div className={styles.menuWrapper}>
        <ul className={styles.list}>
          <li>
            <a href="#" className={styles.listItem}>
              <FaHistory className={styles.linkIcon} />
              Transaction History
            </a>
          </li>
          <li>
            <a href="#" className={styles.listItem}>
              <FaBook className={styles.linkIcon} />
              Collections
            </a>
          </li>
          <li>
            <a href="#" className={styles.listItem}>
              <FaDollarSign className={styles.linkIcon} />
              Buy NFTBC
            </a>
          </li>
          <li>
            <a href="#" className={styles.listItem}>
              <FaCompass className={styles.linkIcon} />
              Explore
            </a>
          </li>
          <li>
            <a href="#" className={styles.listItem}>
              <FaChartLine className={styles.linkIcon} />
              Stats
            </a>
          </li>
          <li>
            <a href="#" className={styles.listItem}>
              <FaCog className={styles.linkIcon} />
              Settings
            </a>
          </li>
          <li>
            <a href="#" className={styles.listItem}>
              <FaExclamation className={styles.linkIcon} />
              Help
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
