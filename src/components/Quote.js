import React, { Fragment } from 'react';
import styled from '@emotion/styled';

const Div = styled.div`
    background-color: #F1F1F1;
    padding: 1.5em;
    margin-top: 2em;
    margin-bottom: 2rem;
    border-radius: 10px;
    font-family: Arial, Helvetica, sans-serif;
`;

const Price = styled.h2`
    background-color: #75D7A9;
    padding: 1rem;
    color: #fff;
    border-radius: 10px;
    text-align: center;
    margin-bottom: 20px;
    border: none;
    transition: background-color 3s ease;

    &:hover{
        cursor: pointer;
        background-color: #57a781;
    }
`;

const Icon = styled.img`
    width: 50px;
    height: 50px;
    display: block;
    margin: auto;
    margin-bottom: 10px;
`;

const Info = styled.p`
    border-bottom: 1px solid #75D7A9;
    padding: 10px 0 10px 0;
    font-size: 14px;
`;

const Quote = ({ result }) => {
    
    if(Object.keys(result).length === 0) return null;

    return ( 
        <Fragment>
            <Div>
                <Icon src={`https://www.cryptocompare.com/${result.IMAGEURL}`} alt="Crypto" />
                <Price>Precio: <span>{result.PRICE}</span></Price>
                <Info><img src="img/stats.png" alt="Estadísticas" /><b> Variación en las últimas 24 horas</b>: {result.CHANGEPCT24HOUR}%</Info>
                <Info><img src="img/up.png" alt="Alto" /><b> Precio más alto en las últimas 24 horas</b>: <span>{result.HIGH24HOUR}</span></Info>
                <Info><img src="img/low.png" alt="Bajo" /><b> Precio más bajo en las últimas 24 horas</b>: <span>{result.LOW24HOUR}</span></Info>
                <Info><img src="img/update.png" alt="Actualización" /><b> Última actualización</b>: <span>{result.LASTUPDATE}</span></Info>
            </Div>
        </Fragment>
     );
}
 
export default Quote;