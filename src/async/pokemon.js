import { createAsyncThunk } from "@reduxjs/toolkit";
import { Pokemon } from "@/services/Pokemon";

const { get, getById, getTypes } = Pokemon;

export const fetchPokemon = createAsyncThunk(
  "pokemon/fetchPokemonById",
  async (id) => {
    return getById(id);
  }
);

export const fetchPokemons = createAsyncThunk(
  "pokemon/fetchPokemons",
  async (params = {}) => {
    return get(params);
  }
);

export const fetchTypes = createAsyncThunk("pokemon/fetchTypes", async () => {
  return getTypes();
});
