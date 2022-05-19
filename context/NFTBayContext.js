import { useState, useEffect, createContext } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";

export const NFTBayContext = createContext();

export const NFTBayProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");

  const {
    authenticate,
    isAuthenticated,
    enableWeb3,
    Moralis,
    user,
    isWeb3Enabled,
  } = useMoralis();

  // Check username of authenticated user
  useEffect(() => {
    getUserDetails();
  }, [isAuthenticated, user, username]);

  // Authentication infp
  const getUserDetails = async () => {
    if (isAuthenticated) {
      const currentUser = await user?.get("nickname");
      setUsername(currentUser);
    }
  };

  // Set user nickname from form in sidebar/modal
  const handleSetUsername = () => {
    if (user) {
      if (nickname) {
        user.set("nickname", nickname);
        user.save();
        setNickname("");
      } else {
        console.log("No user input...");
      }
    } else {
      console.log("No user authentication...");
    }
  };

  return (
    <NFTBayContext.Provider
      value={{
        isAuthenticated,
        nickname,
        setNickname,
        username,
        handleSetUsername,
      }}
    >
      {children}
    </NFTBayContext.Provider>
  );
};
