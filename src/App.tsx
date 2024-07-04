import "./App.css";
import CoinDisplay from "./components/coin_display/crypto_stats";

import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import "./index.css";
import CryptoStats from "./page/CryptoStats/сryptoStats";
import AppRoutes from "./Routes";

function App() {
  return (
    <>
      {/* <Header />
      <AppRoutes />
      <Footer /> */}
     <CryptoStats/>
    </>
  );
}

export default App;
