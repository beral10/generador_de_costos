import React from "react";
import { useForm } from "../hooks/useForm";

export const CostsAdd = ( { hadleAddCosts } ) => {

    const [ { title, amount, date }, handleInputChange, reset ] = useForm({
        title: '',
        amount: '',
        date: ''
    });

    const handleSubmit = ( e ) => {
        e.preventDefault();

        if( (title.trim().length && amount.trim().length && date.trim().length) <= 1 ){
            return;
        };

        const newCost = {
            id: new Date().getTime(),
            title,
            date: new Date( date ).toDateString(),
            price: amount,
            done: false,
        };
      
        hadleAddCosts( newCost );
        //dispatch(action); se sustiyó por lo que viene por referencia props.
      
        reset();
    }

  return (
    <form className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 items-end" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={handleInputChange}
          className="w-full p-1 sm:p-2 text-lg font-semibold text-black rounded-lg tracking-wider"
        />
      </div>
      <div>
        <label htmlFor="amount">Amount: </label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="0"
          max="999999"
          value={amount}
          onChange={handleInputChange}
          className="w-full p-1 sm:p-2 text-lg font-semibold text-black rounded-lg tracking-wider"
        />
      </div>
      <div>
        <label htmlFor="date">Date: </label>
        <input
          type="date"
          name="date"
          id="date"
          min="1900-01-31"
          max="2050-12-31"
          value={date}
          onChange={handleInputChange}
          className="w-full p-1 sm:p-2 text-lg font-semibold text-black rounded-lg"
        />
      </div>
      <button
        type="submit"
        className="px-5 py-1 bg-purple-900 hover:bg-purple-800 rounded-lg font-bold border border-white w-full h-12"
      >
        Add Expense
      </button>
    </form>
  );
};
