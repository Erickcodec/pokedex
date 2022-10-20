import { fetchPokemon } from "@/async/pokemon";
import { Detail } from "@/components/Detail";
import { Movements } from "@/components/Movements";
import { colours } from "@/json/colors";

import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4.0625rem;
  margin: 10.1875rem auto 0;
  width: 100%;
  max-width: 103rem;
  padding-bottom: 9.625rem;
`;

export const PokedexById = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { pokemons } = useSelector(({ pokemon }) => pokemon);

  useEffect(() => {
    if (id) {
      dispatch(fetchPokemon(id));
    }
  }, [id]);

  const pokemon = useMemo(() => {
    if (pokemons.length) {
      const [pokemon] = pokemons;

      return {
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        color: colours[pokemon.types[0].type.name],
        sprite: pokemon.sprites.other["official-artwork"].front_default,
        movements: pokemon.moves.map(({ move }) => move.name),
        types: pokemon.types.map(({ type }) => type.name),
        abilities: pokemon.abilities.map(({ ability }) => ability.name),
        stats: pokemon.stats.reduce((acc, { base_stat, stat }) => {
          return { ...acc, [stat.name]: base_stat };
        }, {}),
      };
    }
  }, [pokemons]);

  return (
    <Section>
      <Detail value={pokemon} />
      <Movements movements={pokemon?.movements || []} />
    </Section>
  );
};
