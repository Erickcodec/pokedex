import React, { useRef } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import pokeGift from "@/assets/poke.gif";

const Wrapper = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #dc211e;
  position: fixed;
  z-index: 80;
`;

const Image = styled.img``;

export const LoadingPage = ({ show = false }) => {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      nodeRef={nodeRef}
      unmountOnExit
      in={show}
      timeout={300}
      classNames="alert"
    >
      <Wrapper ref={nodeRef}>
        <Image src={pokeGift} alt="Loading pokemons..." />
      </Wrapper>
    </CSSTransition>
  );
};
