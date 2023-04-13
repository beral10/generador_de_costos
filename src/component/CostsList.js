import React from 'react'

export const CostsList = ( { costs, handleRemove } ) => {

  const texto = <div className="bg-black p-5 rounded-xl">
    <p className='text-white text-xl font-semibold w-full text-center'> No lists to generate have been received. You can start adding right now! </p>
  </div>

    return costs.length === 0 ? texto : (
        <div className="bg-black p-5 rounded-xl">
          {
            costs.map((cost) => {
              return (
                <div
                  key={cost.id}
                  className="bg-gray-600 p-3 my-4 rounded-lg flex flex-col md:flex-row gap-2 items-center border border-white"
                >
                  <div className="w-full md:w-28 md:h-20 py-1 md:px-1 rounded-lg text-white md:bg-black border border-white flex justify-center items-center text-center">
                    <p> {cost.date} </p>
                  </div>
                  <div className='w-full flex flex-col md:flex-row md:justify-center md:items-center gap-2'>
                    <p className="inline-block align-middle px-1 text-white text-lg text-center flex-1">
                      {" "}
                      {cost.title}{" "}
                    </p>
                    <div className="w-full md:w-36 md:h-12 py-1 flex justify-center items-center border border-white rounded-lg bg-purple-900 text-white font-semibold text-lg">
                      <p>$ {cost.price} </p>
                    </div>
                    <button
                      className="w-full md:w-32 md:h-12 py-1 flex justify-center items-center border border-white rounded-lg bg-red-800 hover:bg-red-700 text-white font-semibold text-lg"
                      onClick={() => handleRemove(cost.id)}
                    >
                      Remove
                    </button>
                  </div>                  
                </div>
              );
            })
          }
        </div>
    );
}
