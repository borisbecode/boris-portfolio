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
import Experimental from "./components/cards/experimental";
import Cookie from "./components/cards/cookieclicker";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Introduction></Introduction>
      <Wedding></Wedding>
      <Experimental></Experimental>
      <Fakebook></Fakebook>
      <Getflix></Getflix>
      <Data></Data>
      <Cookie></Cookie>
      <Cardport></Cardport>
      <Restaurant></Restaurant>

      <Outro></Outro>
    </div>
  );
}

export default App;
