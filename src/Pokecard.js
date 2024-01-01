import React, { Component } from "react";

const PokeApı =
 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'

class Pokecard extends Component {

 render() {
  let imgSrc = `${PokeApı}${this.props.id}.png`
  return (
   <div className="Pokecard">
    <h2 className="Pokecard-title">{this.props.name}</h2>
    <div className="Pokecard-image">
     <img src={imgSrc} alt={this.props.name} ></img>
    </div>
    <div className="Pokecard-data">Type:{this.props.type}</div>
    <div className="Pokecard-data">Exp:{this.props.experience}</div>

   </div>
  )
 }
}

export default Pokecard