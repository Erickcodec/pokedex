import { createSearchParams, useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { matchSorter } from "match-sorter";

import { Pagination } from "@/components/Pagination";
import { ListBox } from "@/components/ListBox";
import { fetchPokemons, fetchTypes } from "@/async/pokemon";

import { Flex } from "@/components/Flex";
import { PokemonsGrid } from "@/components/Pokemons/Grid";
import { Empty } from "@/components/Empty";

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Section = styled.section`
  margin: 0 auto;
  width: 100%;
  max-width: 103rem;
  padding-bottom: 9.625rem;
`;

const InputGroup = styled.div`
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
  flex: 1;
  display: flex;
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

const InputButton = styled.button`
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.758125rem;
  color: white;
  background: #d93f3f;
  padding: 1.1875rem 2.98125rem 1.1875rem 3.031875rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Inter";
  line-height: 1.815625rem;
  margin-bottom: 2.5rem;

  b {
    color: #fe1936;
  }
`;

export const Pokedex = () => {
  const dispatch = useDispatch();
  const [textSearch, setTextSearch] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const { pokemons, types, count } = useSelector(({ pokemon }) => pokemon);

  const { name } = useSelector(({ user }) => user);
  const [searchParams, setSearchParams] = useSearchParams(
    createSearchParams({
      offset: 0,
      limit: 20,
    })
  );

  const [type, setType] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchTypes());
  }, []);

  useEffect(() => {
    if (pokemons) {
      setFilteredPokemons([...pokemons]);
    }
  }, [pokemons]);

  useEffect(() => {
    dispatch(
      fetchPokemons({
        limit: searchParams.get("limit"),
        offset: searchParams.get("offset"),
      })
    );
  }, [searchParams]);

  useEffect(() => {
    setFilteredPokemons(
      matchSorter(pokemons, type ?? "", {
        keys: ["types.*.type.name"],
      })
    );
  }, [type]);

  const handlePageChange = (page) => {
    setPage(page);
    setSearchParams(
      createSearchParams({
        limit: 20,
        offset: 20 * (page - 1),
      })
    );
  };

  const handleChange = (ev) => {
    const { target } = ev;
    setTextSearch(target.value);
  };

  const handleSearch = () => {
    setFilteredPokemons(
      matchSorter(pokemons, textSearch, {
        keys: ["name"],
      })
    );
  };

  return (
    <Wrapper>
      <Section>
        <Subtitle>
          <b>Bienvenido {name}</b>, aquí podrás encontrar tu pokemón favorito
        </Subtitle>

        <Flex gap={1.5}>
          <InputGroup>
            <Input
              type="text"
              placeholder="Busca un pokemon"
              value={textSearch}
              onChange={handleChange}
            />
            <InputButton onClick={handleSearch}>Buscar</InputButton>
          </InputGroup>

          <ListBox
            current={type}
            items={types || []}
            onSelect={setType}
            placeholder="Todos los pokemones"
          />
        </Flex>

        {filteredPokemons.length ? null : <Empty />}

        <PokemonsGrid values={filteredPokemons} />

        <Pagination
          count={count}
          pagesOnView={8}
          rowsPerPage={searchParams.get("limit")}
          page={page}
          onPageChange={handlePageChange}
        />
      </Section>
    </Wrapper>
  );
};
