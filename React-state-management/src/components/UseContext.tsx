import React from "react";
import { usePokemon, PokemonProvider } from "./store";

function SearchBox() {
  const { search, setSearch } = usePokemon();
  return (
    <input
      placeholder="Search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    ></input>
  );
}

const PokemonList = () => {
  const { pokemon } = usePokemon();
  return (
    <ul>
      {pokemon.map((p) => (
        <div key={p.id}>{p.name.english}</div>
      ))}
    </ul>
  );
};
export default function UseContext() {
  return (
    <PokemonProvider>
      <div className="mx-auto max-w-3xl">
        <SearchBox />
        <PokemonList />
      </div>
    </PokemonProvider>
  );
}
