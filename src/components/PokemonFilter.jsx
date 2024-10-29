import styled from "@emotion/styled";

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;

const PokemonFilter = ({ filter, filterSet }) => (
  <Input
    type="text"
    value={filter}
    onChange={(event) => filterSet(event.target.value)}
  />
);

export default PokemonFilter;
