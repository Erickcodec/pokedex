import { fetchPokemon, fetchPokemons, fetchTypes } from "@/async/pokemon";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [],
  types: [],
  count: 0,
  loading: "idle",
  error: "",
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  extraReducers: (builder) => {
    // pokemons
    builder.addCase(fetchPokemons.pending, (state) => {
      state.loading = "pending";
    });

    builder.addCase(fetchPokemons.fulfilled, (state, action) => {
      const { pokemons, count } = action.payload;

      state.pokemons = pokemons;
      state.count = count;
      state.error = "";
      state.loading = "idle";
    });

    builder.addCase(fetchPokemons.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = "idle";
    });

    // pokemon by id
    builder.addCase(fetchPokemon.pending, (state) => {
      state.loading = "pending";
    });

    builder.addCase(fetchPokemon.fulfilled, (state, action) => {
      const { pokemon } = action.payload;

      state.pokemons = [pokemon];
      state.error = "";
      state.loading = "idle";
    });

    builder.addCase(fetchPokemon.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = "idle";
    });

    // pokemon types
    builder.addCase(fetchTypes.pending, (state) => {
      state.loading = "pending";
    });

    builder.addCase(fetchTypes.fulfilled, (state, action) => {
      const { types } = action.payload;

      state.types = types;
      state.error = "";
      state.loading = "idle";
    });

    builder.addCase(fetchTypes.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = "idle";
    });
  },
});

export default pokemonSlice.reducer;
