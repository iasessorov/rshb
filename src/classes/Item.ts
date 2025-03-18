export type ItemData = {
  id: number;
  parentId: number | null;
  name: string;
  isFavorite: boolean;
};

export abstract class Item {
  id: number;
  parentId: number | null;
  name: string;
  isFavorite: boolean;
  abstract type: "dir" | "file";

  constructor(data: ItemData) {
    this.id = data.id;
    this.parentId = data.parentId;
    this.name = data.name;
    this.isFavorite = data.isFavorite;
  }
}
