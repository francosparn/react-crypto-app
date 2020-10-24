import React from 'react';
import styled from '@emotion/styled';

const Info = styled.p`
    color: #F1F1F1;
    text-align: center;
    margin-top: 4em;
    margin-bottom: 2em;
    font-family: 'Century Gothic';
    font-size: 14px;
    font-weight: 600;

    @media(max-width: 992px){
        margin-bottom: 2em;
    }
`;

const Span = styled.span`
    color: #75D7A9;
`;

const Footer = () => {
    return ( 
        <Info>developed by <Span>Franco Sparn</Span> &copy; 2020</Info>
     );
}
 
export default Footer