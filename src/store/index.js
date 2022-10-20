import { configureStore } from "@reduxjs/toolkit";
import user from "@/store/slices/user.slice";
import pokemon from "@/store/slices/pokemon.slice";

export default configureStore({
  reducer: {
    user,
    pokemon,
  },
});
