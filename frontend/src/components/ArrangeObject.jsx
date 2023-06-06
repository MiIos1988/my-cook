

import React, { useContext, useEffect, useState } from 'react'
import getData from '../services/getData';
import { ContextDispatch, ContextRootState } from '../context/RootStoreContext';

function ArrangeObject() {
    const [allRecipes, setAllRecipes] = useState([])
    const context = useContext(ContextRootState)
    const dispatchContext = useContext(ContextDispatch)
    useEffect(() => {
      getData().then((result) => {
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
        <button onClick={() => {
          // console.log(allRecipes)
          dispatchContext({...context, testValue: 'HOME'})
          console.log(context)
        }
          }>Send</button>
      </div>
    );
}

export default ArrangeObject
