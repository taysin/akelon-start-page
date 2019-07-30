import { Store } from "../../store/types";
import { useEffect, useState } from "react";
import getStore from "../../store/getStore";

export const useStore = () => {
  const [store, setStore]: [Store, any] = useState([]);

  useEffect(() => {
    const store = getStore();

    setStore(store);
  }, []);

  return store;
};
