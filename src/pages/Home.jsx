import React from "react";
import styled from "styled-components";
import localStorage from "localforage";
import BrandImage from "@/assets/brand.png";
import { Flex } from "@/components/Flex";
import { useDispatch } from "react-redux";
import { setGlobalName } from "@/store/slices/user.slice";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Section = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Brand = styled.img`
  margin-bottom: 4.5rem;
`;

const Form = styled.form`
  margin: 0 auto;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-family: "Inter";
  font-size: 3.125rem;
  font-weight: 700;
  line-height: 3.8125rem;
  color: #fe1936;
`;

const Subtitle = styled.p`
  font-family: "Inter";
  font-size: 1.5625rem;
  font-weight: 500;
  line-height: 1.875rem;
`;

const InputGroup = styled.div`
  margin-top: 3.75rem;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
  width: 100%;
`;

const Input = styled.input`
  font-weight: 500;
  font-size: 1.5625rem;
  line-height: 1.83125rem;
  color: #d3d3d3;
  background: white;
  padding: 1.1875rem 1.5rem;
  flex: 1;
`;

const Button = styled.button`
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.758125rem;
  color: white;
  background: #d93f3f;
  padding: 1.1875rem 2.98125rem 1.1875rem 3.031875rem;
`;

const Footer = styled.footer`
  height: fit-content;
`;

const Stripe = styled.div`
  height: 9.40625rem;
  background: linear-gradient(#dd1a1a 62%, #0c0c0c 38%);
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const Circle = styled.div`
  width: 7.3125rem;
  height: 7.3125rem;
  border: 0.75rem solid #000000;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    content: "";
    display: block;
    width: 3.9375rem;
    height: 3.9375rem;
    border: 0.75rem solid #000000;
    background-color: #212121;
    border-radius: 50%;
  }
`;

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const { target } = ev;

    localStorage.setItem("name", target.name.value, (err, value) => {
      if (err) {
        console.log(err);
        return;
      }
      dispatch(setGlobalName(value));

      navigate("/pokedex", {
        replace: true,
      });
    });
  };

  return (
    <Wrapper>
      <Section>
        <Form onSubmit={handleSubmit}>
          <Brand src={BrandImage} />
          <Flex column gap={1}>
            <Title>¡Hola entrenador!</Title>
            <Subtitle>Para poder comenzar, dame tu nombre</Subtitle>
          </Flex>

          <InputGroup>
            <Flex justify-content="center">
              <Input
                type="text"
                name="name"
                placeholder="Tu nombre (solo letras, sin espacios; maximo 32)"
                required
                pattern="[A-Za-z]{1,32}"
              />
              <Button type="submit">Comenzar</Button>
            </Flex>
          </InputGroup>
        </Form>
      </Section>

      <Footer>
        <Stripe>
          <Flex>
            <Circle />
          </Flex>
        </Stripe>
      </Footer>
    </Wrapper>
  );
};
