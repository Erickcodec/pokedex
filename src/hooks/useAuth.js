import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import localStorage from "localforage";
import { setGlobalName } from "@/store/slices/user.slice";

export const useAuth = () => {
  const dispatch = useDispatch();
  const { name, isAuthenticated } = useSelector(({ user }) => user);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    localStorage.getItem("name", (err, value) => {
      if (err) {
      } else {
        if (value) {
          dispatch(setGlobalName(value));
        }
      }

      setLoading(false);
    });
  }, []);

  return {
    name,
    loading,
    isAuthenticated,
  };
};
