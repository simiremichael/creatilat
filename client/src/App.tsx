import React from 'react';
import './App.css';
import Header from './components/header';
import TopContainer from './components/TopContainer';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Header />
    <TopContainer />
    <ProductList />
    <Footer />
    </div>
  );
}

export default App;
