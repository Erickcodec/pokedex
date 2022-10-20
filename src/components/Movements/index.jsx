import React from "react";
import styled from "styled-components";
import PokeImage from "@/assets/lightness-pokeball.png";

const Wrapper = styled.article`
  background-color: white;
  padding: 3.858125rem 3rem 6.5rem 3.25rem;
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
`;

const Badge = styled.span`
  display: inline-block;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.758125rem;
  color: #302f2f;
  background-color: #e5e5e5;
  padding: 1.125rem 2.375rem;
  border-radius: 3.125rem;
  text-transform: capitalize;
`;

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
  flex-wrap: wrap;
  gap: 1.5rem;
  row-gap: 2rem;
`;

const Line = styled.span`
  border-bottom: 1px solid #d3d3d3;
  flex: 1;
  height: 0;
`;

const Sprite = styled.img``;

export const Movements = ({ movements }) => {
  return (
    <Wrapper>
      <Header>
        <Title>Movements</Title>
        <Line />
        <Sprite src={PokeImage} />
      </Header>
      <Section>
        {movements.map((movement, index) => (
          <Badge key={index}>{movement}</Badge>
        ))}
      </Section>
    </Wrapper>
  );
};
