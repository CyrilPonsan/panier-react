import React, { Component } from 'react';
import './panier.css';

class Panier extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        console.log("panier", this.props.produitsPanier);
        let total = 0;
        return (
            <>
                <h1>Panier</h1>
                <table className='tablePanier'>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Quantité</th>
                            <th>Prix</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.produitsPanier.map((produit) => {
                                produit.prix = parseFloat(produit.prix);
                                total += (produit.quantite * produit.prix);
                                return (
                                    <tr key={produit.id}>
                                        <td>{produit.nom}</td>
                                        <td>{produit.quantite}</td>
                                        <td>{produit.prix.toFixed(2)} €</td>
                                        <td>{(produit.quantite * produit.prix).toFixed(2)} €</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Total</td>
                            <td>{total.toFixed(2)} €</td>
                        </tr>
                    </tfoot>
                </table>
            </>
        );
    }
}

export default Panier;