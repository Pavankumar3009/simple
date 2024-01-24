import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Bottom_Navbar from "./components/bottomnav";
import Card from "./components/card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Bottom_Navbar />
      <Card />
    </div>
  );
}

export default App;
