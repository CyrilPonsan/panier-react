import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Accueil from './pages/Accueil';
import Catalogue from './pages/Catalogue';
import Panier from './pages/Panier';
import Header from './components/header/Header';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { produits: [] };
  }

  async componentDidMount() {
    // on initialise les données
    const response = await fetch('http://127.0.0.1:8000/main');
    const datas = await response.json();
    datas.produits.map(prod => prod.quantite = 0);
    console.log("datas", datas);
    this.setState({ produits: datas.produits });
  }

  produitChange(id, quantite) {
    const produits = this.state.produits;
    produits.map((produit) => {
      if (produit.id === id) {
        produit.quantite = quantite;
      }
      return produit;
    });
    console.log(produits);
    this.setState({ produits : produits });
  }

  render() {
    console.log("toto", this.state.produits);
    const produitsPanier = this.state.produits.filter((produit) => {
      return produit.quantite !== 0 
    });
    console.log("panier", produitsPanier);
    return (
      <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Accueil />} />
          </Routes>
          <Routes>
            <Route path='/catalogue' element={<Catalogue produits={this.state.produits} produitChange={(id, quantite) => this.produitChange(id, quantite)} />} />
          </Routes>
          <Routes>
            <Route path='/panier' element={<Panier produitsPanier={produitsPanier} />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
