import { data, File } from "../data";

const DELAY = 1000;

export const getData = async () => {
  return new Promise<File[]>((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, DELAY);
  });
};
