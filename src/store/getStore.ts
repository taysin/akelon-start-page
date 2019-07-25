import stubs from "./stubs";

interface Section {
  id: number;
  title: string;
}

interface ItemSrc {
  id: number;
  sectionId: number;
  name: string;
  description: string;
  url: string;
}

export interface Item {
  id: number;
  section: Section;
  name: string;
  description: string;
  url: string;
}

type Stubs = {
  sections: Section[];
  items: ItemSrc[];
};

const findSection = (sections: Section[]) => (item: ItemSrc): Section => {
  const section = sections.find(section => section.id === item.sectionId);

  if (!section)
    throw new Error(`Не привязан раздел к карточке: "${item.name}" `);

  return section;
};

export default () => {
  const { sections, items }: Stubs = stubs;
  const getSection = findSection(sections);

  let store: Item[] = [];

  items.forEach(item => {
    const { sectionId, ...rest } = item;

    try {
      store.push({
        ...rest,
        section: getSection(item)
      });
    } catch (e) {
      console.error(e.message);
    }
  });

  return store;
};
