import styled from "@emotion/styled";
import { useContext } from "react";
import PokemonContext from "../PokemonContext";

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;

const PokemonFilter = () => {
  const {
    state: { filter },
    dispatch,
  } = useContext(PokemonContext);
  return (
    <Input
      type="text"
      value={filter}
      onChange={(event) =>
        dispatch({
          type: "SET_FILTER",
          payload: event.target.value,
        })
      }
    />
  );
};

export default PokemonFilter;
