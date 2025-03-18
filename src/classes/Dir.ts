import { Item, ItemData } from "./Item";

export class DirItem extends Item {
  type = "dir" as const;
  children: Item[];

  constructor(data: ItemData) {
    super(data);
    this.children = [];
  }
}

export const isDir = (item: Item): item is DirItem => item.type === "dir";
