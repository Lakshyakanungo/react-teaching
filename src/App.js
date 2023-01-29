import "./App.css";
import {
  Heading,
  Section1,
  Section2,
  Section3,
  Topper,
  SideNavbar,
} from "./components";

function App() {
  return (
    <div className="App">
      <Heading />
      <Section1 />
      <Section2 />
      <Section3 />
      <SideNavbar />
      <Topper />
    </div>
  );
}

export default App;
