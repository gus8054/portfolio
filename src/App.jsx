import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
