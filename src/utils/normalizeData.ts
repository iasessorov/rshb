import { File } from "../data";
import { Item } from "../classes/Item";

export type NormalizedData = {
  [key: number]: Item;
};

export const normalizeData = (data: File[]) => {
  const result: NormalizedData = data.reduce((acc, item) => {
    return { ...acc, [item.id]: new Item(item) };
  }, {});

  data.forEach((item) => {
    if (item.parentId) {
      result[item.parentId].children.push(result[item.id]);
    }
  });

  return result;
};
