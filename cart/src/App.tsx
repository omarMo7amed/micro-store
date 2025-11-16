import ReactDOM from "react-dom/client";
import "home/styles";
import "./index.css";

import Layout from "./components/Layout";

const App = () => <Layout />;

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
