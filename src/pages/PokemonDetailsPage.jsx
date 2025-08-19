import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PokemonDetailsPage() {


    const [pokemon, setPokemon]=useState(null) //We do not have the data yet




    const params = useParams()
    console.log(params)

  useEffect(() => {
    getData();

  }, [params.pokemonName]);

  //Function that we use to extract data
  const getData = async () => {

    setPokemon(null) //This will force the loading while we are fetching the new data

    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`);
      console.log(response.data);
      setPokemon(response.data)

    } catch (error) {
      console.log(error);
    }
  }

  if(pokemon===null){
    //The document has not been received yet
    return (<h3>Loading...</h3>)
  }

  return (

<div>
    
    <h3>Pokemon Details</h3>
    <h4>{pokemon.name}</h4>

    <p>height: {pokemon.height}</p>
    <p>Weight: {pokemon.weight}</p>
    
    <img src={pokemon.sprites.front_default} alt="" ></img>   
    </div>
  )
  
}

export default PokemonDetailsPage;
