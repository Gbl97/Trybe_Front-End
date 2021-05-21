import React from 'react';
import { Route } from 'react-router-dom';
import Pokedex from './Pokedex';
import pokemons from './data';

export default function Content() {
    return (
        <main>
            <Route exact path="/" render={() => <Pokedex pokemons={pokemons} />} />
        </main>
    );
}