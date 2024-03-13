import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import "./common/Common.css";

function App() {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
}

export default App;
