import { useEffect, useState } from "react";
import getData from "./services/getData";

const App = () => {

  const [allRecipes, setAllRecipes] = useState([])
  useEffect(() => {
    getData().then((result) => {
      console.log(result)
      let newObj = result.map((el, index) => {
        return {
          title: el.title,
          instructions: el.instructions,
          ingredients: el.extendedIngredients.map(element => {
            return { name: element.name, quantity: element.amount, unitShort: element.unit }
          }),
          image: el.image,
          readyInMinutes: el.readyInMinutes,
          vegan: el.vegan
        }
      })
      setAllRecipes(...allRecipes, newObj)
    }).catch((err) => {

    });
  }, []
  )
  return (
    <div className="App">
      <h1>work</h1>
      <button onClick={() => console.log(allRecipes)}>Send</button>
    </div>
  );
}

export default App;
