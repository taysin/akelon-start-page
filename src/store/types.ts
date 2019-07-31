export interface Section {
  id: number;
  title: string;
}

export interface ItemSrc {
  id: number;
  sectionId: number;
  name: string;
  description: string;
  url: string;
  img?: string;
}

export interface Item {
  id: number;
  name: string;
  description: string;
  url: string;
  img?: string;
}

export type StoreItem = Section & {
  items: Item[];
};

export type Store = StoreItem[];

export type Stubs = {
  sections: Section[];
  items: ItemSrc[];
};