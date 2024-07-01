import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import "./index.css";
import AppRoutes from "./Routes";

function App() {
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
