import React from "react";
import { PokemonCard } from "@/components/Pokemons/Card";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Grid = styled.div`
  margin: 5.0625rem 0 6.625rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
  row-gap: 3.3125rem;
`;

export const PokemonsGrid = ({ values: pokemons }) => {
  const navigate = useNavigate();

  return (
    <Grid>
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          value={pokemon}
          onClick={() => navigate("/pokedex/" + pokemon.id)}
        />
      ))}
    </Grid>
  );
};
