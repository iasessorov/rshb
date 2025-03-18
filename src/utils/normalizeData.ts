import { File } from "../data";
import { isDir, DirItem } from "../classes/Dir";
import { FileItem } from "../classes/File";

export type NormalizedData = {
  [key: number]: FileItem | DirItem;
};

export const normalizeData = (data: File[]) => {
  const result: NormalizedData = data.reduce((acc, item) => {
    const normalizedItem = isDir(item) ? new DirItem(item) : new FileItem(item);

    return { ...acc, [item.id]: normalizedItem };
  }, {});

  data.forEach((item) => {
    if (item.parentId) {
      result[item.parentId].children.push(result[item.id]);
    }
  });

  return result;
};
