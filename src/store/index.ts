import { create } from "zustand";
import { File } from "../data";
import { Item } from "../classes/Item";
import { normalizeData } from "../utils/normalizeData";
import { getData } from "../api/getData";

type FileId = File["id"];

interface AppStore {
  data: File[];
  files: { [key: number]: Item };
  favorites: FileId[];
  isLoading: boolean;
  getFiles: () => void;
  addFavorite: (id: FileId) => void;
  removeFavorite: (id: FileId) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  data: [],
  files: [],
  favorites: [],
  isLoading: true,

  getFiles: async () => {
    set({ isLoading: true });

    const data = await getData();

    set({ data });
    set({ files: normalizeData(data) });
    set({
      favorites: data.filter((file) => file.isFavorite).map((file) => file.id),
    });
    set({ isLoading: false });
  },

  addFavorite: (id) => {
    set((state) => ({
      favorites: [...state.favorites, id],
    }));
    set((state) => ({
      data: state.data.map((file) =>
        file.id === id ? { ...file, isFavorite: true } : file
      ),
    }));
    set((state) => {
      return {
        files: normalizeData(state.data),
      };
    });
  },

  removeFavorite: (id) => {
    set((state) => ({
      favorites: state.favorites.filter((favorite) => favorite !== id),
    }));
    set((state) => ({
      data: state.data.map((file) =>
        file.id === id ? { ...file, isFavorite: false } : file
      ),
    }));
    set((state) => {
      return {
        files: normalizeData(state.data),
      };
    });
  },
}));
