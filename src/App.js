import React, { Fragment, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import image from './cryptocurrency.png';
import Header from './components/Header';
import Form from './components/Form';
import Quote from './components/Quote';
import Spinner from './components/Spinner';
import Footer from './components/Footer';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  
  @media(min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }

  @media(max-width: 992px){
    width: 90%;
    margin-bottom: 40px;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;

  @media(max-width: 990px){
    display: block;
    margin: 0 auto;
    margin-top: 30px;
  }
`;

const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  color: #FFF;
  font-size: 30px;
  text-align: left;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    margin-top: 10px;
    width: 100px;
    height: 6px;
    background-color: #75D7A9;
    display: block;
  }

  @media(max-width: 992px){
    margin-left: 1rem;
  }

`;

function App() {

  const [ currency, saveCurrency ] = useState('');
  const [ crypto, saveCrypto ] = useState('');
  const [ result, saveResult ] = useState({});
  const [ loading, saveLoading ] = useState(false);

  useEffect(() => {

  const quoteCrypto = async () => {

    // Avoid execution the first time
    if(currency === '') return;

    // Consult API to get a quote
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`;

    const result = await axios.get(url);

    // Show Spinner
    saveLoading(true);

    // Hide spinner and show result
    setTimeout(() => {

      // Change state of loading
      saveLoading(false);
      
      // Save quote
      saveResult(result.data.DISPLAY[crypto][currency]);
    
    }, 3000);

  }

  quoteCrypto();

  }, [currency, crypto]);

  // Show component or result
  const component = (loading) ? <Spinner /> : <Quote result={result} />

  return (
    <Fragment>
      <Header></Header>
      <Container>
        <div>
          <Image 
            src={image}
            alt="Cryptocurrency Image"
          />
        </div>
        <div>
          <Title>Cotizador de Criptomonedas</Title>

          <Form 
            saveCurrency={saveCurrency}
            saveCrypto={saveCrypto}
          />

          { component }

        </div>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default App;
