import React from 'react';
import "./App.css";
import Header from "./Components/Header";
import PokemonContainer from './Components/PokemonContainer';

export function App() {
 
    return(
        <div id="parent">
                <Header/>
                <PokemonContainer/>
        </div>
    )
    
  }
  