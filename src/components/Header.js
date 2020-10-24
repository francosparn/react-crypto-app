import React from 'react';
import styled from '@emotion/styled';
import logo from '../logo.png';

const Heading = styled.header`
    display: grid;
    font-family: 'Raleway', sans-serif;
    background-color: rgba(124, 124, 124, 0.1);
    color: #FFF;
    padding: 1em;
    height: 40px;
`;

const Title = styled.p`
    font-size: 1.7em;
`;

const Span = styled.span`
    font-weight: 600;
`;

const Header = () => {
    return (
            <Heading>
                <Title>
                <img src={logo} alt="Logo" /> 
                    <Span> crypto</Span>App
                </Title>
            </Heading>
     );
}
 
export default Header;