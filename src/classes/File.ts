import { Item, ItemData } from "./Item";

export class FileItem extends Item {
  type = "file" as const;
  children: Item[];

  constructor(data: ItemData) {
    super(data);
    this.children = [];
  }

  isImage(): boolean {
    return this.name.endsWith(".jpg") || this.name.endsWith(".png");
  }
}

export const isFile = (item: Item): item is FileItem => item.type === "file";
