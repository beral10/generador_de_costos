import React, { useEffect, useReducer } from "react";
import { CostsAdd } from "./CostsAdd";
import { CostsList } from "./CostsList";
import { expensiveReducer } from "./expensiveReducer";

const init = () =>{

  return JSON.parse( localStorage.getItem('costs') ) || [];
  /* return [
            {
              id: new Date().getTime(),
              title: "Hola a todos, esta será mi primera prueba.",
              date: new Date(),
              price: 200,
              done: false,
            },
          ]; */
} 

export const App = () => {
  const [costs, dispatch] = useReducer( expensiveReducer, [], init );

  useEffect( () => {
    localStorage.setItem( 'costs', JSON.stringify( costs ) );
  }, [ costs ]);

  const handleRemove = ( costId ) => {

    const action = {
      type: 'remove',
      payload: costId
    };

    dispatch(action);

  };

  const hadleAddCosts = ( newCost ) => {

    dispatch({
      type: "add",
      payload: newCost,
    });
  };

  return (
    <div className="bg-gray-600 w-full h-full min-h-screen py-10 px-10 md:px-20">
      <h1 className="text-2xl md:text-4xl text-white font-bold text-center">
        {" "}
        Cost list generator: {costs.length}
      </h1>
      <div>
        <div className="bg-purple-700 border-2 border-black my-8 p-5 text-white rounded-xl">
          <CostsAdd hadleAddCosts = { hadleAddCosts } />
        </div>
        <CostsList 
          costs = { costs }
          handleRemove = { handleRemove }
        />
      </div>
    </div>
  );
};
