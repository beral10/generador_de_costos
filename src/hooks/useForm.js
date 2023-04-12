import { useState } from 'react';

export const useForm = ( initialState = {} ) => {

    /* const [ title, setTitle] = useState('');
    const [ date, setDate ] = useState('');
    const [ price, setPrice ] = useState('');

    const titleHandleChange = (e) => {
        setTitle( e.target.value );
    };
    const dateHandleChange = (e) => {
        setDate( e.target.value );
    };
    const priceHandleChange = (e) => {
        setPrice( e.target.value );
    };

  return [ title, titleHandleChange, date, dateHandleChange, price, priceHandleChange ]; */

  const [ values, setValues ] = useState( initialState );

  const reset = () => {
    setValues( initialState );
  };

  const handleInputChange = ( { target } ) => {
    setValues({
        ...values,
        [ target.name ]: target. value
    });
  };

  return [ values, handleInputChange, reset ];

};
