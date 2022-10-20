import React from "react";
import { Stats } from "@/components/Stats";
import styled from "styled-components";
import { Flex } from "../Flex";
import { colours } from "@/json/colors";

const Wrapper = styled.article`
  background-color: white;
  padding: 0.25rem;
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  height: 11.5625rem;
  background: linear-gradient(
    ${(props) => props["color"]},
    ${(props) => `${props["color"]}90`}
  );

  position: relative;
`;

const Sprite = styled.img`
  height: 19.625rem;
  object-fit: contain;
  position: absolute;
  bottom: -15%;
`;

const Line = styled.span`
  border-bottom: 1px solid #9f9f9f;
  flex: 1;
  height: 0;
`;

const Id = styled.h5`
  margin-top: 2.5rem;
  font-weight: 500;
  font-size: 2.5rem;
  color: #416460;
  line-height: 2.93rem;
  padding: 0.375rem;
  border: 1px solid #9f9f9f;
  border-radius: 2px;
`;

const Name = styled.h5`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 2.8125rem;
  line-height: 3.295625rem;
  color: #416460;
  text-transform: capitalize;
  gap: 1.5rem;
  margin: 1.375rem 0;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 7rem 5rem;
`;

const Container = styled.div`
  width: 100%;
`;

const Subtitle = styled.div`
  font-weight: 500;
  font-size: 1.875rem;
  line-height: 2.1975rem;
  color: #302f2f;
  margin-bottom: 2rem;
`;

const Badge = styled.div`
  font-weight: 500;
  font-size: 1.5625rem;
  line-height: 1.83125rem;
  padding: 0.5rem 4rem;
  border-radius: 2px;
  flex: 1;
  text-transform: capitalize;
`;

const FilledBadge = styled(Badge)`
  color: white;
  background-color: ${(props) => props.color};
`;

const OuterBadge = styled(Badge)`
  color: #302f2f;
  border: 1px solid #d3d3d3;
`;

const Aspect = styled.div`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.171875rem;
  color: #0f0f2d;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  b {
    font-weight: 700;
    font-size: 1.5625rem;
    line-height: 1.83125rem;
  }
`;

export const Detail = ({ value }) => {
  return (
    <Wrapper>
      <Header color={value?.color}>
        <Sprite src={value?.sprite} />
      </Header>

      <Section>
        <Id>#{value?.id}</Id>
        <Container>
          <Name>
            <Line />
            {value?.name}
            <Line />
          </Name>
        </Container>

        <Flex gap={4}>
          <Aspect>
            Peso
            <b>{value?.weight}</b>
          </Aspect>
          <Aspect>
            Altura
            <b>{value?.height}</b>
          </Aspect>
        </Flex>

        <Container style={{ margin: "2rem 0 7.75rem" }}>
          <Flex gap={1.25}>
            <Flex column flex={1} align-items="center">
              <Subtitle>Tipo</Subtitle>
              <Flex gap={1.25} flex={1}>
                {value?.types.map((type) => (
                  <FilledBadge key={type} color={colours[type]}>
                    {type}
                  </FilledBadge>
                ))}
              </Flex>
            </Flex>

            <Flex column flex={1} align-items="center">
              <Subtitle>Habilidades</Subtitle>
              <Flex gap={1.25} flex={1}>
                {value?.abilities.map((ability) => (
                  <OuterBadge key={ability}>{ability}</OuterBadge>
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Container>
        <Container>
          <Stats stats={value?.stats || []} />
        </Container>
      </Section>
    </Wrapper>
  );
};
