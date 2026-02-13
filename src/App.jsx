import "./App.css";
import Buttonlist from "./components/Buttonlist/Buttonlist";
import Root from "./components/Root/Root";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  return (
    <>
      <ThemeContext>
        <Root>
          <Buttonlist />
        </Root>
      </ThemeContext>
    </>
  );
}

export default App;
