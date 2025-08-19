import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Goal: receive a list of 20 POkemons and create a link for each one of them

//0. Whre do we call the API? useEffect with the componentDidMount
//1. How do we contact the API? fetch () allows to connect APIs, or we can also use axios()(axios is the most effective)
//2. How do we process the call API? With promises, async/away or them/catch
//3. How do we receive the data? We need to use a State, we store the info in a state
//4. How do we render this data? using .map() and keys

function Sidebar() {
  const [allPokemon, setAllPokemons] = useState([]);

  useEffect(() => {
    //FETCH
    //   fetch("https://pokeapi.co/api/v2/pokemon")
    //     .then((response) => {
    //       console.log(response)
    //       return response.json() //This will convert the data to json
    //     })
    //     .then ((response)=>{
    //       console.log(response)
    //       setAllPokemons(response.results)
    //     })
    //     .catch(() => {
    //       console.log(error);
    //     });

    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=1000")
      .then((response) => {
        console.log(response);
        setAllPokemons(response.data.results)
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  return (
    <nav className="sidebar">
      {allPokemon.map((eachPokemon) => {
        return <Link to={`/pokemon-details/${eachPokemon.name}`} key={eachPokemon.name}>{eachPokemon.name}</Link>;
      })}
    </nav>
  );
}
export default Sidebar;
