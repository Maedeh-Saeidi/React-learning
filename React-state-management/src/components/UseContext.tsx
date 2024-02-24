import React from "react";
import { useState, useEffect, createContext, useContext } from "react";

interface Pokemon {
  id: number;
  name: {
    english: string;
    japanese: string;
    chinese: string;
    french: string;
  };
  type: string[];
  base: {
    HP: number;
    Attack: number;
    Defense: number;
    "Sp. Attack": number;
    " Sp. Defense": number;
    speed: number;
  };
}

function usePokemonSource(): {
  pokemon: Pokemon[];
} {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch("/pokemon.json")
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, []);

  return { pokemon };
}

const PokemonContext = createContext<ReturnType<typeof usePokemonSource>>(
  {} as unknown as ReturnType<typeof usePokemonSource>
);

function usePokemon() {
  return useContext(PokemonContext)!;
}

const PokemonList = () => {
  const { pokemon } = usePokemon();
  return (
    <div>
      {pokemon.map((p) => (
        <div key={p.id}>{p.name.english}</div>
      ))}
    </div>
  );
};
export default function UseContext() {
  const { pokemon } = usePokemonSource();

  return (
    <PokemonContext.Provider value={usePokemonSource()}>
      <PokemonList></PokemonList>
    </PokemonContext.Provider>
  );
}
