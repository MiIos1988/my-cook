import { Outlet } from "react-router-dom";
import ArrangeObject from "./components/ArrangeObject";

const App = () => {

  return (
    <div className="App">
      <ArrangeObject />
      <Outlet/>
    </div>
  );
}

export default App;
