import stubs from "./stubs";
import { isFilledSection, validateItems, findItems } from "./helpers";
import { Stubs, Store } from "./types";

export default () => {
  const { sections, items }: Stubs = stubs;
  const getItems = findItems(items);

  let store: Store = [];

  sections.forEach(section => {
    const items = getItems(section);
    if (!isFilledSection(section, items)) return;

    store.push({ ...section, items });
  });

  validateItems(items, store);

  return store;
};
