import React,{useState,useEffect} from "react";
import PokemonCard from "./PokemonContent";
function PokemonContainer(){
    const [pokemonList, setpokemonList] = useState([]);
    const [url, setUrl] = useState(
        "https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1"
      );
      async function createPokemonObject(data) {
        const { results = [] } = data;
        let newPokemonList = [];
        for (const pokemon of results) {
          // api call again to get the sata of pokemon
          const { url } = pokemon;
          const response = await fetch(url);
          const data = await response.json();
          newPokemonList.push(data[0]);
        }
        setpokemonList((prevPokemonList) => [
          ...prevPokemonList,
          ...newPokemonList
        ]);
      }
      async function getAllPokemon() {
        const response = await fetch(url, { method: "get" });
        let data = await response.json();
        data = data[0];
        await createPokemonObject(data);
        setUrl(data.next);
      }
      useEffect(() => {
        getAllPokemon();
      }, []);
    return(
        <div className="pokemon-container">
        {pokemonList &&
          pokemonList.length &&
          pokemonList.map((pokemon) => {
            return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
          })}
      </div>
    )
}

export default PokemonContainer;