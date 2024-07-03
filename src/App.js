import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Nav/>
        <Main/>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
