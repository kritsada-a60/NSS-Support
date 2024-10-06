import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n";
import MainContainer from "./MainContainer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<MainContainer />);
