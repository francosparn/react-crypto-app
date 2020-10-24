import React from 'react';
import styled from '@emotion/styled';

const ErrorMessage = styled.p`
    background-color: rgb(255, 155, 155);
    color: rgb(155, 21, 21);
    padding: 1rem;
    text-align: center;
    font-weight: 600;
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 10px;
    border: 1px solid #333;
`;

const Error = ({ message }) => {
    return ( <ErrorMessage>{message}</ErrorMessage> );
}
 
export default Error;