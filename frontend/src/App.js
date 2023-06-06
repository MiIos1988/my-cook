import { Outlet } from "react-router-dom";
import ArrangeObject from "./components/ArrangeObject";
import UseEx from "./components/UseEx";
import NavbarComponent from "./components/NavbarComponent";

const App = () => {

  return (
    <div className="App">
      <NavbarComponent/>
      <UseEx/>
      <ArrangeObject />

      <Outlet/>
    </div>
  );
}

export default App;
