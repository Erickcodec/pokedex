import axios from "axios";

const URL = "https://pokeapi.co/api/v2";

export const Pokemon = {
  get: async (params = {}) => {
    try {
      const response = await axios.get(`${URL}/pokemon`, {
        params,
      });

      const { results, count } = response.data;

      const fetchUrls = results.map(async ({ url }) => await axios.get(url));

      const responses = await Promise.all(fetchUrls);

      const pokemons = [];

      for (let response of responses) {
        const pokemon = response.data;
        pokemons.push(pokemon);
      }

      return { pokemons, count };
    } catch (error) {}
  },
  getById: async (id) => {
    try {
      const response = await axios.get(`${URL}/pokemon/${id}`);
      const pokemon = await response.data;

      return { pokemon };
    } catch (error) {}
  },
  getTypes: async () => {
    try {
      const response = await axios.get(`${URL}/type`);
      const { results } = await response.data;
      const types = results.map(({ name }) => name);

      return { types };
    } catch (error) {}
  },
};
