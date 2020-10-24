import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useCurrency from '../hooks/useCurrency';
import useCrypto from '../hooks/useCrypto';
import Error from '../components/Error';
import axios from 'axios';

const Button = styled.input`
    margin-top: 2rem;
    font-weight: 600;
    font-size: 15px;
    padding: 10px;
    background-color: #75D7A9;
    border: none;
    width: 100%;
    border-radius: 20px;
    color: #FFF; 
    transition: background-color .3s ease;

    &:hover{
        background-color: #57a781;
        cursor: pointer;
    }
`;

const Form = ({ saveCurrency, saveCrypto }) => {

    // Cryptocurrency listing state
    const [ cryptoList, saveCryptos ] = useState([]);

    const [ error, saveError ] = useState(false);

    const CURRENCY = [
        { code: 'USD', name: 'Dólar norteamericano' },
        { code: 'EUR', name: 'Euro' },
        { code: 'GBP', name: 'Libra esterlina' },
        { code: 'JPY', name: 'Yen japonés' },
        { code: 'ARS', name: 'Peso argentino' }
    ];

    // Use useCurrency
    const [ currency, SelectCurrency ] = useCurrency('Moneda', '', CURRENCY);

    // Use useCrypto
    const [ cryptocurrency, SelectCrypto ] = useCrypto('Criptomoneda', '', cryptoList);

    // Execute API call
    useEffect(() => {
        const consultAPI = async () => {
            
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const result = await axios.get(url);

            saveCryptos(result.data.Data);
        }
        consultAPI();
    }, []);

    // When the submit button is pressed
    const quoteCurrency = e => {
        e.preventDefault();

        // Validation
        if(currency.trim() === '' || cryptocurrency.trim() === ''){
            saveError(true);
            return;
        }

        // Send data to main component
        saveError(false);
        saveCurrency(currency);
        saveCrypto(cryptocurrency);
    }


    return ( 
        <form
            onSubmit={quoteCurrency}
        >

            { error ? <Error message='Todos los campos del formulario son obligatorios' /> : null }

            <SelectCurrency />
            <SelectCrypto />
            
            <Button 
                type="submit"
                value="Calcular"
            />
        </form>
     );
}
 
export default Form;