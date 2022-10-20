import { Flex } from "@/components/Flex";
import { colours } from "@/json/colors";
import React, { useMemo } from "react";
import styled from "styled-components";

const Card = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 10px solid ${(props) => props["color"]};
  cursor: pointer;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 1.6875rem 3.125rem 0;
  background: linear-gradient(
    ${(props) => props["color"]},
    ${(props) => `${props["color"]}90`}
  );
  height: 8rem;
`;

const Section = styled.section`
  padding: 3.5rem 0 0;
`;

const Sprite = styled.img`
  height: 9.3125rem;
  object-fit: contain;
`;

const Name = styled.h3`
  font-weight: 500;
  font-size: 1.5625rem;
  line-height: 1.83125rem;
  text-transform: capitalize;
  color: ${(props) => props["color"]};
  filter: brightness(0.5);
`;

const Type = styled.h4`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.025625rem;
  color: #4f4f4f;
  text-transform: capitalize;
`;

const Label = styled.span`
  font-weight: 400;
  font-family: inherit;
  color: #9f9f9f;
  font-size: 0.625rem;
  line-height: 0.75625rem;
`;

const Info = styled.div`
  border-bottom: 0.5px solid #e5e5e5;
  padding: 0 1.125rem 0.5rem;
`;

const Stats = styled.div`
  font-family: "Inter";
  display: flex;
  justify-content: space-between;
  padding: 0 1.125rem;
  gap: 2.875rem;
  margin: 0.875rem 0 1.875rem;
`;

const Stat = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props["color"]};
  font-weight: 600;
`;

export const PokemonCard = ({ value, onClick }) => {
  const pokemon = useMemo(() => {
    return {
      name: value.name,
      color: colours[value.types[0].type.name],
      sprite: value.sprites.other["official-artwork"].front_default,
      types: value.types.map(({ type }) => type.name).join(" / "),
      stats: value.stats.reduce((acc, { base_stat, stat }) => {
        return { ...acc, [stat.name]: base_stat };
      }, {}),
    };
  }, [value]);

  return (
    <Card color={pokemon.color} onClick={onClick}>
      <Header color={pokemon.color}>
        <Sprite src={pokemon.sprite} />
      </Header>
      <Section>
        <Info>
          <Flex column align-items="center">
            <Name color={pokemon.color}>{pokemon.name}</Name>
            <Type>{pokemon.types}</Type>
            <Label>Tipo</Label>
          </Flex>
        </Info>

        <Stats>
          <Stat color={pokemon.color}>
            <Label>HP</Label>
            {pokemon.stats.hp}
          </Stat>
          <Stat color={pokemon.color}>
            <Label>ATAQUE</Label>
            {pokemon.stats.attack}
          </Stat>
        </Stats>

        <Stats>
          <Stat color={pokemon.color}>
            <Label>DEFENSA</Label>
            {pokemon.stats.defense}
          </Stat>
          <Stat color={pokemon.color}>
            <Label>VELOCIDAD</Label>
            {pokemon.stats.speed}
          </Stat>
        </Stats>
      </Section>
    </Card>
  );
};
