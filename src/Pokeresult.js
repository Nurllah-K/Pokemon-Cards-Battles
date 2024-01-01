import React, { Component } from "react";
import Pokedex from "./Pokedex";

class Pokeresult extends Component {
 static defaultProps = {
  pokemon: [
   { id: 4, name: 'CHARMANDER', type: 'fire', base_experience: 62 },
   { id: 7, name: 'SQUİRTLE', type: 'water', base_experience: 63 },
   { id: 11, name: 'METAPOD', type: 'bug', base_experience: 72 },
   { id: 12, name: 'BUTTERFREE', type: 'flying', base_experience: 178 },
   { id: 25, name: 'PİKACHU', type: 'electric', base_experience: 112 },
   { id: 39, name: 'JİGGLYPUFF', type: 'normal', base_experience: 95 },
   { id: 94, name: 'GENGAR', type: 'poison', base_experience: 225 },
   { id: 133, name: 'EEVEE', type: 'normal', base_experience: 65 }
  ],

 }
 render() {
  let handle1 = []
  let handle2 = [...this.props.pokemon]
  while (handle1.length < handle2.length) {
   let randomIndex = Math.floor(Math.random() * handle2.length)

   let randomPokemon = handle2.splice(randomIndex, 1)[0]
   handle1.push(randomPokemon)

  }
  let exp1 = handle1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)
  let exp2 = handle2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)
  return (
   <div>
    <Pokedex pokemon={handle1} exp={exp1} isWinner={exp1 > exp2} />
    <Pokedex pokemon={handle2} exp={exp2} isWinner={exp2 > exp1} />
   </div>

  )
 }

}

export default Pokeresult