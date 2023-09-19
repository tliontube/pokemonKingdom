import React from 'react';
import "./App.css";
import Header from "./Components/Header";
import PokemonContent from "./Components/PokemonContent";

export function App() {
 
    return(
        <div id="parent">
                <Header/>
                <PokemonContent/>
        </div>
    )
    
  }
  