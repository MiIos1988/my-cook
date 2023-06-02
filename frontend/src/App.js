import { Outlet } from "react-router-dom";
import ArrangeObject from "./components/ArrangeObject";
import UseEx from "./components/UseEx";

const App = () => {

  return (
    <div className="App">
      <UseEx/>
      <ArrangeObject />
      <Outlet/>
    </div>
  );
}

export default App;
