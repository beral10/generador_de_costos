import React from 'react'

export const CostsList = ( { costs, handleRemove } ) => {
    return (
        <div className="bg-black p-5 rounded-xl">
          {
            costs.map((cost) => {
              return (
                <div
                  key={cost.id}
                  className="bg-gray-600 p-3 my-4 rounded-lg flex gap-2 items-center border border-white"
                >
                  <div className="w-28 h-28 rounded-lg text-white bg-black border border-white flex justify-center items-center text-center">
                    <p> {cost.date} </p>
                  </div>
                  <p className="flex-1 text-white text-lg text-center">
                    {" "}
                    {cost.title}{" "}
                  </p>
                  <div className="w-36 h-12 flex justify-center items-center border border-white rounded-lg bg-purple-900 text-white font-semibold text-lg">
                    <p>$ {cost.price} </p>
                  </div>
                  <button
                    className="w-32 h-12 flex justify-center items-center border border-white rounded-lg bg-red-800 hover:bg-red-700 text-white font-semibold text-lg"
                    onClick={() => handleRemove(cost.id)}
                  >
                    Remove
                  </button>
                </div>
              );
            })
          }
        </div>
    );
}
