import React, { Component } from 'react';
import "./produit.css";

class Produit extends Component {

    constructor(props) {
        super(props);
        this.state = { quantite: this.props.produit.quantite };
    }

    handleButtonClick(operateur) {
        let quantite = this.props.produit.quantite;
        switch (operateur) {
            case "+":
                quantite++;
                break;
            case "-":
                if (this.props.produit.quantite > 0) {
                    quantite--;
                }
                break;
            default:
                break;
        }
        
        this.props.produitChange(this.props.produit.id, quantite);

        // la mise à jour du stat provoque l'appel de la méthode render()
        //équivalent à : { quantite: quantite } car le "state" à le même nom que la variable
        //this.setState({ quantite }); 
    }

    render() {
        return (
            <>
                <article>
                    <div>
                        <p>{this.props.produit.nom}</p>
                        <p>{this.props.produit.prix} €</p>
                    </div>
                    <div>
                        <div>
                            <button onClick={() => this.handleButtonClick("-")}> - </button>
                        </div>
                        <p>{this.props.produit.quantite}</p>
                        <div>
                            <button onClick={() => this.handleButtonClick("+")}> + </button>
                        </div>
                    </div>
                </article>
            </>
        );
    }
}

export default Produit;