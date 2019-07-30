import { Item, ItemSrc, Section, Store } from "./types";

export const findItems = (items: ItemSrc[]) => (section: Section): Item[] => {
  return items.filter(item => item.sectionId === section.id);
};

export const isFilledSection = (section: Section, items: Item[]): boolean => {
  if (items.length === 0) {
    console.error(
      `К разделу ${section.title} с id ${
        section.id
      } не привязан ни один элемент`
    );
    return false;
  }
  return true;
};

export const validateItems = (items: ItemSrc[], store: Store) => {
  const isInStore = (item: ItemSrc): boolean => {
    let founded = false;
    store.forEach(storeItem => {
      const result = storeItem.items.find(
        signedItem => signedItem.id === item.id
      );

      if (result) {
        founded = true;
        return;
      }
    });

    return founded;
  };

  items.forEach(item => {
    if (!isInStore(item)) {
      console.error(
        `Элемент ${item.name} c id ${item.id} не привязан ни к одному разделу`
      );
    }
  });
};
