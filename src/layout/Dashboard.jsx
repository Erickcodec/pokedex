import React from "react";
import { Link, Outlet } from "react-router-dom";

import BrandImage from "@/assets/brand.png";
import styled from "styled-components";

import { LoadingPage } from "@/pages/Loading";
import { useSelector } from "react-redux";

const Header = styled.header`
  margin-bottom: 2.125rem;
`;

const Stripe = styled.div`
  height: 10.0625rem;
  background: linear-gradient(#dd1a1a 69%, #0c0c0c 31%);
  position: relative;
`;

const Brand = styled.img`
  height: 4.75rem;
  width: 26.9375rem;
  position: absolute;
  top: 2.9375rem;
  left: 8.3125rem;
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
  position: absolute;

  top: 4.875rem;
  right: 5.3125rem;

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

export const Dashboard = () => {
  const { loading } = useSelector(({ pokemon }) => pokemon);

  return (
    <>
      <LoadingPage show={loading == "pending"} />
      <Header>
        <Stripe>
          <Link to="/pokedex">
            <Brand src={BrandImage} />
          </Link>
          <Circle />
        </Stripe>
      </Header>
      <Outlet />
    </>
  );
};
