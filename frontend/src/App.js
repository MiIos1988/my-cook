import { useEffect } from "react";
import getData from "./services/getData";

const App = () => {
  useEffect(() => {
    getData()
  }, []
  )
  return (
    <div className="App">
      <h1>work</h1>
    </div>
  );
}

export default App;
