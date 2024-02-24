import {
  useEffect,
  createContext,
  useContext,
  useReducer,
  useCallback,
  useMemo,
} from "react";
import React from "react";

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
  search: string;
  setSearch: (search: string) => void;
} {
  // const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  // const [search, setSearch] = useState<String>("");
  type PokemonState = {
    pokemon: Pokemon[];
    search: string;
  };
  type PokemonAction =
    | { type: "setPokemon"; payload: Pokemon[] }
    | {
        type: "setSearch";
        payload: string;
      };

  const [{ pokemon, search }, dispatch] = useReducer(
    (state: PokemonState, action: PokemonAction) => {
      switch (action.type) {
        case "setPokemon":
          return { ...state, pokemon: action.payload };
        case "setSearch":
          return { ...state, search: action.payload };
      }
    },
    {
      pokemon: [],
      search: "",
    }
  );
  useEffect(() => {
    fetch("/pokemon.json")
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: "setPokemon",
          payload: data,
        })
      );
  }, []);

  const setSearch = useCallback((search: string) => {
    dispatch({
      type: "setSearch",
      payload: search,
    });
  }, []);

  const filteredPokemon = useMemo(
    () =>
      pokemon.filter((p) =>
        p.name.english.toLowerCase().includes(search.toLowerCase())
      ),
    [pokemon, search]
  );

  const sortedPokemon = useMemo(
    () =>
      [...filteredPokemon].sort((a, b) =>
        a.name.english.localeCompare(b.name.english)
      ),
    [filteredPokemon]
  );

  return { pokemon: sortedPokemon, search, setSearch };
}
const PokemonContext = createContext<ReturnType<typeof usePokemonSource>>(
  {} as unknown as ReturnType<typeof usePokemonSource>
);

export function usePokemon() {
  return useContext(PokemonContext)!;
}

export function PokemonProvider({ children }: { children: React.ReactNode }) {
  return (
    <PokemonContext.Provider value={usePokemonSource()}>
      {children}
    </PokemonContext.Provider>
  );
}
