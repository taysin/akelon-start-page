import { Item } from "../../store/getStore";
import { useEffect, useState } from "react";
import getStore from "../../store/getStore";

export const useStore = () => {
  const [store, setStore]: [Item[], any] = useState([]);

  useEffect(() => {
    const store = getStore();

    setStore(store);
  }, []);

  return store;
};
