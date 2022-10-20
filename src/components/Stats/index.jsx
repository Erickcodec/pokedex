import React from "react";
import styled from "styled-components";
import { ProgressBar } from "@/components/ProgressBar";
import PokeImage from "@/assets/lightness-pokeball.png";

const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 4.016875rem;
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 2.8125rem;
  line-height: 3.295625rem;
  margin-right: 2rem;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const Line = styled.span`
  border-bottom: 1px solid #d3d3d3;
  flex: 1;
  height: 0;
`;

const Sprite = styled.img``;

const Wrapper = styled.article``;

export const Stats = ({ stats }) => {
  return (
    <Wrapper>
      <Header>
        <Title>Stats</Title>
        <Line />
        <Sprite src={PokeImage} />
      </Header>
      <Section>
        <ProgressBar from={0} to={150} value={stats.hp} label="HP" />
        <ProgressBar from={0} to={150} value={stats.attack} label="Ataque" />
        <ProgressBar from={0} to={150} value={stats.defense} label="Defensa" />
        <ProgressBar from={0} to={150} value={stats.speed} label="Velocidad" />
      </Section>
    </Wrapper>
  );
};
