import ReactDOM from "react-dom/client";
import Header from "home/Header";
import Footer from "home/Footer";
import "home/styles";
import "./index.css";

import CartContent from "./components/CartContent";

const App = () => (
  <div>
    <Header />

    <CartContent />

    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
