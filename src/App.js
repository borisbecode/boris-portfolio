import "./App.css";
import Header from "./components/header/header";
import Cardport from "./components/cards/cards";
import Fakebook from "./components/cards/fakebook";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Cardport></Cardport>
      <Fakebook></Fakebook>
    </div>
  );
}

export default App;
