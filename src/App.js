import "./App.css";
import { ExploreCards } from "./Components/ExploreCards/ExploreCards";
import { Routes } from "./Routes/Routes";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  return (
    <div className="App">
      <Routes />
      {/* <ExploreCards /> */}
    </div>
  );
}

export default App;
