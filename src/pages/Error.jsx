import React from "react";
import { useRouteError } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 2.5rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 500;
`;

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Wrapper>
      <Title>Oops!</Title>
      <Subtitle>Sorry, an unexpected error has occurred.</Subtitle>
      <Description>
        <i>{error.statusText || error.message}</i>
      </Description>
    </Wrapper>
  );
};
