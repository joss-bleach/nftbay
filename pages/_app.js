import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";

// Context
import { NFTBayProvider } from "../context/NFTBayContext";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER}
      appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID}
    >
      <NFTBayProvider>
        <Component {...pageProps} />
      </NFTBayProvider>
    </MoralisProvider>
  );
}

export default MyApp;
