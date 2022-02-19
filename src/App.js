import "./App.css";
import Header from "./components/header/header";
import Cardport from "./components/cards/cards";
import Fakebook from "./components/cards/fakebook";
import Introduction from "./components/intro/introduction";
import Outro from "./components/intro/outro";
import Wedding from "./components/cards/wedding";
import Getflix from "./components/cards/getflix";
import Data from "./components/cards/data";
import Restaurant from "./components/cards/restaurant";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Introduction></Introduction>
      <Wedding></Wedding>
      <Fakebook></Fakebook>
      <Getflix></Getflix>
      <Data></Data>
      <Restaurant></Restaurant>

      <Cardport></Cardport>
      <Outro></Outro>
    </div>
  );
}

export default App;
