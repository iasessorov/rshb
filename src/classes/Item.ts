import { File } from "../data";

export class Item {
  id: number;
  type: "dir" | "file";
  parentId: number | null;
  name: string;
  isFavorite: boolean;
  children: Item[];

  constructor(file: File) {
    this.id = file.id;
    this.type = file.type;
    this.parentId = file.parentId;
    this.name = file.name;
    this.isFavorite = file.isFavorite;
    this.children = [];
  }

  isImage = () => {
    return this.name.endsWith(".jpg") || this.name.endsWith(".png");
  };
}
