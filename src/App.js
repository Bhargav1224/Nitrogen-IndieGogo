import "./App.css";
import { Routes } from "./Routes/Routes";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
   
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
