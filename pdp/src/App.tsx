import ReactDOM from "react-dom/client";

import "./index.css";
import "home/styles";
import Layout from "./components/Layout";

const App = () => <Layout />;

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
