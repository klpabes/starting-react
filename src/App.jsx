import { useState, useEffect } from "react";

import styled from "@emotion/styled";

import "./App.css";

// import PokemonType from "./PokemonType";
import PokemonRow from "./components/PokemonRow";
import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";

const Title = styled.h1`
  text-align: center;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;

const Container = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`;

function App() {
  const [filter, filterSet] = useState("");
  const [pokemon, pokemonSet] = useState([]);
  const [selectedItem, selectedItemSet] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5173/pokemon.json")
      .then((res) => res.json())
      .then((data) => pokemonSet(data));
  }, []);

  return (
    <Container>
      <Title>Pokemon Search</Title>
      <TwoColumnLayout>
        <div>
          <PokemonFilter filter={filter} filterSet={filterSet} />
          <PokemonTable
            pokemon={pokemon}
            filter={filter}
            selectedItemSet={selectedItemSet}
          />
        </div>
        {selectedItem && <PokemonInfo {...selectedItem} />}
      </TwoColumnLayout>
    </Container>
  );
}

export default App;
