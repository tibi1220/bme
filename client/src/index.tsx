import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root");
if (!rootElement) throw Error("🚧 No root node found 🚧");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
