import logo from "./logo.svg";
import "./App.css";
import LeftBar from "./Components/LeftBar/LeftBar";
import MainBody from "./Components/MainBody/MainBody";
import RightBar from "./Components/RightBar/RightBar";

function App() {
  return (
    <div className="App">
      <LeftBar />
      <MainBody />
      <RightBar />
    </div>
  );
}

export default App;
