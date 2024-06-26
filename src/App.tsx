import "./App.css";
import Cooperate from "./components/cooperate/cooperate";
import Header from "./components/header/header";
import PortfolioTraking from "./components/portfolio_tracking/portfolio_traking";
import SubMain from "./components/sub_main/sub_main";
import "./index.css";
import AppRoutes from "./Routes";


function App() {
  return (
    <>
    <Header/>
     <SubMain/>
    <Cooperate/>
    <PortfolioTraking/>
    <AppRoutes/> 
    </>
  );
}

export default App;
