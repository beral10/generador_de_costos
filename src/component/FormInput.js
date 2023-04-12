import React, { useState } from 'react';

export const FormInput = () => {

    const [ purchase, setPurchase] = useState('');
    const [ date, setDate ] = useState('');
    const [ amount, setAmount ] = useState('');

    const purchaseHandleChange = (e) => {
        setPurchase( e.target.value );
    };
    const dateHandleChange = (e) => {
        setDate( e.target.value );
    };
    const amountHandleChange = (e) => {
        setAmount( e.target.value );
    };

    const handleForm = (e) => {
        e.preventDefault();

        const informData = {
            purchase,
            date: new Date(date),
            amount
        };

        setPurchase('');
        setDate('');
        setAmount('');

        console.log(informData);
    };

  return (
    <form onSubmit={ handleForm }>
        <div>
            <label htmlFor='purchase'>Purchase type:</label>
            <input type='text' id='purchase' value={ purchase } onChange={ purchaseHandleChange }/>
        </div>
        <div>
            <label htmlFor='date'>date:</label>
            <input type='date' min='1960-01-01' max='2024-12-31' value={ date } onChange={ dateHandleChange }/>
        </div>
        <div>
            <label htmlFor='amount'>Amount:</label>
            <input type='number' id='amount' min='0.0' value={ amount} onChange={ amountHandleChange }/>
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>
    </form>
  )
}
