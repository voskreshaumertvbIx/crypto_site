import "./App.css";
import Cooperate from "./components/cooperate/cooperate";
import Header from "./components/header/header";
import SubMain from "./components/sub_main/sub_main";
import "./index.css";
import AppRoutes from "./Routes";


function App() {
  return (
    <>
    <Header/>
    <SubMain/>
    <Cooperate/>
    <AppRoutes/>
    </>
  );
}

export default App;
