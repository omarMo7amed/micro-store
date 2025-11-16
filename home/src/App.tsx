import ReactDOM from "react-dom/client";

import Layout from "./components/Layout";
import "./index.css";
import "cart/styles";

const App = () => <Layout />;

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
