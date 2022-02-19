import "./App.css";
import Header from "./components/header/header";
import Cardport from "./components/cards/cards";
import Fakebook from "./components/cards/fakebook";
import Introduction from "./components/intro/introduction";
import Outro from "./components/intro/outro";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Introduction></Introduction>
      <Cardport></Cardport>
      <Fakebook></Fakebook>
      <Outro></Outro>
    </div>
  );
}

export default App;
