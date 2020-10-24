import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';
import currency from '../currency.png';

const Label = styled.label`
    font-family: Arial, Helvetica, sans-serif;
    color: #FFF;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.3rem;
    margin-top: 2rem;
    margin-bottom: 10px;
    display: block;
`;

const SelectStyle = styled.select`
    font-size: 15px;
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
`;

const Image = styled.img`
    width: 22px;
    height: 22px;
`;

const useCurrency = ( label, initialState, options ) => {

    // Define the states
    const [ state, updateState ] = useState(initialState);
    
    const Select = () => (
        <Fragment>
            <Label><Image src={currency} alt="Moneda" /> {label}</Label>
            <SelectStyle
                onChange={ e => updateState(e.target.value) }
                value={state}
            >
                <option value="">Seleccione una moneda</option>
                { options.map(option => (
                    <option key={option.code} value={option.code}>{option.name}</option>
                ))}
            </SelectStyle>
        </Fragment>
    );

    // Return the state, interface and function
    return [ state, Select, updateState ];
}

export default useCurrency;